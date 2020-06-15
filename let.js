//let and const provide Block Scope variables (and constants) 
var carName = "Volvo"; //global variable ,Global variables can be accessed from anywhere in a JavaScript program.
var newCar = carName; //code here can access global var
console.log(newCar);
function myFunction() {
  return carName; //can access global variable
}
console.log(myFunction());
//function scope- Variables declared Locally (inside a function) have Function Scope
console.log(myFunction1.carName1); //undefined,Local variables can only be accessed from inside the function where they are declared.
function myFunction1() {
  var carName1 = "Audi";
}
//Block Scope-Variables declared with the var keyword can not have Block Scope,Variables declared inside a block {} can be accessed from outside the block
{
  var x1 = 2;
}
console.log(x1); //2
//Variables declared inside a block {} can be accessed from outside the block
//Variables declared inside a block {} can not be accessed from outside the block:
{
  let x2 = 4;
}
//console.log(x2); //x2 is not defined
//Redeclaring a variable inside a block will also redeclare the variable outside the block
var y = 10;
{
  var y = 20;
}
console.log(y); //20
//Redeclaring a variable using the let keyword inside a block will not redeclare the variable outside the block
var y1 = 100;
{
  let y1 = 200;
}
console.log(y1); //100
//Loop Scope
var i = 4;
for (var i = 0; i < 10; i++) {
  //statements
}
console.log(i); //10
let i1 = 5;
for (let i = 0; i < 10; i++) {
  //statements
}
console.log(i1); //5
//When let is used to declare the i variable in a loop, the i variable will only be visible within the loop.
//function Scope -Variables declared with var and let are quite similar when declared inside a function
//Variables declared with var and let are quite similar when declared outside a block.
//Redeclaring a JavaScript variable with var is allowed anywhere in a program
/*var x = 2; // Now x is 2
var x = 3; */ // Now x is 3
//Redeclaring a var variable with let, in the same scope, or in the same block, is not allowed
/* var x = 2;       // Allowed
let x = 3;       // Not allowed
{
  var x = 4;   // Allowed
  let x = 5   // Not allowed
}
*/
//Redeclaring a let variable with let, in the same scope, or in the same block, is not allowed
/*let x = 2;       // Allowed
let x = 3;       // Not allowed

{
  let x = 4;   // Allowed
  let x = 5;   // Not allowed
} */
//Redeclaring a let variable with var, in the same scope, or in the same block, is not allowed
/* let x = 2;       // Allowed
var x = 3;       // Not allowed

{
  let x = 4;   // Allowed
  var x = 5;   // Not allowed
} */
//Redeclaring a variable with let, in another scope, or in another block, is allowed
/* let x = 2;       // Allowed

{
  let x = 3;   // Allowed
}

{
  let x = 4;   // Allowed
}  */
//Variables defined with let are not hoisted to the top.
//Using a let variable before it is declared will result in a ReferenceError.
//The variable is in a "temporal dead zone" from the start of the block until it is declared