
// DATE MODULE__________________________________________________________

var budgetController = (function() {
    

    var Expense = function(id, description,value) {
       this.id = id;
       this.description = description;
       this.value =value;
    };
    var Income = function(id, description,value) {
    this.id = id;
    this.description = description;
    this.value =value;
    };

})();


// UI MODULE____________________________________________________________

var UIController = (function() {
    // some code
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBTN:'.add__btn'


    }
    return {        

        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,  // will be 'inc' or 'exp'
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            }
        },

        getDOMStrings: function() {
            return DOMStrings;
        }


    }
})();




// CONTROLLER MODULE____________________________________________________

var controller = (function(budgetCtrl, UICtrl) {   
    
    var ctrlAddItem = function() {

        // 1. Get the fieled input data

        var input = UICtrl.getInput();
        // console.log(input);

        // 2. Add the item to the budget controller

        


        // 3. Add the item to the UI 

        // 4. Calculate the budget 

        // 5. Display the budget on the UI

        // console.log('Yes it works!');

    }

    var setupEventListeners = function() {

        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBTN).addEventListener('click', ctrlAddItem);    

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };



    return {
        init: function() {
            console.log('Application has started');
            setupEventListeners();
        }
    };



})(budgetController, UIController);

controller.init();


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












