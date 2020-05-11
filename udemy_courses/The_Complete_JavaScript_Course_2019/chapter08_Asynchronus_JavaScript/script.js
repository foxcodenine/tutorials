const pline = function(i) {
    console.log(`\n(${i})___________________________________________\n`)
}

/*

pline('A'); // _________________________________________________________

// Lecture: Example of Asynchronous JavaScript

const second = () => {
    setTimeout(() => {console.log('Async Hey there!')}, 2000)
};

var third  = function(){
    setTimeout(function() { console.log('ES5 third function')}, 3000);
}

const first = () => {
    console.log('Hey there!')
    second();
    third(); 
    console.log('The end!')
};

first();

pline('B'); // _________________________________________________________

// Lecture: The Old Way Asynchronous JavaScript with Callbacks
function getRecipes() {

    // simulating, fetch data from a server:
    setTimeout( () => { 
        const recipeID = ( [982, 654, 112, 333] );
        console.log(recipeID);
        
        // simulating, getting recipe from id:
        setTimeout( id => {
            const recipe = {title: 'Fresh tomato pasta', 
                            publisher: 'Jonas'};
            console.log(`${id}: ${recipe.title}.`)

            // simulating, getting another recipe from same publisher:
            setTimeout( publisher => {
                const recipe2 = {title: 'Italian pizza', 
                                publisher: 'Jonas'};
                console.log(`${recipe2.title}: ${publisher}`);

            }, 1500, recipe.publisher);
        }, 1500, recipeID[2]);
    }, 1500);    
}

getRecipes();

*/

pline('C'); // _________________________________________________________

// Lecture: From Callback Hell to Promises

const getIDs = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve([523, 883, 432, 974]);
    }, 1500);
});

const getResipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => { 
            const recipe = {title: 'Fresh tomato pasta', publisher: 'Josas'}
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID);
    });
};

const anotherResipe = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout((name) => {
            const recipe2 = {title: 'Italian pizza', publisher: 'Jonas'};
            resolve(`${recipe2.title}: ${name}`);
        }, 1500, publisher);
    });
};


/*
// ES6

getIDs
    .then(IDs => {
        console.log(IDs);
        return getResipe(IDs[2]);
    })
    .then(recipe => {
        console.log(recipe);
        return anotherResipe('Jonas')
    })
    .then(recipe2 => {
        console.log(recipe2);
    })
    .catch(error => console.log(error));



// ES7

async function getRecipeAW(){

    const IDs = await getIDs;
    console.log(IDs)

    const recipe = await getResipe(IDs[2]);
    console.log(recipe);

    const recipe2 = await anotherResipe('Jonas'); 
    console.log(recipe2);

    return [recipe, recipe2]
}

getRecipeAW().then(resolve => {
    const obj0 = resolve[0];
    const obj1 = resolve[1];
    
    console.log(`${obj0.slice(5)} & ${obj1.slice(0,13)} by ${obj1.slice(-5)}`)
})


valletta = 'http://api.openweathermap.org/data/2.5/weather?q=Valletta&units=metric&appid=0b9c6ff2c207324b97215f6b7fb82d38'

herokuapp = 'https://secret-ocean-49799.herokuapp.com'

fetch(
    valletta
).then(
    result => {
        console.log(result);
        return result.json();
    }
).then(data => { 
    console.log(data);
    return data }
).then(data => {
    console.log(`It feels ${data.main.feels_like}°C in ${data.name} right now!`)
}
).catch(
    error => console.log(error)
);

pline('Z'); // _________________________________________________________

*/

getCityWeather = (city, code) => {
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${code}&units=metric&appid=0b9c6ff2c207324b97215f6b7fb82d38`
    ).then(
        result => {  return result.json()}
    ).then(
        data => {console.log(`Currently it is ${data.main.temp}°C in ${data.name} ${data.sys.country}!`)}
    ).catch(
        error => console.log(error)
    )
};

getCityWeather('Rome','IT');

getCityWeather('Valletta','MT');

getCityWeather('Birzebbuga','MT');

getCityWeather('London','GB');