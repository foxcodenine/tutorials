// e.preventDefault();
// input.parentElement;
// formControl.className
// formControl.classlist.remove



// _____________________________________________________________________
const elem = {

    form : document.getElementById('form'),
    username : document.getElementById('username'),
    email : document.getElementById('email'),
    password : document.getElementById('password'),
    password2 : document.getElementById('password2'),
};

// Show input error message 
const showError = (input, message) => {
    const formControl = input.parentElement;    
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.innerText = message;
};

// Show success ouline

const showSuccess = input => {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
    
};

// Check if Email is Valid
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};



// Event listeners
elem.form.addEventListener('submit', e => {
    
    e.preventDefault();

    if (!elem.username.value) {
        showError(elem.username, 'Username is required')
    } else {
        showSuccess(elem.username);
    }
    
    if (!elem.email.value) {
        showError(elem.email, 'Email is required')
    } else if (!validateEmail(elem.email.value)) {
        showError(elem.email, 'Email is not valide')
    } else {
        showSuccess(elem.email);
    }

    if (!elem.password.value) {
        showError(elem.password, 'Password is required')
    } else {
        showSuccess(elem.password);
    }

    if (!elem.password2.value) {
        showError(elem.password2, 'Password 2 is required')
    } else if (elem.password.value !== elem.password2.value) {
        showError(elem.password2, 'Passwords does not match')
    }else {
        showSuccess(elem.password2);
    }

});