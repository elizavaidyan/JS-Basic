console.log(Boolean(10>9)); //Boolean() function to find out if an expression (or a variable) is true
console.log(10>9); //returns true
console.log(Boolean(100)); //Everything With a "Value" is True
console.log(Boolean(3.14)); //true
console.log(Boolean(-15)); //true
console.log(Boolean("Hello")); //true
console.log(Boolean(7 + 1 + 3.14)); //true
var a = 0;
console.log(Boolean(a)); //Everything Without a "Value" is False
console.log(Boolean(-0)); //false
var str = "";
console.log(Boolean(str)); //Boolean value of "" (empty string) is false
var x;
console.log(Boolean(x)); //Boolean value of undefined is false
var y = null;
console.log(Boolean(y)); //Boolean value of null is false
console.log(Boolean("false")); //true
console.log(Boolean(false)); //Boolean value of false is false
var x1 = 10 / "H";
console.log(Boolean(x1)); //Boolean value of NaN is false
var x2 = false; //JavaScript booleans are primitive values created from literals
var x3 = new Boolean(false); /* booleans can also be defined as objects with the keyword new;Do not create Boolean objects. It slows down execution speed.The new keyword complicates the code. This can produce some unexpected results */
console.log(typeof x2); //returns boolean
console.log(typeof x3); //returns object
console.log(x2 == x3); //true because x and y have equal values
console.log(x2 === x3); //false because the === operator expects equality in both type and value.
var x4 = new Boolean(false);
console.log(x3 == x4); //false because objects cannot be compared

