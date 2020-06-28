function MyFunction(a, b) {
  return a * b;
}
console.log(MyFunction(2, 3)); //6
//Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).
//Since a function declaration is not an executable statement, it is not common to end it with a semicolon.
//Function Expressions-A JavaScript function can also be defined using an expression.A function expression can be stored in a variable
var x = function(a, b) {return a * b};
console.log(x(10, 10)); //100;After a function expression has been stored in a variable, the variable can be used as a function
//The function above is actually an anonymous function (a function without a name).Functions stored in variables do not need function names. They are always invoked (called) using the variable name.
//The function above ends with a semicolon because it is a part of an executable statement.
//Functions can also be defined with a built-in JavaScript function constructor called Function().
var MyFunction1 = new Function("a", "b", "return a * b");
var x1 = MyFunction1(3, 4); 
console.log(x1); //12
//no need to use function constructor
//Most of the time, avoid using the new keyword in JavaScript
//Self-Invoking Functions - Function expressions can be made "self-invoking".A self-invoking expression is invoked (started) automatically, without being called.
//Function expressions will execute automatically if the expression is followed by (), cannot self-invoke a function declaration.
// parentheses have to be added around the function to indicate that it is a function expression
(function () {
  var x = "Hello";
}) ();
//functions can best be described as objects.functions have both properties and methods.
//The arguments.length property returns the number of arguments received when the function was invoked
function MyFunction2(a, b) {
  return arguments.length;
}
console.log(MyFunction2(5, 6)); //2
var txt = MyFunction2.toString(); //toString() method returns the function as a string
console.log(txt);
//JavaScript function definitions do not specify data types for parameters.functions do not perform type checking on the passed arguments.functions do not check the number of arguments received.
//If a function is called with missing arguments (less than declared), the missing values are set to: undefined. Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter
function MyFunction3(a, b) {
  if(b == undefined) {
    b = 0;
  }
  return a + b;
}
console.log(MyFunction3(3)); //3
//Function arguments are the real values passed to (and received by) the function.
//JavaScript functions have a built-in object called the arguments object.The argument object contains an array of the arguments used when the function was called (invoked).
//Example
x = findMax(1, 123, 500, 115, 44, 88);
function findMax() {
  var i;
  var max = -Infinity;
  for(i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(x); //500
x1 = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  var i;
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i]; 
  }
  return sum;
}
console.log(x1); //871
//Invoking(calling) a JS Function-The code inside a function is not executed when the function is defined.The code inside a function is executed when the function is invoked.; call upon a function or start a function or execute a function
//Invoking a Function as a Function
function MyFunction4(a, b) {
  return a * b;
}
console.log(MyFunction4(4, 5)); //20
//console.log(window.MyFunction4(4, 5));
//Invoking a Function as a Method
var myObject = {
  firstName: "John",
  lastName: "Doe",
  age: 58,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
console.log(myObject.fullName()); //John Doe
//Invoking a Function with a Function Constructor - If a function invocation is preceded with the new keyword, it is a constructor invocation.It looks like you create a new function, but since JavaScript functions are objects you actually create a new object
function MyFunction5(arg1, arg2) { //function constructor
  this.firstName = arg1;
  this.lastName = arg2;
}
var x2 = new MyFunction5("John", "Doe"); //creates a new object
console.log(x2.firstName); //John
//Method Reuse - With the call() method, you can write a method that can be used on different objects.
//In JS all functions are object methods. If a function is not a method of a JavaScript object, it is a function of the global object
//call() - The call() method is a predefined JavaScript method.It can be used to invoke (call) a method with an owner object as an argument (parameter).With call(), an object can use a method belonging to another object.
var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName: "John",
  lastName: "Doe"
}
var person2 = {
  firstName: "Mary",
  lastName: "Doe"
}
console.log(person.fullName.call(person1)); //John Doe
console.log(person.fullName.call(person2)); //Mary Doe
var person3 = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName +"," + city + "," + country;
  }
}
console.log(person3.fullName.call(person1, "Oslo", "Norway")); // John Doe,Oslo,Norway
//apply() method, you can write a method that can be used on different objects.
console.log(person.fullName.apply(person2)); //Mary Doe
//The call() method takes arguments separately.The apply() method takes arguments as an array.
console.log(person3.fullName.apply(person2, ["Oslo", "Norway"]));//Mary Doe,Oslo,Norway
console.log(Math.max(1, 2, 3)); //3
console.log(Math.max.apply(null, [1, 2, 3])); //3;Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead
console.log(Math.max.apply(Math, [1, 2, 3])); //3; The first argument (null) does not matter.
console.log(Math.max.apply(" ", [1, 2, 3])); //3
console.log(Math.max.apply(0, [1, 2, 3])); //3
//JS closures-JavaScript variables can belong to the local or global scope.Global variables can be made local (private) with closures.
function MyFunction5() {
  var a = 5;
  return a * a;
}
console.log(MyFunction5());//25;function can access all variables defined inside the function; a is a local var
var z1 = 4;
function MyFunction6() {
  return z1 * z1;
}
console.log(MyFunction6()); //16;function can also access variables defined outside the function; z1 is a global var
//Global and local variables with the same name are different variables. Modifying one, does not modify the other.
//Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.
//Variable Lifetime-Global variables live until the page is discarded, like when navigate to another page or close the window.Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.
/*var counter = 0;
function add() {
  counter += 1;
}
add();
add();
add();
console.log(counter); */ //3
//Here Any code on the page can change the counter, without calling add().The counter should be local to the add() function, to prevent other code from changing it.
var add = (function () {
  var counter = 0;
  return function () {
    counter += 1;
    return counter;
  } 
}
)();
add();
add();
add();
console.log(counter);
//A closure is a function having access to the parent scope, even after the parent function has closed.
/* The variable add is assigned the return value of a self-invoking function.
The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
The counter is protected by the scope of the anonymous function, and can only be changed using the add function. */