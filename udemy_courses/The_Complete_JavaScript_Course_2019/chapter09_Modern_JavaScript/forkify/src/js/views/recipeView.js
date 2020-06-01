// https://github.com/ekg/fraction.js/
import { elements } from "./base";
// import { Fraction } from 'fractional';

// _____________________________________________________________________


export const cleanRecipe = () => {
    elements.recipeContainer.innerHTML = '';
};

// _____________________________________________________________________

const toFractionStr = num => {

    let upper3 = Math.floor(num  * 3)
    let lower3 = Math.ceil(num  * 3)

    let numerator3 = Math.abs(num - (upper3 / 3)) < Math.abs(num - (lower3 / 3)) ? upper3 : lower3;
    const dec3 = Math.abs((numerator3 / 3) - num );



    let upper5 = Math.floor(num  * 5)
    let lower5 = Math.ceil(num  * 5)

    let numerator5 = Math.abs(num - (upper5 / 5)) < Math.abs(num - (lower5 / 5)) ? upper5 : lower5;
    const dec5 = Math.abs((numerator5 / 5) - num );


    let upper16 = Math.floor(num  * 16)
    let lower16 = Math.ceil(num  * 16)

    let numerator16 = Math.abs(num - (upper16 / 16)) < Math.abs(num - (lower16 / 16)) ? upper16 : lower16;
    const dec16 = Math.abs((numerator16 / 16) - num );
    console.log(numerator16 , dec16, num)


    // console.log([dec3, dec5, dec16])
    if ( dec3 < dec5 && dec3 < dec16) {
        // use dec3
        return [numerator3 , 3]
    } else if ( dec5 < dec3 && dec5 < dec16) {
        // use dec5
        return [numerator5 , 5]
    } else {
        // use dec16
        let frc = new Fraction(Math.round(num * 16)/16);
        return [frc.numerator, frc.denominator]

    }


};

const formatCount = count => {
    if (count) {
        /**
         * count can be:
         * 5, 1.5, 0.5
         */


        let [int, dec] = `${count}`.split('.').map(el => parseInt(el, 10));
        let fr;

        if (!dec) return int;

        if (int === 0) {
        fr = toFractionStr(count);
        return `${fr[0]}/${fr[1]}`

        } else {
        fr = toFractionStr(count - int);  
        return `${int} ${fr[0]}/${fr[1]}`              
        }

    };

    return `?`;
};


// const formatCount = count => {
//     if (count) {
//         /**
//          * count can be:
//          * 5, 1.5, 0.5
//          */


//         let [int, dec] = `${count}`.split('.').map(el => parseInt(el, 10));
//         let fr;

//         if (!dec) return int;

//         if (int === 0) {
//         fr = new Fraction(count);
//         return `${fr.numerator}/${fr.denominator}`

//         } else {
//         fr = new Fraction(count - int);  
//         return `${int} ${fr.numerator}/${fr.denominator}`              
//         }

//     };

//     return `?`;
// };
// _____________________________________________________________________


const createIngredients = ingredient => `

<li class="recipe__item">
    <svg class="recipe__icon">
        <use href="img/icons.svg#icon-check"></use>
    </svg>
    <div class="recipe__count">${formatCount(ingredient.count)}</div>
    <div class="recipe__ingredient">
        <span class="recipe__unit">${ingredient.unit}</span>
        ${ingredient.name}
    </div>
</li>
`
// _____________________________________________________________________

export const renderRecipe = (recipe=null) => {
    const markup = `
    
            <figure class="recipe__fig">
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img">
                <h1 class="recipe__title">
                    <span>${recipe.title}</span>
                </h1>
            </figure>
            <div class="recipe__details">
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-stopwatch"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--minutes">${recipe.readyInMinutes}</span>
                    <span class="recipe__info-text"> minutes</span>
                </div>
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-man"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
                    <span class="recipe__info-text"> servings</span>

                    <div class="recipe__info-buttons">
                        <button class="btn-tiny btn-decrease">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-minus"></use>
                            </svg>
                        </button>
                        <button class="btn-tiny btn-increase">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-plus"></use>
                            </svg>
                        </button>
                    </div>

                </div>
                <button class="recipe__love">
                    <svg class="header__likes">
                        <use href="img/icons.svg#icon-heart-outlined"></use>
                    </svg>
                </button>
            </div>



            <div class="recipe__ingredients">
                <ul class="recipe__ingredient-list">

                ${ recipe.ingredients.map(el => createIngredients(el)).join(' ')}
       
                   
                <button class="btn-small recipe__btn">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-shopping-cart"></use>
                    </svg>
                    <span>Add to shopping list</span>
                </button>
            </div>

            <div class="recipe__directions">
                <h2 class="heading-2">How to cook it</h2>
                <p class="recipe__directions-text">
                    This recipe was carefully designed and tested by
                    <span class="recipe__by">${recipe.sourceName}</span>. Please check out directions at their website.
                </p>
                <a class="btn-small recipe__btn" href="${recipe.sourceUrl}" target="_blank">
                    <span>Directions</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>

                </a>
            </div>    
    
    `
    console.log('So far so good');

    elements.recipeContainer.insertAdjacentHTML('afterbegin', markup);
};

// _____________________________________________________________________


export const updateServingIngredients = recipe => {

    // Update Servings:
    console.log('yyyyyy',recipe.servings);
    document.querySelector('.recipe__info-data--people').textContent = recipe.servings;

    // Update Ingredients:

    const  countElements = Array.from(document.querySelectorAll('.recipe__count'));

    countElements.forEach((el, ind) => {
        el.textContent = formatCount(recipe.ingredients[ind].count);
    });
}