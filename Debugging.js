/*Issues
1. syntax errors that prevent a program from running
2. runtime errors when code fails to execute or has unexpected behavior
3. semantic (or logical) errors when code doesn't do what it's meant to. */
/* Example of a syntax error - often detected by the code editor:

funtcion willNotWork( 
  console.log("Yuck");
}
// "function" keyword is misspelled and there's a missing parenthesis
Here's an example of a runtime error - often detected while the program executes:

function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
// Calling loopy starts an infinite loop, which may crash your browser
Example of a semantic error - often detected after testing code output:

function calcAreaOfRect(w, h) {
  return w + h; // This should be w * h
}
let myRectArea = calcAreaOfRect(2, 3);
Correct syntax and the program executes, but this gives the wrong ans */

//Use the JavaScript Console to Check the Value of a Variable- chrome and firefox's javascript consoles known as DevTools , for debugging js
//console.log() - most helping debugging tool
//Use typeof to Check the Type of a Variable-Be careful especially when you're accessing and working with external data in the form of a JavaScript Object Notation (JSON) object.
console.log(typeof ""); //string
console.log(typeof 0); //number
console.log(typeof []); //object
console.log(typeof {}); //object
//Catch Misspelled Variable and Function Names
//Catch Unclosed Parentheses, Brackets, Braces and Quotes
//Catch Mixed Usage of Single and Double Quotes
// Correct use of same quotes:
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
console.log(allSameQuotes); //I've had a perfectly wonderful evening, but this wasn't it.
//Catch Use of Assignment Operator Instead of Equality Operator
/* let x = 1;
let y = 2;
if (x = y) {
  // this code block will run for any value of y (unless y were originally set as a falsy)
} else {
  // this code block is what should run (but won't) in this example
} */
//Catch Missing Open and Closing Parenthesis After a Function Call
//Catch Arguments Passed in the Wrong Order When Calling a Function-If the arguments are different types, such as a function expecting an array and an integer, this will likely throw a runtime error. If the arguments are the same type (all integers, for example), then the logic of the code won't make sense. Make sure to supply all required arguments, in the proper order to avoid these issues.
//Catch Off By One Errors When Using Indexing
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  // loops one too many times at the end
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  // loops one too few times and misses the first character at index 0
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  // Goldilocks approves - this is just right
  console.log(alphabet[k]);
}
//Use Caution When Reinitializing Variables Inside a Loop
/*create a two-dimensional array with m rows and n columns of zeroes. Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].*/
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);// Pushes n zeroes into the current row to create the columns
    }
    newArray.push(row);// Pushes the current row, which now has n zeroes in it, to the array
  }
  return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);
//Prevent Infinite Loops with a Valid Terminal Condition
/*There was an example of an infinite loop in the introduction to this section - it had no terminal condition to break out of the while loop inside loopy(). Do NOT call this function!

function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
} */
//ensure that the terminal condition, which tells the program when to break out of the loop code, is eventually reached. One error is incrementing or decrementing a counter variable in the wrong direction from the terminal condition. Another one is accidentally resetting a counter or index variable within the loop code, instead of incrementing or decrementing it.

