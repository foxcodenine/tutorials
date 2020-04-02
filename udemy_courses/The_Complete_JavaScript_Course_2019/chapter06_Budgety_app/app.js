// http://codingheroes.io/resources/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// https://developer.mozilla.org/en-US/docs/Web/Events
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/


// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace





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

    var data = {
        allItems: {
            exp: [],
            inc: []
        },        
        totals: {
            exp: 0,
            inc: 0
        }
    };


    

    return {
        addItem: function(type, des, val) {

            var newItem, ID;

            // Create new ID
            if (data.allItems[type].length > 0) {
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 1;
            }
            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Push it into our date structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem; 
        },
        testing: function() {
            return data;
        }
    };

})();


// UI MODULE____________________________________________________________

var UIController = (function() {
    // some code
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBTN:'.add__btn',
        expContainer: '.expenses__list',
        incContainer: '.income__list'
                       


    }
    return {        

        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,  // will be 'inc' or 'exp'
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            }
        },

        addListItem: function(obj, type) {
            
            var html, element
            // Create HTML string with placeholder text 
            if (type === 'inc'){
                element = document.querySelector(DOMStrings.incContainer)
                html = `
                <div class="item clearfix" id="income-%id%">
                    <div class="item__description">%description%</div>
                    <div class="right clearfix">
                        <div class="item__value">%value%</div>
                        <div class="item__delete">
                            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                        </div>
                    </div>
                </div>`
            } else if (type === 'exp'){
                element = document.querySelector(DOMStrings.expContainer)
                html = `
                <div class="item clearfix" id="expense-%id%">
                    <div class="item__description">%description%</div>
                    <div class="right clearfix">
                        <div class="item__value">%value%</div>
                        <div class="item__percentage">21%</div>
                        <div class="item__delete">
                            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                        </div>
                    </div>
                </div>`

            }         
            // Replace the placeholder text with some actual data 

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%value%', obj.value);
            newHtml = newHtml.replace('%description%', obj.description);
           

            // Insert the HTML into the DOM
            // syntex: element.insertAdjacentHTML(position, text);
            return element.insertAdjacentHTML('beforeend', newHtml);
        },

        clearFields: function() {
            var fieldsNodelist, fieldsArray;

            fieldsNodelist = document.querySelectorAll(
                DOMStrings.inputDescription + ', ' + DOMStrings.inputValue
            )

            // Change  Nodelist to an Array:

            /* 
            Method 1:

            fieldsArray = [];
            for (var a=0; a < fieldsNodelist.length; a++) {
                fields.push(fieldsNodelist[a]);
            }
            */

            // Mothod 2:

            fieldsArray = Array.prototype.slice.call(fieldsNodelist);
            
            // Clear each DOM using foreach():

            fieldsArray.forEach(function(current, index, array) {
                current.value = '';

            // reset focus on description:
            fieldsArray[0].focus();
            });

            // return fieldsArray;
        },

        getDOMStrings: function() {
            return DOMStrings;
        }


    }
})();




// CONTROLLER MODULE____________________________________________________

var controller = (function(budgetCtrl, UICtrl) {  
    
    
    var updateBudget = function() {

        // 1. Calculate the budaget 

        // 2. Return the budget 

        // 3. Display the budget on the UI
    };




    
    var ctrlAddItem = function() {

        var input, newItem

        // 1. Get the fieled input data
        
        input = UICtrl.getInput();
        
        if (input.description && !isNaN(input.value) && input.value > 0) {

            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            
            // 3. Add the item to the UI 
            UICtrl.addListItem(newItem, input.type);

            // 4. Clear Fields
            UICtrl.clearFields();

            // 5. Calculate and update budget
            updateBudget();
        }
    };


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












