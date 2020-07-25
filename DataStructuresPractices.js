//Use an Array to Store a Collection of Data
/* one-dimensional array, meaning it only has one level, or that it does not have any other arrays nested within it. Notice it contains booleans, strings, and numbers, among other valid JavaScript data types */

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length); //7
//array.length- length property
/* a multi-dimensional array- an array that contains other arrays. This array can also contain JavaScript objects.*/
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
console.log(complexArray.length); //2
console.log(complexArray[0][1]); //{ three: 3, four: 4 }
//Access an Array's Contents Using Bracket Notation- each array item has index, js arrays are zero-indexed(first position is zero). 
let ourArray = ["a", "b", "c"];
let ourVariable = ourArray[0]; //bracket notation can be used to access arrayitems
console.log(ourVariable); //a
ourArray[1] = "not b anymore"; //can be set a value to an index using bracket notation
console.log(ourArray[1]); //not b anymore
console.log(ourArray); //[ 'a', 'not b anymore', 'c' ]
//Add Items to an Array with push() and unshift()-arrays are mutable ie, array's length is not fixed, elements can be added to or removed from an array
//Array.push() and Array.unshift(). - can take one or more elements as arguments; array.push() adds elements at the end and         array.unshift() at the beginnning of an array
let twentyThree = "XXIII";
let romanNumerals = ["XXI", "XXII"];
romanNumerals.unshift("xIX", "XX");
//console.log(romanNumerals.unshift("xIX", "XX")); //returns length;4
console.log(romanNumerals); //[ 'xIX', 'XX', 'XXI', 'XXII' ]
romanNumerals.push(twentyThree)
//console.log(romanNumerals.push(twentyThree)); //returns length;5
console.log(romanNumerals); //[ 'xIX', 'XX', 'XXI', 'XXII', 'XXIII' ]
/* defined a function, mixedNumbers, passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order. */
function mixedNumbers(arr) {
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));
//Remove Items from an Array with pop() and shift()
/* pop() removes an element from the end of an array, while shift() removes an element from the beginning. The key difference between pop() and shift() and their cousins push() and unshift(), is that neither method takes parameters, and each only allows an array to be modified by a single element at a time. */
let greetings = ['whats up?', 'hello', 'see ya!'];
console.log(greetings.pop()); //returns popped element; see ya!
console.log(greetings);//[ 'whats up?', 'hello' ]
let shifted = greetings.shift();
console.log(shifted); //whats up?
/* define a function, popShift, which takes an array as an argument and returns a new array. Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values. */
function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));
//Remove Items Using splice()-splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.
//splice() can take up to 3 parameters-first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete
let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2); // remove 2 elements beginning with the 3rd element
console.log(array);// array now equals ['today', 'was', 'great']
//splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements
let array1 = ['I', 'am', 'feeling', 'really', 'happy']
console.log(array1.splice(3, 2));// ['really', 'happy']
console.log(array1); //[ 'I', 'am', 'feeling' ]
/* Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10. */
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(0,1);
arr.splice(3,4);
console.log(arr); //[ 4, 5, 1 ]
//Add Items Using splice()-splice() can take up to three parameters? Well, you can use the third parameter, comprised of one or more element(s), to add to the array. This can be incredibly useful for quickly switching out an element, or a set of elements, for another.
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
// the second entry of 12 is removed, and we add 13 and 14 at the same index
//console.log(numbers.splice(startIndex, amountToDelete, 13, 14)); //returns removed element;[ 12 ]
console.log(numbers);// returns [ 10, 11, 12, 13, 14, 15 ]
//Copy Array Items Using slice()-copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched. slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index).
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);
console.log(todaysWeather);//['snow', 'sleet'];
console.log(weatherConditions);// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear'] ie, created a new array by extracting elements from an existing array by suing slice()
/* defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the elements 'warm' and 'sunny'. */
function forecast(arr) {
  var arr1 = arr.slice(2,4);
  return arr1;
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
//Copy an Array with the Spread Operator-to easily copy all of an array's elements; syntax is ...
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
console.log(thatArray);// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray
/* define a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. */
function copyMachine(arr, num) {
  let newArr = [];
  var i = 0;
  while (num >= 1) {
    newArr[i] = [...arr];
    num--;
    i++;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));
//Combine Arrays with the Spread Operator-Another huge advantage of the spread operator, is the ability to combine arrays, or to insert all the elements of one array into another, at any index. With more traditional syntaxes, we can concatenate arrays, but this only allows us to combine arrays at the end of one, and at the start of another.
let thisArray1 = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray1 = ['basil', 'cilantro', ...thisArray1, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
console.log(thatArray1)
/* define a function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].*/
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; 
  return sentence;
}
console.log(spreadOut());
//Check For The Presence of an Element With indexOf()-array. indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates'); // returns -1
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1, the first index at which the element exists
//Iterate Through All an Array's Items Using For Loops
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));
// returns [12, 14, 80]
/*  define a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed. */
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let j= 0;
    while(elem !== arr[i][j] && j <= arr[i].length) {
      j++;
      if( j == arr[i].length) {
        newArr.push(arr[i]);
      }
    }
  }
  return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); //[]
