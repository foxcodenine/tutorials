// e.preventDefault();
// input.parentElement;
// formControl.className
// formControl.classlist.remove
// trim()
// .toUpperCase();
// .charAt(0)
// str.slice(1)



// _____________________________________________________________________

/* Elements */

const elem = {

    form : document.getElementById('form'),
    username : document.getElementById('username'),
    email : document.getElementById('email'),
    password : document.getElementById('password'),
    password2 : document.getElementById('password2'),
};
// _____________________________________________________________________

/* Functions */


// Show input error message 
function showError(input, message) {
    const formControl = input.parentElement;    
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.innerText = message;
};

// ____________________________

// Show success outline
const showSuccess = input => {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
    
};

// ____________________________


// Check required fields 
function checkRequired(...arguments) {
    arguments.forEach(input => {

        if (!input.value.trim()) {
            showError(input,  `${getInputId(input)} is required`)
        } else {
            showSuccess(input);
        }
    });
}

// ____________________________

function checkLength(input, min, max) {
    
    if (input.value.trim().length < min || input.value.trim().length > max) {
        showError(input,  `${getInputId(input)} must be between ${min} and ${max} characters`)
    } 
};
// ____________________________

// Check if Email is Valid
function validateEmail(input) {
    
    const email = input.value.trim();
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    const result =  re.test(String(email).toLowerCase());
    console.log(re.test(String(email).toLowerCase()));

    if (!result) {
        showError(input, `Email is not valid`)
    }

};
// ____________________________

// Check password match

function checkPasswordMatch(password, password2) {

    if (password.value !== password2.value) {
        showError(password2, `Passwords do not match`)
    };
};



// ____________________________

// Get field name
function getInputId(input) {
    
    return `${input.id.charAt(0).toUpperCase()}${input.id.slice(1)}`;
};

// _____________________________________________________________________

/* Event listeners */

// Event listeners
elem.form.addEventListener('submit', e => {
    
    e.preventDefault();

    checkRequired(elem.username, elem.email, 
                                elem.password, elem.password2);
    
    checkLength(elem.username, 3, 15);
    checkLength(elem.password, 6, 20);
    validateEmail(elem.email)
    checkPasswordMatch(elem.password, elem.password2);


});