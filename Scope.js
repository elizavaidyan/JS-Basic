//Scope determines the accessibility (visibility) of variables.
//Local JavaScript Variables - Variables declared within a JavaScript function, become LOCAL to the function
//Local variables have Function scope: They can only be accessed from within the function
//Since local variables are only recognized inside their functions, variables with the same name can be used in different functions
//Local variables are created when a function starts, and deleted when the function is completed.
myFunction();
function myFunction(){
  var carName = "Volvo";
  console.log(typeof carName + " " + carName); //string Volvo
}
//Global JavaScript Variables
//A variable declared outside a function, becomes GLOBAL.
//A global variable has global scope: All scripts and functions on a web page can access it. 
var carName1 = "Maruti";
myFunction1();
function myFunction1(){
  console.log("I can display " + carName1); //I can display Maruti
}
myFunction3();
console.log("Car is " + carName3);
function myFunction3() {
  carName3 = "Benz"; //If assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
}
//The lifetime of a JavaScript variable starts when it is declared.
//Local variables are deleted when the function is completed.
//In a web browser, global variables are deleted when you close the browser window (or tab).
//Function arguments (parameters) work as local variables inside functions.

