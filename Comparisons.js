//Comparison and Logical operators are used to test for true or false.
var x = 5;
//Comparison Operators
// = equal to
console.log(x == 8); //false
console.log(x == 5); //true
console.log(x == "5"); //true
// === equal value and equal type
console.log(x === 5); //true
console.log(x === "5"); //false
// != not equal to
console.log(x != 8); //true
// !== not equal value and not equal type
console.log(x !== 5); //false
console.log(x !== "5"); //true
console.log(x !== 8); //true
// > greater than
console.log(x > 8); //false
console.log(x < 8); // < less than; true
console.log(x >= 8); // >= greater than or equal to; false
console.log(x <= 8); // <= less than or equal to ; true

//Logical Operators
var y = 6, z = 3;
// && and
console.log(y < 10 && z > 1); //true
console.log(y == 5 || z ==5); // || or ; false
console.log(!(y == z)); // ! not ; true
// Conditional (Ternary) Operator
// variablename = (condition) ? value1:value2 
var age;
 var voteable = (age < 18) ? "Too Young" : "Old enough";
 console.log(voteable); //if age is undefined, result is old enough
 //Comparing different data types
 console.log(2 < 12); //true
 console.log(2 < "12"); //true; When comparing a string with a number, string will be converted to a number.
 console.log(2 < "John"); //false; A non-numeric string converts to NaN which is always false
 console.log(2 > "John"); //false
 console.log(2 == "John"); //false
 console.log("2" == "12"); //false
 console.log("2" < "12"); //false; two is greater than one alphabetically
 console.log("2" > "12"); //true
 console.log("2" == "12"); //false
 


