// http://codingheroes.io/resources/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// https://developer.mozilla.org/en-US/docs/Web/Events
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/


// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace


// DATE MODULE__________________________________________________________
// _____________________________________________________________________

var budgetController = (function() {
    
    // Privet methods and properties
    // Income & Expense Constractor
    var Expense = function(id, description,value) {
       this.id = id;
       this.description = description;
       this.value =value;
       this.percentage = -1; 
    
    };

    // this function calculate the percentage
    Expense.prototype.percentageCal = function(totalInc) {
        if (totalInc > 0) {
            this.percentage = Math.round((this.value / totalInc) * 100);
        } else {
            this.percentage = -1;
        }
    };
    

    // while this return the percentage 
    Expense.prototype.getPercentage = function() {
        return this.percentage;
    };


    var Income = function(id, description,value) {
    this.id = id;
    this.description = description;
    this.value =value;
    };



    // Store the data

    var data = {
        allItems: {
            exp: [],
            inc: []
        },        
        totals: {
            exp: 0,
            inc: 0
        },
        budaget: 0,
        percentage: -1
    };


    // Function to calculate totals in data
    var calculateTotal = function(type) {
        sum = 0 

        data.allItems[type].forEach(function(cur, ind, arr){
            sum += cur.value
        });
        return sum;
    };

    // Public methods and properties
    // Return Functions to Public
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

        getBudget: function(){
            return {
                budget: data.budaget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },

        

        // Calculate budget function 

        calculateBudget: function(type) {            

            // Calculate total income and expanses

            data.totals[type] = calculateTotal(type);       
            
            // Calculate the budget: total income - total expanses

            data['budaget'] = data.totals['inc'] - data.totals['exp']

            // Calculate the percentage on the income that we spent

            data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
        },       



        deleteItem : function(type, id){


            var itemArray, arrayIDs, itemIndex

            itemArray = data.allItems[type]
            arrayIDs = itemArray.map(function(cur, ind, arr){
                return cur.id
            });

            itemIndex = parseInt(arrayIDs.indexOf(id)) 
  

            if (itemIndex !== -1){
                data.allItems[type].splice(itemIndex, 1)
            }            
        },

        calculatePercentages: function() {

            data.allItems.exp.forEach(function(cur, ind, arr) {
               cur.percentageCal(data.totals.inc);
            });

        },
        
        getPercentages: function() {
        
            var allPerc = data.allItems.exp.map(function(cur, ind, arr){
                return cur.getPercentage()
            });

            return allPerc;
        },

        testing: function() {
            return data;
        }
        
    };

})();


// UI MODULE____________________________________________________________
// _____________________________________________________________________


