/* Write a function nextInLine which takes an array (arr) and a number (item) as arguments.Add the number to the end of the array, then remove the first element of the array.The nextInLine function should then return the element that was removed.*/
function nextInLine(arr, item) {
  arr.push(item);
  var removed = arr.shift();
  return removed;
}
var testArr = [1,2,3,4,5];
/* console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));*/
console.log("Before: " + testArr);
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
/*Create an if statement inside the function to return "Yes, that was true" if the parameter wasThatTrue is true and return "No, that was false" otherwise.*/
function trueOrFalse(wasThatTrue) {
  if(wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
console.log(trueOrFalse(true)); //Yes, that was true
console.log(trueOrFalse(false)); //No, that was false
/* Add the equality operator to the indicated line so that the function will return "Equal" when val is equivalent to 12.*/
function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}
console.log(testEqual(10)); //Not Equal
/* Use the strict equality operator in the if statement so the function will return "Equal" when val is strictly equal to 7 */
function testStrict(val) {
  if (val === 7) { 
    return "Equal";
  }
  return "Not Equal";
}
console.log(testStrict(7)); //Equal
/* Combine the two if statements into one statement which returns "Outside" if val is not between 10 and 20, inclusive. Otherwise, return "Inside". */
function testLogicalOr(val) {
  if (val > 20  || val <10) {
    return "Outside";
  }
  return "Inside";
}
console.log(testLogicalOr(15)); //Inside
console.log(testLogicalOr(9)); //Outside
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
console.log(foo(0)); // "Less than one"
console.log(bar(0)); // "Less than two"; Order is important in if, else if statements.The function is executed from top to bottom so you will want to be careful of what statement comes first.
/* Write a switch statement to set answer for the following conditions:
"a" - "apple"
"b" - "bird"
"c" - "cat"
default - "stuff"

*/
function switchOfStuff(val) {
  var answer = "";
  
switch(val) {
  case "a":
   answer = "apple";
   break;
  case "b":
   answer = "bird";
   break;
  case "c":
   answer = "cat";
   break;
  default:
   answer = "stuff";   

}
  return answer;
}

console.log(switchOfStuff(1));




