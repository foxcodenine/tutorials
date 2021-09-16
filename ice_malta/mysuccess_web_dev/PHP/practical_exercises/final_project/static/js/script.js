
tippy('.lessons', {
    content: "...go back to lesson 12!",
    theme: 'light',
});




const settings =  document.querySelector('.settings'); 
const settings2 =  document.querySelectorAll('.settings__text'); 
const settings3 =  document.querySelectorAll('.settings__sub'); 
const close =  document.querySelectorAll('.sidebar__close'); 



settings.addEventListener('click', ()=>{
    settings.classList.toggle('sidebar__active');
    settings3.forEach(element => {
        element.classList.toggle('sidebar__hidden');
    });

})


close.forEach(element => {
    

    element.addEventListener('mouseover', ()=> {
        settings.classList.remove('sidebar__active');
        settings3.forEach(element => {
            element.classList.add('sidebar__hidden');
        });
    })
});






