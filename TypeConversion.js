//typeof opr; finds the data type of a JavaScript variable.
console.log(typeof "John"); //string
console.log(typeof 3.14); //number
console.log(typeof NaN); //number
console.log(typeof false); //boolean
console.log(typeof [1, 2, 3, 4]); //object
console.log(typeof {name: 'John', age: 23}); //object
console.log(typeof new Date()); //object
console.log(typeof function () {}); //function
console.log(typeof myCar); //undefined
console.log(typeof null); //object
console.log("John".constructor); // [Function: String]
//String() can convert numbers to strings
var x = "10";
console.log(String(x)); //10
console.log(String(123)); //123
console.log(String(100 + 123)); //223
//toString() converts numbers to string
console.log(x.toString()); //10
console.log((123).toString()); //123
console.log((100 + 123).toString()); //223
//Booleans to Strings
console.log(String(false)); //false
console.log(true.toString()); //true
//Dates to String
console.log(String(Date())); //Thu Jun 04 2020 21:04:55 GMT+0530 (India Standard Time)
console.log(Date().toString());
// strings to numbers
//Number() can convert strings to numbers
console.log(Number("3.14")); //3.14
console.log(Number(" ")); //0
console.log(Number("")); //0
console.log(Number("99 88")); //NaN
//Unary + Operator; can be used to convert a variable to a number
var y = "5";
var x = + y;
console.log(typeof x); //number
y = "John";
x = + y;
console.log(x); //NaN ;If the variable cannot be converted, it will still become a number, but with the value NaN
console.log(Number(false)); //0
console.log(Number(true)); //1
//Dates to Numbers
console.log(Number(new Date())); //1591285512478
console.log(new Date().getTime()); //1591285538163
//Automatic Type Conversion
//When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type
console.log(5 + null); //5;because null is converted to 0
console.log("5" + null); //5null
console.log("5" + 2); //52
console.log("5" - 2); //3;because "5" is converted to 5
console.log("5" * 2); //10
