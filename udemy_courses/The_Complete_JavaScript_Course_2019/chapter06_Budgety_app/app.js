
// DATE MODULE__________________________________________________________

var budgetController = (function() {

   // some code
})();


// UI MODULE____________________________________________________________

var uiController = (function() {
    // some code
});




// CONTROLLER MODULE____________________________________________________

var controller = (function(budgetCtrl, uiCtrl) {

    var ctrlAddItem = function() {

        // 1. Get the fieled input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI 

        // 4. Calculate the budget 

        // 5. Display the budget on the UI

        console.log('Yes it works!');

    }

    
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    

    document.addEventListener('keypress', function(event) {         

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
        

    });

})(budgetController, uiController);

// _____________________________________________________________________













// // Closures ans IIFE Test_______________________________________________

// var controller = (function() {

//     var a = 0;

//     (function() {
//         document.querySelector('.add__btn').addEventListener('click', function() {
//             a++
//             console.log('>> button was clicked!', a)
//         });
//     })();

// })();

// // _____________________________________________________________________












