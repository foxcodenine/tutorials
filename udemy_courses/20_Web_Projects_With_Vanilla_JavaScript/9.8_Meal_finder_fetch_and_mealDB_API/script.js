// String.prototype.trim()
// The trim() method removes whitespace from both ends of a string.

// _____________________________________________________________________

const elem = {
    search: document.getElementById('search'),
    submit: document.getElementById('submit'),
    random: document.getElementById('random'),
    mealsEl: document.getElementById('meals'),
    resultHeading: document.getElementById('result-heading'),
    single_mealEL: document.getElementById('single-meal'),
}

// _____________________________________________________________________

let state = {};


/*__________________________MODEL_FUNCTIONS__________________________*/

// Search meal and fetch fro API
async function searchMeal(e) {
    e.preventDefault();


    // Clear single meal
    elem.single_mealEL.innerHTML = ' '

    // Get search term
    const term = elem.search.value;
    // elem.single_mealEL.innerHTML = `<p>${term}</p>`

    // Get Recipy object
    const respons = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    const data = await respons.json()
    
    state['data'] = data;
    return [state['data'], term];
}

// _____________________________

function getRecipeID(e) {
    
    const infoDiv = e.target.matches('h3') ? e.target.parentElement : e.target;

    const ID = infoDiv.dataset.mealid;

    return ID;
}


async function getMealByID(ID) {

    const respons = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`);
    const dataObject = await respons.json();

    return dataObject.meals[0]


}

async function getRandomMeal() {
    const respons = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    const data = await respons.json()
    return data.meals[0]
}


/*__________________________VIEW_FUNCTIONS___________________________*/

function renderHeading(search) {

    // Check for empty search
    if(!search.trim()) {
        alert('Please enter a search term!');
    } else {
        elem.resultHeading.innerHTML = `<h2>Search results for '${search}':</h2>`;
        
    }
}
// _____________________________

function renderMeals(dataObject) {
    // console.log(dataObject);

    if (!dataObject.meals) {
        elem.mealsEl.innerHTML = `<p>There are no search results. Try agian!</p>`
    } else {
               
        elem.mealsEl.innerHTML = dataObject.meals.map(meal => {
            
            const markup = `
                    <div class="meal">
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                        <div class="mealInfo" data-mealID="${meal.idMeal}">
                            <h3>${meal.strMeal}</h3>
                        </div>
                    </div>               
            `

            return markup;
        }).join('');
    }
}
// _____________________________

function clearSearch() {
    elem.search.value = '';
}

// _____________________________

function renderSingleMeal(meal) {

    // clear UI
    elem.mealsEl.innerHTML = '';

    // Set Ingridents
    let ingredients = '';
    for (let i = 1; 30 > i; i++) {

        if (meal[`strIngredient${i}`]) {
            
            let strIngredient = meal[`strIngredient${i}`];
            let strMeasure    = meal[`strMeasure${i}`];

            ingredients += `<li>${strIngredient} - ${strMeasure}</li>`;

        } else {
            break
        }
    }

    markup = `
                <h1>${meal.strMeal}</h1>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <div class="single-meal-info">
                    <p>${meal.strCategory ? meal.strCategory : ''}</p>
                    <p>${meal.strArea ? meal.strArea : ''}</p>                  
                </div>
                <div class="main">
                    <p>${meal.strInstructions}</p>
                    <h2>Ingredents</h2>
                    <ul>
                        ${ingredients}
                    </ul>

                </div>    
    `;


    elem.single_mealEL.innerHTML = markup;




 
}


/*____________________________CONTROLLER_____________________________*/ 


function controller() {


    // Events listeners

    elem.submit.addEventListener('submit', async (e) => {
        
        const [data, term] = await searchMeal(e);
        renderHeading(term);
        renderMeals(data);
        clearSearch();
    });



    elem.mealsEl.addEventListener('click', async (e) => { 

        const ID = getRecipeID(e);
        console.log(ID);

        const data = await getMealByID(ID);
        
        renderSingleMeal(data)
    });

    elem.random.addEventListener('click', async () => {

        const randMeal = await getRandomMeal();
        console.log(randMeal);
        renderSingleMeal(randMeal);

    })
}

controller();