export function isLoggedIn() {    
    console.log(localStorage.getItem("isLoggedIn"))
    console.log(localStorage.getItem("isLoggedIn") == 'true')
    return localStorage.getItem("isLoggedIn") === 'true';
}

export function logIn() {
    localStorage.setItem("isLoggedIn", true);
}

export function logOut() {
    localStorage.setItem("isLoggedIn", false);
}