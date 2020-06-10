//Throw and Try to Catch
//try -to test a block of code for errors
//catch - to handle the error
//throw - to create custom errors
//finally - to execute code, after try and catch, regardless of the result
try {
  addalert("Welcome Guest!");
}
catch(err) {
  console.log(err.message);
}
//JavaScript will throw an exception (throw an error)
//The throw statement allows you to create a custom error.
//The exception can be a JavaScript String, a Number, a Boolean or an Object

//If throw is used together with try and catch, program flow can be controlled and generate custom error messages.
var message, x;
message = "4";
try{
 if(message == "") throw empty;
 if(isNaN(message)) throw "not a number";
 message = Number(message);
 if(message < 5) throw "too low";
 if(message > 5) throw "too high"
}
catch(err) {
  console.log("Input is " + err);
}
finally { //finally - to execute code, after try and catch,regardless of the result
  console.log("Input is empty");
}
var num = 1;
try {
  num.toPrecision(500); // A number cannot have 500 significant digits
}
catch(err) {
  console.log(err.name); //RangeError is thrown if you use a number that is outside the range of legal values
}
//Reference Error
var x;
try {
  x = y + 1; //y cannot be referenced (used)
}
catch(err) {
  console.log(err.name); //ReferenceError
}
//Syntax Error
try {
  eval("alert('Hello)"); //Missing ' will produce an error
}
catch(err) {
  console.log(err.name); //SyntaxError
}
//Type Error
try {
  num.toUpperCase(); // You cannot convert a number to upper case
}
catch(err) {
  console.log(err.name); //TypeError
}
//URI (Uniform Resource Identifier) Error
try {
  decodeURI("%%%"); // You cannot URI decode percent signs
}
catch(err){
  console.log(err.name);
}