//Avoid global variables, new, ==, eval()
//always declare local variables -Local variables must be declared with the var keyword or the let keyword, otherwise they will become global variables.
//Declarations on Top; Initialize Variables when declare them
var firstName = "",
lastName = "",
price = 0,
discount = 0,
fullPrice = 0,
i = 0;
myArray = [],
myObject = {};

firstName = "John";
lastName = "Doe";
price = 19.90;
discount = 0.10;
fullPrice = price + discount;
for (; i < 5; i++) {
  console.log(i);
}
//Always declare numbers, strings, or booleans as primitive values. Not as objects.
//Don't Use new Object()
//Use {} instead of new Object()
//Use "" instead of new String()
//Use 0 instead of new Number()
//Use false instead of new Boolean()
//Use [] instead of new Array()
//Use /()/ instead of new RegExp()
//Use function (){} instead of new Function()
//var x1 = {};           // new object
var x2 = "";           // new primitive string
var x3 = 0;            // new primitive number
var x4 = false;        // new primitive boolean
var x5 = [];           // new array object
var x6 = /()/;         // new regexp object
var x7 = function(){}; // new function object
//Beware of Automatic Type Conversions
//Beware that numbers can accidentally be converted to strings or NaN (Not a Number).A variable can contain different data types, and a variable can change its data type
var x8 = "Hello"; //typeof x is a string
x = 5; //changes typeof x to a number
//When doing mathematical operations, JavaScript can convert numbers to strings
var x = 5 + 7;       // x.valueOf() is 12,  typeof x is a number
var x = 5 + "7";     // x.valueOf() is 57,  typeof x is a string
var x = "5" + 7;     // x.valueOf() is 57,  typeof x is a string
var x = 5 - 7;       // x.valueOf() is -2,  typeof x is a number
var x = 5 - "7";     // x.valueOf() is -2,  typeof x is a number
var x = "5" - 7;     // x.valueOf() is -2,  typeof x is a number
var x = 5 - "x";     // x.valueOf() is NaN, typeof x is a number
//Subtracting a string from a string, does not generate an error but returns NaN (Not a Number)
var string1 = "Hello",
string2 = "Dolly";
string3 = string1 - string2;
console.log(string3);
//Use === Comparison; The == comparison operator always converts (to matching types) before comparison.The === operator forces comparison of values and type
0 == "";        // true
1 == "1";       // true
1 == true;      // true

0 === "";       // false
1 === "1";      // false
1 === true;     // false
//Use Parameter Defaults-If a function is called with a missing argument, the value of the missing argument is set to undefined.Undefined values can break your code. It is a good habit to assign default values to arguments.
function myFunction(x, y) {
  if (y===undefined) {
    y = 0;
  }
  return x + y;
}
console.log(myFunction(4)); //4
//Always end switch statements with a default
var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day= "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "saturday";
    break;
  default:
    day = "Unknown";              
}
console.log(day);
//Avoid Using eval()-The eval() function is used to run text as code. In almost all cases, it should not be necessary to use it.Because it allows arbitrary code to be run, it also represents a security problem
