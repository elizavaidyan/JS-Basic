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
console.log(switchOfStuff(1)); //stuff
function sample(val) {
switch(val) { //Multiple Identical Options in Switch Statements
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
return result;
}
console.log(sample(2)); //1, 2, or 3;
/* Write a switch statement to set answer for the following ranges:
1-3 - "Low"
4-6 - "Mid"
7-9 - "High" */
function sequentialSizes(val) {
  var answer = "";
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
    }
  return answer;
}
console.log(sequentialSizes(1)); //Low
/* Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined. */
function abTest(a, b) {
  if(a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2,2)); //8
console.log(abTest(-2,2));  //undefined
/* You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Output
-3 Hold
5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.
*/
var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;    
  }
  if (count > 0) {
    return count + " Bet";
  } else if (count <= 0) {
     return count + " Hold";
  }
 }
console.log(cc(2));//1 Bet
console.log(cc(3)); //2 Bet
console.log(cc(7));//2 Bet
console.log(cc('K')); //1 Bet
console.log(cc('A'));//0 Hold
/* Make an object that represents a dog called myDog which contains the properties "name" (a string), "legs", "tails" and "friends".

You can set these object properties to whatever values you want, as long as "name" is a string, "legs" and "tails" are numbers, and "friends" is an array. */
var myDog = {
    "name": "AAA",
    "legs": 4,
    "tails": 1,
    "friends": ["BBB", "CCC", "DDD"]
  };
console.log(myDog.name);//AAA   
function phoneticLookup(val) {
  var result = "";

  var lookup= {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];
  return result;
}
console.log(phoneticLookup("charlie"));
/* Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".*/
var myObj = {
  top: "hat",
  bottom: "pants",
  1: "Shirt"
};
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp]
  } else {
      return "Not Found";
  }
}
console.log(checkObj(myObj, "top")); //hat
//console.log(checkObj(myObj, top));//Error; propertyname should be in quotes if string
console.log(checkObj(myObj, 1));//Shirt
console.log(checkObj(myObj, 2)); //Not Found
//JSON :an array which contains one object inside
/*Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];
*/
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "AAA",
    "title":"BBB",
    "release_year": 1986,
     "formats": [
      "CD",
      "8T",
      "LP"
    ]
  }
];
/*Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation. */
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents); //maps
/* Retrieve the second tree from the variable myPlants using object dot and array bracket notation. */ //JSON
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
var secondTree = myPlants[1].list[1] ;
console.log(secondTree); //pine
/* You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.

Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.

If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.

Your function must always return the entire collection object.

There are several rules for handling incomplete data:

If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.

If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.

If value is empty (""), delete the given prop property from the album. */

var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};
function updateRecords(id, prop, value) {
  if(value === "") {
      delete collection.id.prop;
    } else if (prop === "tracks")  {
        collection.id[prop] = collection.id.prop || [];
        collection.id[prop].push(value);
    } else {
      collection[id][prop] = value;
    }
      
     return collection;
}

updateRecords(5439, "artist", "ABBA");
console.log(collection);
/* Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop. */
var myArray1 = [];
var i = 5;
while ( i >= 0) {
  myArray1.push(i);
  i--;
}
console.log(myArray1); //[ 5, 4, 3, 2, 1, 0 ]

/* the odd numbers from 1 through 9 to myArray using a for loop */
var myArray = [];
for(var i = 1; i <= 9; i += 2) {
  myArray.push(i);
}
console.log(myArray); //[ 1, 3, 5, 7, 9 ]
/* the odd numbers from 9 through 1 to myArray using a for loop. */
var myArray = [];
for (var i = 9; i >=1; i -= 2) {
  myArray.push(i);
}
console.log(myArray); //[ 9, 7, 5, 3, 1 ]
/* Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.*/
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for ( var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total); //20
//Nesting for loops
var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
/* Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr. */
function multiplyAll(arr) {
  var product = 1;
  for (var i =0; i< arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
console.log(multiplyAll([[1,2],[3,4],[5,6,7]])); //5040
/* Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr. */
function sum(arr, n) {
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n-1) + arr[n-1];
  }
 }
console.log(sum([1,2,3,4,5],5)); //15
/* We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return "No such contact".

If prop does not correspond to any valid properties of a contact found to match name then return "No such property". */
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];
function lookUpProfile(name, prop){
for (var i = 0; i < contacts.length; i++) {
      if (name === contacts[i].firstName) {
          if (contacts[i].hasOwnProperty(prop)) {
              return contacts[i][prop];
          } else {
              return "No such property";
          }
       } 
}
return "No such contact";
}
console.log(lookUpProfile("Akira", "likes")); //[ 'Pizza', 'Coding', 'Brownie Points' ]
console.log(lookUpProfile("Kristian", "lastName"))//Vos
/*generate and return a random whole number between 0 and 9.*/
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());
/* Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive. */
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
console.log(randomRange(1,10));
/*Use parseInt() in the convertToInteger function so it converts the input string str into an integer, and returns it.*/
function convertToInteger(str) {
  return parseInt(str);
}
console.log(convertToInteger("56")); //56
/* Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.*/
function convertToInteger(str) {
  return parseInt(str,2)
 }
 console.log(convertToInteger("10011")); //19
 /* Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either "Equal" or "Not Equal".*/
 function checkEqual(a, b) {
  return (a === b) ? "Equal" : "Not Equal";
 }
 console.log(checkEqual(1, 2)); //Not Equal
 console.log(checkEqual(1, 1)); //Equal
 console.log(checkEqual(1, "1")) //Not Equal
 /*use multiple conditional operators to check if a number is positive, negative or zero. The function should return "positive", "negative" or "zero". */
 function checkSign(num) {
  return (num > 0) ? "positive"
    : (num < 0) ? "negative"
    : "zero";
}
console.log(checkSign(10)); //positive
console.log(checkSign(-10)) //negative
console.log(checkSign(0))  //zero
/* write a recursive function that returns an array containing the numbers 1 through n. This function will need to accept an argument, n, representing the final number. Then it will need to call itself with progressively smaller values of n until it reaches 1 */
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]
/* countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind. */
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray =countdown(n-1);
    countArray.unshift(n); 
    return countArray
  }
}
console.log(countdown(5)); //[ 5, 4, 3, 2, 1 ]
/* define a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same. */
function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
      return [startNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }
console.log(rangeOfNumbers(6,9)); //[ 6, 7, 8, 9 ]