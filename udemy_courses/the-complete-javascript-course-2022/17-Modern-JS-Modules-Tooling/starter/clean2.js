'use strict';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// _____________________________________________________________________

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// _____________________________________________________________________


function addExpense (state, limit, value, description, user='jonas') {
  
  const cleanUser = user.toLowerCase();

  // Optional Chaining and Nullish Coalescing

  let getLimit = limit?.[cleanUser] ?? 0;

  if (value <= getLimit) {
    // budget.push({ value: -value, description, cleanUser });
    return [...state, { value: -value, description, cleanUser }];
  }   
  return [...state];
};

// _______________________

function checkExpenses (state, limit) {

  return state.map(function(expance) {

      const el = {...expance}

      let getLimit = limit?.[el.user] ?? 0;

      if (el.value < -getLimit) {
        el.flag = 'limit';
      }
      return el;
  });
};

// _______________________

function logBigExpenses (bigLimit) {
  let output = '';

  for (const el of budget) {

    // if (el.value <= -bigLimit) We are fetching the Emojis which is 2 chars long 
    output += el.value <= -bigLimit ? `${el.description.slice(-2)} / ` : '';
  }

  // Remove last '/'
  output = output.slice(0, -2);                      
  console.log(output);
};

// _____________________________________________________________________

const newbudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newbudget2 = addExpense(newbudget1, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
const newbudget3 = addExpense(newbudget2, spendingLimits, 200, 'Stuff', 'Jay');

console.log(newbudget2);
console.log(newbudget3);

console.log(checkExpenses(newbudget3, spendingLimits));





// _____________________________________________________________________


