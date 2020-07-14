// onclick="removeItem(${transection.id})

// Stringify()
// JSON.parse()
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// window.localStorage.getItem('transections')

// localStorage.setItem('myCat', 'Tom');
// localStorage.removeItem('myCat');
// localStorage.clear();

// JSON.parse(localStorageTransections)
// window.localStorage.setItem('transections', JSON.stringify(state.transections));

// _____________________________________________________________________

// DOM elements

const elem = {
    balance: document.getElementById('balance'),
    money_minus: document.getElementById('money-minus'),
    money_plus: document.getElementById('money-plus'),
    list: document.getElementById('list'),
    form: document.getElementById('form'),
    text: document.getElementById('text'),
    amount: document.getElementById('amount'),
}

// const dummyTransection = [
//     {id: 1, text: 'Flowers', amount: -20},
//     {id: 2, text: 'Salary', amount: 300},
//     {id: 3, text: 'Book', amount: -10},
//     {id: 4, text: 'Camera', amount: 150},
// ]

const localStorageTransections = window.localStorage.getItem('transections')
console.log(localStorageTransections)


let state = {
    balance: 0,
    income: 0,
    outcome: 0, 
    transections: localStorageTransections === null ? [] : JSON.parse(localStorageTransections),
}


// _____________________________________________________________________

// Add transaction to DOM list
function addTransectionDOM(transection) {

    // Get sign
    const sign = transection.amount > 0  ? '+' : '-';

    // Create element
    const listItem = document.createElement('li');

    // Add class based on value
    listItem.classList.add(transection.amount > 0  ? 'plus' : 'minus');

    const markup = `
        ${transection.text} 
        <span>${sign}${Math.abs(transection.amount)}</span>
        <button class="delete-btn" onclick="removeItem(${transection.id})">&times</button>`   
        
    listItem.innerHTML = markup;

    elem.list.appendChild(listItem);
}

// __________________________________


function clearListUI() {
    elem.list.innerHTML = '';
}

// __________________________________

function clearInputUI() {
    elem.text.value = null;
    elem.amount.value = null;
}
// __________________________________

function renderValuesUI(object) {

    elem.balance.innerText = `${object.balance < 0 ? '-': ''}$${object.balance}`

    elem.money_plus.innerText = `+$${object.income}`;

    elem.money_minus.innerText = `-$${object.outcome}`;
}



// _____________________________________________________________________
// Update balace, income and expanse

function updateValues(transections) {
    
    const allAmounts = transections.map(transection => transection.amount);

    const balance = allAmounts.reduce((acc, amount) => {
            return acc += amount;
    }, 0);

    const income = allAmounts.reduce((acc, amount) => {
        return amount > 0 ? acc += amount : acc;
    }, 0);

    const outcome = (income - balance) * -1 ;

    state.balance = balance;
    state.income = income;
    state.outcome = Math.abs(outcome);  
    
    console.log([state.balance, state.income, state.outcome])
}

// __________________________________

function getTransection() {

    if (elem.text.value.trim() === '' || elem.amount.value.trim() === '') {
        false
    } else {
        const transection = {
            id: Math.round(Math.random() * 100000),
            text: elem.text.value,
            amount: parseFloat(elem.amount.value)
        }
    
        state.transections.push(transection);
        updateLocalStorage();
    }    
}

// __________________________________

function removeItem(id) {
    state.transections = state.transections.filter(transection => transection.id !== id);
    updateLocalStorage();
    controller();
}
// __________________________________

function updateLocalStorage() {
    window.localStorage.setItem('transections', JSON.stringify(state.transections));
}


// _____________________________________________________________________
function controller() {

    /* Inner Functions */

    function loopThrough(arr, func) {
        arr.forEach(transection => {
            func(transection);
        });
    }   

    // _____________________________
    
    /* Initialize */

    // Clear  UI
    clearListUI();
    clearInputUI();

    // Update UI List

    loopThrough(state.transections, addTransectionDOM);

    // Update balace, income and expanse
    updateValues(state.transections);

    // Render balace, income and expanse to UI
    renderValuesUI(state);

    // _____________________________


    /* Event Listener */

    elem.form.addEventListener('submit', e => {

        e.preventDefault();
        
        getTransection();

        controller();

        
    })
}

controller();



// _____________________________________________________________________