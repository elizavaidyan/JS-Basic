var value = 10;

console.log(value); 
console.log('All the best Anna');

var x, y, z;
x = 5; y = 10;
z = x + y;
console.log(z);

var x = "Anna"; //string in double quotes
console.log(x);
var y = 'Mary'; //string in single quotes
console.log(x,y);  // prints the values in a single line
var Lastname = "John";
var lastname = "Johny";
console.log(Lastname); //Identifiers
console.log(lastname);
var num = 1; //number data type
var text = 'Elephant'; //string data type
var text1 = "Apple"; //string 
var textString = '123';//string- text string
console.log(text);
console.log(text1);
console.log(textString);

var carName; //Declaring a variable.here value of carName is undefined
carName = 'Audi'; //Assigning value to a variable

var carName1 = 'Prado'; //Assigning value to a variable when declare it
var num1 = 10, num2 = 20; //multiple variables in single line
var num3 =30,
num4 = 40;
var num5; //value will be undefined after execution of this statement
console.log(num5); //undefined
var num1; //redeclaring a variable,but still it holds the value 10
console.log(num1); 
var total = 1 + 2 + 3;
var authorName = "John" + " " + "Doe" //string concatenation
console.log(total);
console.log(authorName);
var x = "Volvo" + 1 + 2; // it will print Volvo12
var y = 1 + 2 + "Volvo"; // it will print 3Volvo
var $p = 1; 
var _q = 2; // commonly used for private(hidden)variables
var a = 2;
var b = 2;
var c = a**b; // exponentiation 2^2 = 4
console.log(c);

var type1;
type1 = 3; //Now variable type1 is a number
type1 = "Data"; // Now variable type1 is a string
console.log(type1); // It prints 'Data'
console.log(x==y); //It returns false

var cars = ["audi", "prado", "honda"];
console.log(cars[0]); //It returns audi

var vehicles = ['v1','v2','v3'];
console.log(vehicles[1]); //It returns v2

console.log(typeof 2); //It prints number
console.log(typeof true) // It prints boolean
console.log(typeof r); // r is undefined
var obj = {name:"Johny", age:32}; // object
console.log(typeof obj); // It prints object

var array1 = [1, 2, 3, 4];
console.log(typeof array1); // typeof array is object
console.log(typeof null);  //typeof null is object

function myFunction(a, b){
  return a*b;
}
var fun1 = myFunction(2,3); //It invokes myFunction()
console.log(fun1); //It prints 6
console.log(myFunction); //Returns the function onject, not the function result

function exFunction1(){
  return 2+3;
}
console.log(exFunction1()); //Returns function result

var person = { firstName : "John",
lastName : "Doe",
age : 50,
eyeColor : "blue",
fullName :function(){
  return this.firstName + " " +this.lastName; //this means owner of the function. here its person object.
}
};
console.log(person.firstName); // It returns John
console.log(person["age"]); //another way of accessing obect properties
console.log(person.fullName()); //accessing object method
console.log(person.fullName); // It returns function definition

var name = "Ann";
console.log(name.length); //Built- in  function length returns 3
 var slash1 = "Ann\'s age is 20"; //  \' inserts single quotes
 var slash2 = "Ann \\mary";  // \\ inserts backslash
 var slash3 = "Ann\"is\" a good girl"; // \" inserts double quotes
console.log(slash1); 
console.log(slash2);
console.log(slash3);

var name1 ="Ann";
var name2 = new String("Ann"); //String as object 
console.log(typeof name1); //It returns string
console.log(typeof name2); //It returns object
console.log(name1==name2); //It returns true. It checks value of name1 & name2
console.log(name1===name2); //It returns false. It checks value and type
var str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate")); //The position of first occurence of locate
console.log(str.lastIndexOf("locate")); //Last occurence of locate
console.log(str.indexOf("locate", 15)); // 15 is the starting position for the search