//Create complex multi-dimensional arrays
let nestedArray = [ // top, or first level - the outer most array
  ['deep'], // an array within an array, 2 levels of depth
  [
    ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
  ],
  [
    [
      ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
    ],
    [
      [
        ['deepest-est?'] // an array nested 5 levels deep
      ]
    ]
  ]
];
console.log(nestedArray[2][1][0][0][0]);// logs: deepest-est?
nestedArray[2][1][0][0][0] = 'deeper still';
console.log(nestedArray[2][1][0][0][0]);// now logs: deeper still
console.log(nestedArray[2][1][0][0]); //[ 'deeper still' ]
/* let threeLevelArray = [
  "first level",
  ["Two levels deep", ["Three levels deep"]]
]; */
/* define a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string 'deep', on the fourth level, include the string 'deeper', and on the fifth level, include the string 'deepest'. 
let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];

*/
let myNestedArray = [
  ['unshift', false, 1, 2, 3, 'complex', 'nested', ['deep']],
  ['loop', 'shift', 6, 7, 1000, 'method',['ggg', ['deeper']]],
  ['concat', false, true, 'spread', 'array',[1,[2,['deepest']]]],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];
//Add Key-Value Pairs to JavaScript Objects-objects are just collections of key-value pairs. In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys).
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
//If you want to add an additional property, such as "origin", it can be done by assigning origin to the object:
tekkenCharacter.origin = 'South Korea'; //This uses dot notation. 
tekkenCharacter['hair color'] = 'dyed orange';//added this property with bracket notation
//Bracket notation is required if your property has a space in it or if you want to use a variable to name the property. 
const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';
console.log(tekkenCharacter);
//Modify an Object Nested Within an Object
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
//o assign the value 10 to the busy property of the nested onlineStatus object
nestedObject.data.onlineStatus.busy = 10;
//Access Property Names with Bracket Notation
/* define a function, checkInventory, which receives a scanned item as an argument. Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory. */
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
function checkInventory(scannedItem) {
  return foods[scannedItem]; //25
  //return foods.scannedItem; - will not work this here; returns undefined
}
console.log(checkInventory("apples"));
console.log(foods.apples);//25
//Use the delete Keyword to Remove Object Properties
console.log(foods);
delete foods.apples;
console.log(foods); //{ oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27 }
//Check if an Object has a Property -two different ways ;hasOwnProperty() method and in keyword. 
/* users.hasOwnProperty('Alan');
'Alan' in users; */
/* an object, users, with some users in it and a function isEveryoneHere, which we pass the users object to as an argument. Finish writing this function so that it returns true only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise. */
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  if(obj.hasOwnProperty('Alan') &&  obj.hasOwnProperty('Jeff') && obj.hasOwnProperty('Sarah') && obj.hasOwnProperty('Ryan')) {
    return true;
  } else {
    return false;
  }
}
console.log(isEveryoneHere(users));
//Iterate Through the Keys of an Object with a for...in Statement
for (let user in users) {
  console.log(user); //
} //this variable was reset during each iteration to each of the object's keys as the statement looped through the object, resulting in each user's name being printed to the console. 
//Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.
/* defined a function countOnline which accepts one argument (a users object). Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose online property is set to true. An example of a users object which could be passed to countOnline is shown below. Each user will have an online property with either a true or false value.
*/
function countOnline(usersObj) {
  // Only change code below this line
  let i = 0;
  for(let user in usersObj) {
    if(usersObj[user].online === true){ //usersObj.user.online, usersObj.user[online],usersObj[user][online]--won't work
      i++;
    }
  }
  return i;
}
console.log(countOnline(users)); //4
//Generate an Array of All Object Keys with Object.keys()-passing in an object as the argument.there will be no specific order to the entries in the array.
/* write a getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument. */
function getArrayOfUsers(obj) {
  return Object.keys(obj);
}
console.log(getArrayOfUsers(users)); //[ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]
//Modify an Array Stored in an Object
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};
console.log(user.data.friends); //[ 'Sam', 'Kira', 'Tomo' ]

/* The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.*/
function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}
console.log(addFriend(user, 'Pete'));//[ 'Sam', 'Kira', 'Tomo', 'Pete' ]















