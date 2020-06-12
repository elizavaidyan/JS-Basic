//"use strict"; Defines that JavaScript code should be executed in "strict mode".
//It helps you to write cleaner code, like preventing you from using undeclared variables.
//Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
//Declared at the beginning of a script, it has global scope
"use strict";
x = 5; 
console.log(x); //ReferenceError: x is not defined;if not using "use strict", result will be 5
/*myFunction();
function myFunction() {
  y = 3.14;
  console.log(y); //ReferenceError: y is not defined
} */
/*z = {p1:10, p2:20};
console.log(z.p1); *///Using an object, without declaring it, is not allowed; ReferenceError: z is not defined
/*var x1 = 3.14;
delete x1; */ //SyntaxError: Delete of an unqualified identifier in strict mode.; Deleting a variable (or object) is not allowed
/*function x(p1, p2) {};
delete x; */ //SyntaxError: Delete of an unqualified identifier in strict mode.Deleting a function is not allowed.
//function x(p1, p1){}; //SyntaxError: Duplicate parameter name not allowed in this context
//var x = 010; //SyntaxError: Octal literals are not allowed in strict mode
//var x = "\010"; //SyntaxError: Octal escape sequences are not allowed in strict mode.
//Writing to a read-only property is not allowed
/* var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14; *///TypeError: Cannot assign to read only property 'x' of object '#<Object>'
//Writing to a get-only property is not allowed
/*var obj = {get x() {return 0} };

obj.x = 3.14; */ //TypeError: Cannot set property x of #<Object> which has only a getter
//Deleting an undeletable property is not allowed
//delete Object.prototype; //TypeError: Cannot delete property 'prototype' of function Object() { [native code] }
//var eval = 3.14; //The word eval cannot be used as a variable;SyntaxError: Unexpected eval or arguments in strict mode
//The word arguments cannot be used as a variable
//var arguments = 3.14; //SyntaxError: Unexpected eval or arguments in strict mode
//with (Math){x = cos(2)}; //The with statement is not allowed; SyntaxError: Strict mode code may not include a with statement
//For security reasons, eval() is not allowed to create variables in the scope from which it was called
//The this keyword refers to the object that called the function.
//If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window)
       