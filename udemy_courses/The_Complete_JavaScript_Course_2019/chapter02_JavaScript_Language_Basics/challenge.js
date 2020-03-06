/***********************************************************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/*
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/

var  massJohn, heightJohn, massMark, heightMark;

//1
massJohn = 70;      // kg
heightJohn = 1.7;   // m
massMark = 68;      // kg
heightMark = 1.67;  // m

// 2
// BMI = mass /height**2

var bmiJohn, bmiMark;
bmiJohn = massJohn/(heightJohn**2);
bmiMark = massMark/(heightMark**2);

// 3

var bmiMarkHigherJohn = bmiJohn > bmiMark

// 4 

console.log(bmiJohn, bmiMark)
console.log('Is Mark\'s BMI higher than John\'s? ' + bmiMarkHigherJohn)





/***********************************************************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3
games, John's team scored 89, 120 and 103 points, while Mike's team
scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print
   the winner to the console. Also include the average score in the
   output.
3. Then change the scores to show different winners. Don't forget to
   take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and
   105 points. Like before, log the average winner to the console. HINT:
   you will need the && operator to take the decision. If you can't
   solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping
   in mind there might be draws.

GOOD LUCK */

var teamJohnScore, teamMikeScore 

teamJohnScore = (89 + 120 + 109) / 3
teamMikeScore = (89 + 120 + 109) / 3

if (teamJohnScore > teamMikeScore) {
    console.log('John\'s team wins ' + teamJohnScore + ':' + teamMikeScore);
} else if (teamMikeScore > teamJohnScore) {
    console.log('Mike\'s team wins ' + teamMikeScore + ':' + teamJohnScore);
} else {
    console.log('John\'s and Mike\'s teams end in a draw ' 
    + teamMikeScore + ':' + teamJohnScore);
}

teamMaryScore = (89 + 120 + 106) / 3

if (teamJohnScore > teamMikeScore && teamJohnScore > teamMaryScore) {
    console.log('John\'s team wins ' + 
    teamJohnScore + ':' + teamMikeScore + ':' + teamMaryScore);
} else if (teamMikeScore > teamJohnScore && teamMikeScore > teamMaryScore) {
    console.log('Mike\'s team wins ' + 
    teamMikeScore + ':' + teamJohnScore + ':' + teamMaryScore);
} else if (teamMaryScore > teamJohnScore && teamMaryScore > teamMikeScore) {
    console.log('Mary\'s team wins ' +  
    teamMaryScore + ':' + teamMikeScore + ':' + teamJohnScore);
} else if (teamMaryScore === teamJohnScore && teamMaryScore > teamMikeScore) {
    console.log('Mary\'s team and John\'s team wins with a draw ' +  
    teamMaryScore + ':' + teamMikeScore + ':' + teamJohnScore);
} else if (teamMaryScore === teamMikeScore && teamMaryScore > teamJohnScore) {
    console.log('Mary\'s team and Mike\'s team wins with a draw ' +  
    teamMaryScore + ':' + teamMikeScore + ':' + teamJohnScore);
} else if (teamJohnScore === teamMikeScore && teamJohnScore > teamMaryScore) {
    console.log('John\'s team and Mike\'s team wins with a draw ' +  
    teamMaryScore + ':' + teamMikeScore + ':' + teamJohnScore);
} else {
    console.log('All teams ended in a draw ' 
    + teamMikeScore + ':' + teamJohnScore + ':' + teamMaryScore);
}

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different
restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator
(as a function). He likes to tip 20% of the bill when the bill is less
than $50, 15% when the bill is between $50 and $200, and 10% if the bill
is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 =
0.2)

GOOD LUCK 😀
*/




function tipCalculator(bill){
    if (bill < 50 ){
        tip = bill * 0.2
    } else if (bill >= 50 && bill < 200){
        tip = bill * 0.15
    } else {
        tip = bill * 0.1
    }
    return [tip, bill + tip]
}

bill1 = tipCalculator(124);
bill2 = tipCalculator(48);
bill3 = tipCalculator(268);

tipArray   = [bill1[0], bill2[0], bill3[0]];
finalArray = [bill1[1], bill2[1], bill3[1]];

console.log('tipArray:', tipArray);
console.log('finalArray:', finalArray);