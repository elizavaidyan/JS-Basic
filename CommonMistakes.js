//JavaScript programs may generate unexpected results if a programmer accidentally uses an assignment operator (=), instead of a comparison operator (==) in an if statement
var x = 0, y, x1 = 10, y1 = "10", z;
y = Boolean(x == 10) 
console.log(y); //false
y = Boolean(x = 10);
console.log(y); //true; incorrect answer; happened due to the use of wrong operator
y = Boolean(x = 0);
console.log(y); //false
z = Boolean(x == y)
console.log(z); //true;In regular comparison, data type does not matter
z = Boolean(x === y);
console.log(z);//false;In strict comparison, data type does matter
//switch statements use strict comparison
switch(x1) {
  case 10: console.log("Hello"); //Hello
}
switch(y1) {
  case 10: console.log("Hello");//will not display Hello
}
//Addition is about adding numbers.Concatenation is about adding strings.In JavaScript both operations use the same + operator
var x2 = 10 + 5;
console.log(x2); //15
var x3 = 10 + "5";
console.log(x3); //105
//All numbers in JavaScript are stored as 64-bits Floating point numbers (Floats).All programming languages, including JavaScript, have difficulties with precise floating point values
var x4 = 0.1;
var y4 = 0.2;
var z4 = x4 + y4;
console.log(z4); //0.30000000000000004
//To solve the problem above, it helps to multiply and divide
var z4 = (x4 * 10 + y4 * 10) / 10;
console.log(z4); //0.3
//JavaScript will allow you to break a statement into two lines
var string1 = 
"Hello World!";
console.log(string1); //Hello World!
/*var string1 = "Hello
World";*/ //breaking a statement in the middle of a string will not work
var string1 = "Hello \
World!"; //use a "backslash" if you must break a statement in a string
console.log(string1); //Hello World!
if ( x == 19); {
  console.log("Hai");//Hai ;Because of a misplaced semicolon, this code block will execute regardless of the value of x
}
console.log(myFunction(55)); //550
function myFunction(a) {
  var power = 10
  return a * power
}
function myFunction1(a) {
  var power = 10;
  return a * power;
}
console.log(myFunction1(55)); //550;It is a default JavaScript behavior to close a statement automatically at the end of a line.Because of this, these two examples will return the same result
function myFunction2(a) {
  var 
  power = 10; //JavaScript will also allow you to break a statement into two lines
  return a * power;
}
console.log(myFunction2(55)); //550
function myFunction3(a) {
  var 
  power = 10;
  return 
  a * power;
}
console.log(myFunction3(55)); //undefined
function myFunction4(a) {
  var 
  power = 10;
  return;
  a * power;
}
console.log(myFunction3(55)); //undefined
//If a statement is incomplete like var JavaScript will try to complete the statement by reading the next line power = 10;
//But since this statement is complete return JavaScript will automatically close it like this: return;
//This happens because closing (ending) statements with semicolon is optional in JavaScript.JavaScript will close the return statement at the end of the line, because it is a complete statement.
//Never break a return statement.
//Arrays with named indexes are called associative arrays (or hashes). JavaScript does not support arrays with named indexes.In JavaScript, arrays use numbered indexes
var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
var x5 = person.length;
console.log(x5);
var y5 = person[0]; //3
console.log(y5); //John
//In JavaScript, objects use named indexes.If you use a named index, when accessing an array, JavaScript will redefine the array to a standard object.After the automatic redefinition, array methods and properties will produce undefined or incorrect results
var person1 = [];
person1["firstName"] = "John";
person1["lastName"] = "Doe";
person1["age"] = 46;
var x6 = person1.length;
var y6 = person1[0];
console.log(x6,y6); //0 undefined
//Undefined is Not Null.JavaScript objects, variables, properties, and methods can be undefined.In addition, empty JavaScript objects can have the value null.This can make it a little bit difficult to test if an object is empty.You can test if an object exists by testing if the type is undefined
console.log(typeof myObj === "undefined"); //true
//cannot test if an object is null, because this will throw an error if the object is undefined.To solve this problem,test if an object is not null, and not undefined. But this can still throw an error
//if (myObj !== null && typeof myObj !== "undefined") incorrect;must test for not undefined before you can test for not null
console.log(typeof myObj !== "undefined" && myObj !== null); //false
