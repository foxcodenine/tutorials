const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

// _____________________________________________________________________

const spendingLimits = {
  jonas: 1500,
  matilda: 100,
};

// _____________________________________________________________________


function addExpense (value, description, user='jonas') {
  
  user = user.toLowerCase();

  // Optional Chaining and Nullish Coalescing

  let limit = spendingLimits?.[user] ?? 0;

  if (value <= limit) {
    budget.push({
      value: -value, description, user
    });
  }
  
};

// _______________________

function checkBudget () {
  for (const el of budget) {

    let limit = spendingLimits?.[el.user] ?? 0

    if (el.value < -limit) {
      el.flag = 'limit';
    }

  }
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

addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');

console.log(budget);

checkBudget();

console.log(budget);



// _____________________________________________________________________