var UIController = (function() {


    // Private methods and properties:
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBTN:'.add__btn',
        expContainer: '.expenses__list',
        incContainer: '.income__list',
        budgetLable: '.budget__value',
        incomeLable: '.budget__income--value',
        expensesLable: '.budget__expenses--value',
        percentageLable: '.budget__expenses--percentage', 
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLable: '.budget__title--month'  
    };

    // here we created a forEach function to use it on  a nodeArray
    nodeListForEach = function(list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i , list)
        }
    };

    // the following are public methods and properties:
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
                <div class="item clearfix" id="inc-%id%">
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
                <div class="item clearfix" id="exp-%id%">
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
            newHtml = newHtml.replace('%value%', this.formatNumber(obj.value, type));
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

        displayBudget: function(obj) {

            // Update budget lables

            obj.budget >= 0 ? type = 'inc' : type = 'exp';

            document.querySelector(DOMStrings.budgetLable).innerText = this.formatNumber(obj.budget, type)
            document.querySelector(DOMStrings.incomeLable).innerText = this.formatNumber(obj.totalInc, 'inc')
            document.querySelector(DOMStrings.expensesLable).innerText = this.formatNumber(obj.totalExp, 'exp')
            
            if (obj.percentage === Infinity) {
                document.querySelector(DOMStrings.percentageLable).innerText = '__'

            } else {
                document.querySelector(DOMStrings.percentageLable).innerText = obj.percentage + '%'

            }
        },

        deleteListItem : function(nodeID){

            // 1st we select the element
            var rmElement = document.getElementById(nodeID);

            // 2nd we select the element perent
            // 3rd we remove the element from parent:

            rmElement.parentNode.removeChild(rmElement);

        },

        displayPercentages: function(percentages) {

            // this will return a nodeArray of the expacese_percentages DOMs
            var fields = document.querySelectorAll(DOMStrings.expensesPercLabel)

            


            // using our nodeListFunction on the our nodeArray ('fields')

            nodeListForEach(fields, function(cur, ind, arr){
                if (percentages[ind] > 0){
                    cur.textContent = percentages[ind] + '%'
                } else {
                    cur.textContent = '__'
                }                
            });      
        },


        formatNumber: function(num, type) {

            var num, numSplit, int, dec;
            
            num = Math.abs(num);
            num = num.toFixed(2);

            numSplit = num.split('.'); 

            int = numSplit[0];

            if (int.length > 3){
                int = int.substring(0, int.length-3) + ',' + int.substring(int.length-3, int.length);
            }

            dec = numSplit[1];
            
            
            return (type === 'exp' ? '- ' : '+ ') + int + '.' + dec;
        },

        displayMonth: function() {
            var now, year, month;

            now = new Date();
            // var christmas = new Date(2019, 11, 25);

            var months = new Array();
            months[0] = "January";
            months[1] = "February";
            months[2] = "March";
            months[3] = "April";
            months[4] = "May";
            months[5] = "June";
            months[6] = "July";
            months[7] = "August";
            months[8] = "September";
            months[9] = "October";
            months[10] = "November";
            months[11] = "December";

            month = months[now.getMonth()];

            year = now.getFullYear();
            document.querySelector(DOMStrings.dateLable).textContent = month + ' ' + year;
        },

        changeType: function() {

            // change the inputs boarder color
            var inputFields = document.querySelectorAll(
                DOMStrings.inputType + ',' +
                DOMStrings.inputDescription + ',' +
                DOMStrings.inputValue                
            );

            nodeListForEach(inputFields, function(cur, ind, arr){
                cur.classList.toggle('red-focus');

            //  change the btn color
            document.querySelector(DOMStrings.inputBTN).classList.toggle('red');
            
            });

            
        },

        getDOMStrings: function() {
            return DOMStrings;
        }
    }
})();



// CONTROLLER MODULE____________________________________________________
// _____________________________________________________________________

var controller = (function(budgetCtrl, UICtrl) {  
    
    var setupEventListeners = function() {

        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBTN).addEventListener('click', ctrlAddItem);    

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changeType);
    };


    // this function is called in  ctrlAddItem() and ctrlDeleteItem ()
    var updateBudget = function(type) {

        // 1. Calculate the budaget 
        budgetCtrl.calculateBudget(type);
        // 2. Return the budget 
        bugetData = budgetCtrl.getBudget();
        // 3. Display the budget on the UI
        console.log(bugetData);
        UICtrl.displayBudget(bugetData);
    };
    

    // this function is called in ctrlAddItem() and ctrlDeleteItem ()
    var updatePercentages = function() {

        // 1. Calcutate percentages
        budgetCtrl.calculatePercentages();

        // 2. Read percentages frim the budget controller
        var percentages = budgetCtrl.getPercentages();
        console.log(percentages);
        // 3. update the UI with the new percentages 
        UICtrl.displayPercentages(percentages);

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
            updateBudget(input.type);

            // 6. Caluclate and update percentages 
            updatePercentages();
        }
    };


    var ctrlDeleteItem = function(event) {
        
        var itemID, splitID, ID, type
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        // console.log(itemID)

        if (itemID) {

            splitID = itemID.split('-');
            // console.log(splitID) 
            type = splitID[0];
            ID = parseInt(splitID[1]);

            // 1. delete the item from the data structure 
            budgetController.deleteItem(type, ID);

            // 2. delete the item from the UI 
            UICtrl.deleteListItem(itemID);

            // 3. update and show the new budget
            updateBudget(type);

            // 4. Caluclate and update percentages 
            updatePercentages();
        }
    };

// _____________________________________________________________________
// _____________________________________________________________________

    return {
        init: function() {
            console.log('Application has started');
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: Infinity
            });
            UICtrl.displayMonth();
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












