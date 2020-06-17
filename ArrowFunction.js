//Arrow functions allow us to write shorter function syntax
hello = function() {
  return "Hello World";
}
console.log(hello()); //Hello World
hello1 = () => { //with arrow function
  return "Hello World"
}
console.log(hello1()); //Hello World
hello2 = () => "Hello World!"; //If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword
console.log(hello2()); //Hello World!
hello3 = (val) => "Hello " + val; //If you have parameters, you pass them inside the parentheses
console.log(hello3(3)); //Hello 3
hello4 = val => "Hello " + val;//if you have only one parameter, you can skip the parentheses 
console.log(hello4("John")); //Hello John
//With arrow functions the this keyword always represents the object that defined the arrow function
//Regular Function
hello5 = function() {
  return this;
}
console.log(hello5()); 
//arrow function
hello6 = () => this;
console.log(hello6());