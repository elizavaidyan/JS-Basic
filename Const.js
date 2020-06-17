//Variables defined with const behave like let variables, except they cannot be reassigned
const PI = 3.141592653589793;
// PI = 3.14; //TypeError: Assignment to constant variable.
//PI = PI + 10; //TypeError: Assignment to constant variable.
var x = 10; 
//Block Scope;Declaring a variable with const is similar to let when it comes to Block Scope.
//Here x is 10
{
  const x = 2;
  //Here x is 2
}
//Here x is 10
//const variables must be assigned a value when they are declared
/*const p; //SyntaxError: Missing initializer in const declaration
p = 10; */
//const -does NOT define a constant value. It defines a constant reference to a value.,we cannot change constant primitive values, but we can change the properties of constant objects.
const car = { type: "Fiat", model: 500, color: "White" }; //const object
console.log(car);
car.color = "Red"; //can change the property of const object
car.owner  = "John"; //can add properties to const object
console.log(car);
//car = { type: "Volvo", model: "EX60", color: "Black"};// Error;cannot reassign a constant object
//can change the elements of a constant array
const cars = ["Saab", "Volvo", "BMW"]; //can create a constant array
console.log(cars);
cars[0] = "Toyota"; //can change an element of a const array
console.log(cars);
cars.push("Audi"); //can add an element to a const array
console.log(cars);
// cars = ["Toyota", "Volvo", "Audi"]; //error; cannot reassign a const array
//Redeclaring a JavaScript var variable is allowed anywhere in a program
var x = 2;//allowed
var x = 3;//allowed
x = 4; //allowed
//Redeclaring or reassigning an existing var or let variable to const, in the same scope, or in the same block, is not allowed
var y = 2; //allowed
//const y = 2; //not allowed
{
  let y = 2;//allowed
 //const y = 2; //not allowed
}
//Redeclaring or reassigning an existing const variable, in the same scope, or in the same block, is not allowed
const z = 2; //allowed
//const z = 3; //not allowed
//z = 3; //not allowed
//var z = 3; //not allowed
//let z = 3; //not allowed
{
  const z = 2; //allowed
  //const z = 3; //not allowed
  //z = 3; //not allowed
  //var z = 3; //not allowed
  //let z = 3; //not allowed
}
//Redeclaring a variable with const, in another scope, or in another block, is allowed
const x1 = 2;
{
  const x1 = 3; //allowed
}
{
  const x1 = 4; //allowed
}
//Variables defined with var are hoisted to the top;can use a var variable before it is declared
carName = "Volvo"; 
console.log(carName); //can use var before it is declared
var carName;
//Variables defined with const are not hoisted to the top;A const variable cannot be used before it is declared
/* carName1 = "Audi"; //ReferenceError: Cannot access 'carName1' before initialization
const carName1 = "Audi"; */




