
// .toFixed(2);
// .toString() 

// _____________________________________________________________________
import {myKey} from './config.js';


// _____________________________________________________________________
const elem = {
    currencyEl_one: document.getElementById('currency-one'),
    currencyEl_two: document.getElementById('currency-two'),
    amount_one: document.getElementById('amount-one'),
    amount_two: document.getElementById('amount-two'),
    rateEL: document.getElementById('rate'),
    swap: document.getElementById('swap'),
}

// _____________________________________________________________________


// Fetch exchang rates and update the DOM
async function calculate() {
    const currency_one = elem.currencyEl_one.value;
    const currency_two = elem.currencyEl_two.value;

    console.log(currency_one, currency_two);

    const respons = await fetch(`https://v6.exchangerate-api.com/v6/${myKey}/latest/USD`);
    console.log(`https://v6.exchangerate-api.com/v6/${myKey}/latest/${currency_one}`)
    const data = await respons.json();
    
    const rate = Math.round((
        data.conversion_rates[currency_two] / data.conversion_rates[currency_one]
    ) * 100000) / 100000;
    
    console.log(rate)
    console.log(`1 ${currency_one} : ${rate} ${currency_two}`);

    elem.rateEL.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
    
    elem.amount_two.value = (rate * elem.amount_one.value).toFixed(3)
}

// _____________________________________________________________________

// Event listeners
elem.currencyEl_one.addEventListener('change', calculate);
elem.currencyEl_two.addEventListener('change', calculate);
elem.amount_one.addEventListener('input', calculate);
elem.amount_two.addEventListener('input', calculate);

elem.swap.addEventListener('click', () => {
    
    [elem.currencyEl_one.value , 
        elem.currencyEl_two.value] = [elem.currencyEl_two.value , 
            elem.currencyEl_one.value];

    calculate();
})






calculate();