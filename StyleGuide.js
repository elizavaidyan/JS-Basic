//Style Guide and Coding Conventions
//Coding conventions - style guidelines for programming
//Var names - camelCase,start with letter 
firstName = "John";
lastName = "Doe";
price = 19.90;
tax = 0.20;
fullPrice = price + (price * tax);
//put space around operators(=+-*/)
var x = y + z;
var values = ["Volvo", "saab", "Fiat"];
//Code indentation- use 2 spaces for indentation of code blocks
//Do not use tab for indentation.
function toCelsius(farenheit) {
  return (5 / 9) * (farenheit - 32);
}
//Statement Rules-always end with a semicolon
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyecolor: "blue"
};
//Rules for compound statements-put the opening bracket at the end of first line, use one space before the opening bracket, put the closing bracket on a new line, without leading spaces, do not end a complex statement with a semicolon-Loops, functions, Conditionals
//Object Rules
//- place the opening bracket on the same line as the object name, use colon plus one space between each property and its value, use quotes around string values, not around numeric values, Do not add a comma after the last property-value pair, Place the closing bracket on a new line, without leading spaces. always end an object definition with a semicolon
//short objects can be written on one line, using spaces between properties
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
//Line length < 80..If a statement does not fit on one line,break it after a comma or operator
//Naming Conventions- vars and function -camelCase, global vars - UPPERCASE, constants-UPPERCASE
