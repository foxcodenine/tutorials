
// DATE MODULE__________________________________________________________

var budgetController = (function() {

    var x = 23;

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    }
})();


// UI MODULE____________________________________________________________

var uiController = (function() {
    // some code
});




// CONTROLLER MODULE____________________________________________________

var controller = (function(budgetCtrl, uiCtrl) {
    
    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function() {
            return z;
        }    
    }
})(budgetController, uiController);

// _____________________________________________________________________


















