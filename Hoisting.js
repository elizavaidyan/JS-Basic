//Hoisting is JavaScript's default behavior of moving declarations to the top.
//a variable can be used before it has been declared.
x = 5;
var elem = x;
var x;
console.log(elem); //5
//Variables and constants declared with let or const are not hoisted!
//JavaScript only hoists declarations, not initializations.
var y = 5;
var z = 7;
console.log(y + " " + z);//5 7
var x1 = 10;
console.log(x1 + " " + y1); //10 undefined
var y1 = 20;
var x2 = 100;
var y2;
console.log(x2 + " " + y2); //100 undefined
y2 = 200;
//always declare all variables at the beginning of every scope.