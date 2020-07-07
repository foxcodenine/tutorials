// array.sort()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// array.filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// array.reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

/* ____________________GET_DOM____________________ */
const elem = {
    main: document.getElementById('main'),    
    addUserBtn: document.getElementById('add-user'),
    doubleBtn: document.getElementById('double'),
    showMilBtn: document.getElementById('show-millionaires'),
    sortBtn: document.getElementById('sort'),
    calcWealthBtn: document.getElementById('calculate-wealth')
}

let data = [];


/* ____________________Function____________________ */

// Get random users data
async function getRandomUsers() {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    
    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)   
    }

    return newUser;           
}

// ________________________________________

// Add new obj to data arr
function addData(obj) {
    data.push(obj);    
}

// ________________________________________

// Update DOM
function updateDOM() {
    elem.main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

    data.forEach(item => {
        // elem.main.innerHTML += `<h3><strong>${item.name}</strong> ${item.money}</h3>`

        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money, '$')}`;

        elem.main.appendChild(element);
    })
}
// ________________________________________

// Format money string
function formatMoney(num, curr) {
    return `${curr}` + (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// ________________________________________

// Double everyones money
function doubleMoney() {
    data = data.map((user)=>{
        return {...user, money: user.money * 2};   
    })    
}

// ________________________________________

// Sort Users by richest
function sortUsers() {
    data.sort((a, b) => {
        return b.money - a.money;
    })
}

// ________________________________________

// Fillter only millioners
function showMillioners() {
    data = data.filter(user => {
        return user.money > 1000000;
    });
}

// ________________________________________

// Calculate total wealth of all users
function callTotalWealth() {
    const total = data.reduce((acc, user)=>{
        return acc + user.money;
    }, 0);
    return total;
}

// ________________________________________

// Render Total
function renderTotal(total) {

    const currentTotal = document.getElementById('total');

    if (currentTotal) {
        elem.main.removeChild(currentTotal);
    }

    const totalWealth = document.createElement('div');
    totalWealth.id = 'total';
    totalWealth.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(total, '$')}</strong></h3>`;
    elem.main.appendChild(totalWealth);
}

// ________________________________________



/* ____________________Controller Function____________________ */

function init() {

    async function numOfUsers(num){
    
        for (let i=0; num > i; i++){
            
            // create a  user
            let user = await  getRandomUsers();
            // add user to data
            addData(user);
            // render DOM
            updateDOM();
            // repeat / end
        }
    }

    // _____________________________________

    // Reload with default number of users
    numOfUsers(3); 

    // _____________________________________
    
    // Buttons event listeners
    elem.addUserBtn.addEventListener('click', () => {
        numOfUsers(1);
    });

    elem.doubleBtn.addEventListener('click', () => {
        doubleMoney();
        updateDOM();
    }); 

    elem.sortBtn.addEventListener('click', () => {
        sortUsers();
        updateDOM();
    }); 
    
    elem.showMilBtn.addEventListener('click', () => {
        showMillioners();
        updateDOM();
    })
    
    elem.calcWealthBtn.addEventListener('click', () => {
        const total = callTotalWealth();
        renderTotal(total);
    })
}

init();