/* A computer algorithm is a sequence of steps that is followed to achieve a particular outcome. To write an algorithm, you must first understand a problem, and then solve it with coding.
 For example, if you are building a calculator, don't try to solve the problem as a whole. First, consider how to get inputs. Then, determine each arithmetic operation one by one. Finally, display the results.*/
 //Convert Celsius to Fahrenheit
 function convertToF(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}
console.log(convertToF(30)); //86
//Reverse a String
function reverseString(str) {
  let reversedStr = "";
  for( let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log(reverseString("hello")); //olleh
//Factorialize a Number
function factorialize(num) {
  let factorial = 1;
  for( let i = num; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
}
console.log(factorialize(5)); //120
//Find the Longest Word in a String
function findLongestWordLength(str) {
  var words = str.split(' ');
  var maxLength = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); //6
//Return Largest Numbers in Arrays
function largestOfFour(arr) {
   let largetArr = [];
  for (let i = 0; i < arr.length; i++) {
    let largest = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (largest < arr[i][j]) {
        largest = arr[i][j];
      }
    }
    largetArr[i] =largest;
  }
  return largetArr;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); //[ 5, 27, 39, 1001 ]
//Confirm the Ending
/* Check if a string (first argument, str) ends with the given target string (second argument, target). */
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target; //true
}
console.log(confirmEnding("Bastian", "n"));
//OR
function confirmEnding1(str, target) {
  return str.endsWith(target); //true
}
console.log(confirmEnding("Bastian", "n"));
/* Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. 
Eg: repeatStringNumTimes("abc", 3) should return "abcabcabc".*/
function repeatStringNumTimes(str, num) {
  let newStr = "";
  if(num > 0) {
    for(let i = 1; i <= num; i++) {
      newStr += str;
    }
  }
  return newStr;
}
console.log(repeatStringNumTimes("abc", 3)); //abcabcabc
//Truncate a String
function truncateString(str, num) {
  if(str.length > num) {
    let newStr = str.slice(0,num);
    newStr += '...';
    return newStr;
  }
  else{
    return str;
  }
  
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); //A-tisket...
/* Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined. */
function findElement(arr, func) {
  let num = 0;
  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)); //2
/* Check if a value is classified as a boolean primitive. Return true or false.Boolean primitives are true and false. */
function booWho(bool) {
  return typeof bool == "boolean";
   
}
console.log(booWho(null)); //flase
/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". */
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}
console.log(titleCase("I'm a little tea pot")); //I'm A Little Tea Pot
//Slice and Splice
function frankenSplice(arr1, arr2, n) {
  let localArray = arr2.slice();//Create a copy of the second array inside of( the function. This will ensure that the original array is not mutated. This can be done by using the slice operation on the second array, and assign it to a variable.
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
/* Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. Hint: Try converting each value to a Boolean.*/
function bouncer(arr) {
  let newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}
console.log(bouncer([7, "ate", "", false, 9])); //[ 7, 'ate', 9 ]
/* Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because 
it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
getIndexToIns([40, 60], 50); */

function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
              return a - b;
            }
          );

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
   return a;
}
return arr.length;
}
console.log(getIndexToIns([40, 60], 50)); //1
/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien". */
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
console.log(mutation(["hello", "hey"])); //false
/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]. */
function chunkArrayInGroups(arr, size) {
  var temp = [];
  var result = [];

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1) temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  return result;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); //[ [ 'a', 'b' ], [ 'c', 'd' ] ]


