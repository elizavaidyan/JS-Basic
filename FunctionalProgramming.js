//Functional programming is an approach to software development based around the evaluation of functions. 
//Functions are independent from the state of the program or global variables. They only depend on the arguments passed into them to make a calculation
//Functions try to limit any changes to the state of the program and avoid changes to the global objects holding data
//Functions have minimal side effects in the program
/* Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope.

INPUT -> PROCESS -> OUTPUT

Functional programming is about:

1) Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

2) Pure functions - the same input always gives the same output

3) Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled */
//Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function
//Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.

//The functions that take a function as an argument, or return a function as a return value are called higher order functions.
//When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a lambda.

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea,27);
const tea4BlackTeamFCC = getTea(prepareBlackTea,13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
//Hazards of Using Imperative Code
/* an imperative style in programming is one that gives the computer a set of statements to perform a task.

Often the statements change the state of the program, like updating global variables. A classic example is writing a for loop that gives exact directions to iterate over the indices of an array.

In contrast, functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function. */
/* The final list of open tabs, stored in finalTabs.tabs, should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] but the list produced by the code is slightly different.

Change Window.prototype.tabClose so that it removes the correct tab. */
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
  var tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  var tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  return this;
 };

 // Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

//Avoid Mutations and Side Effects Using Functional Programming
//in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.
//Pass Arguments to Avoid External Dependence in a Function
//Refactor Global Variables Out of Functions
/* Rewrite the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it. */
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (arr,bookName) {
  let newArr = [...arr];//// Copy the bookList array to a new array
  newArr.push(bookName);
  return newArr;
}
function remove (arr, bookName) {
  let newArr = [...arr];
  
  if (newArr.indexOf(bookName) >= 0) {
    // Check whether the bookName parameter is in new array.
    newArr.splice(newArr.indexOf(bookName), 1); // Remove the given paramater from the new array.
    return newArr; // Return the new array.
  }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
//Use the map Method to Extract Data from an Array
/* The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.

When the callback is used, it is passed three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the map method was called. */
const users = [
  { name: 'John', age: 34, eyeColor: 'blue' },
  { name: 'Amy', age: 20, eyeColor: 'black' },
  { name: 'camperCat', age: 10, eyeColor: 'brown' }
];

const names = users.map(user => user.name);
console.log(names); // [ 'John', 'Amy', 'camperCat' ]
const items = users.map(item => ({
  name: item["name"],
  age: item["age"]
}));
console.log(items);
//Implement map on a Prototype
/* Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You may use a for loop or the forEach method. */
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  this.forEach( a => newArray.push(callback(a)))
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
console.log(s); //[ 23, 65, 98, 5 ]
console.log(new_s); //[ 46, 130, 196, 10 ]
//filter calls a function on each element of an array and returns a new array containing only the elements for which that function returns true. In other words, it filters the array, based on the function passed to it. Like map, it does this without needing to modify the original array.

//The callback function accepts three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the filter method was called.
const users1 = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users1.filter(user => users1.age < 30);
console.log(usersUnder30); // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]
/*The variable watchList holds an array of objects with information on several movies. Use a combination of filter and map on watchList to assign a new array of objects with only title and rating keys. The new array should only include objects where imdbRating is greater than or equal to 8.0. Note that the rating values are saved as strings in the object and you may need to convert them into numbers to perform mathematical operations on them.*/
// The global variable
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  }
];
var filteredList = watchList
  .map(movie => {
    return {
      title: movie.Title,
      rating: movie.imdbRating
    };
  })
  .filter(movie => {
    // return true it will keep the item
    // return false it will reject the item
    return parseFloat(movie.rating) >= 8.0;
  });

console.log(filteredList);
//Implement the filter Method on a Prototype
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  let newArray = [];
  this.forEach(function(x) {
    if(callback(x) == true) {
      newArray.push(x);
    }
  });
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
//Return Part of an Array Using the slice Method
/* The slice method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The slice method does not mutate the original array, but returns a new one. */
var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray1 = arr.slice(1, 3);// Sets newArray to ["Dog", "Tiger"]
console.log(newArray1);
//Remove Elements from an Array Using slice Instead of splice- takes arguments for the index of where to start removing items, then the number of items to remove. If the second argument is not provided, the default is to remove items through the end. However, the splice method mutates the original array it is called on
var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(cities.splice(3, 1)); // Returns "London" and deletes it from the cities array
// cities is now ["Chicago", "Delhi", "Islamabad", "Berlin"]
//Combine Two Arrays Using the concat Method- It returns a new array and does not mutate either of the original arrays.

/* Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array. */
function nonMutatingConcat(original, attach) {
  return original.concat(attach);

}
var first = [1, 2, 3];
var second = [4, 5];
console.log(nonMutatingConcat(first, second)); //[ 1, 2, 3, 4, 5 ]
console.log(first); //[ 1, 2, 3 ]
console.log(second); //[4, 5]
//Add Elements to the End of an Array Using concat Instead of push
//Use the reduce Method to Analyze Data-solve almost any array processing problem using the reduce method.
const users2 = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users2.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); // 64
const users3 = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];
//an object can be returned 
const usersObj = users3.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj); // { John: 34, Amy: 20, camperCat: 10 }
/* The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, and return the average rating from getRating function. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.
 */
function getRating(watchList){
  var averageRating =
  watchList
    // Use filter to find films directed by Christopher Nolan
    .filter(film => film.Director === "Christopher Nolan")
    // Use map to convert their ratings from strings to numbers
    .map(film => Number(film.imdbRating))
    // Use reduce to add together their ratings
    .reduce((sumOfRatings, rating) => sumOfRatings + rating) /
  // Divide by the number of Nolan films to get the average rating
  watchList.filter(film => film.Director === "Christopher Nolan").length;
  
  return averageRating;
}
console.log(getRating(watchList));

//Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
/* define a function named squareList. You need to complete the code for the squareList function using any combination of map(), filter(), and reduce() so that it returns a new array containing only the square of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array containing only real numbers is [-3, 4.8, 5, 3, -3.2]. */
const squareList = (arr) => {
  // Only change code below this line
  return arr
          .filter(num => num > 0 && num % parseInt(num) === 0)
          .map(num => Math.pow(num, 2));
  
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers); //[ 25, 9 ]
//Sort an Array Alphabetically using the sort Method-The sort method sorts the elements of an array according to the callback function.
/* JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction: If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged. */
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
console.log(ascendingOrder([1, 5, 2, 3, 4]));
// Returns [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
console.log(reverseAlpha(['l', 'h', 'z', 'b', 's']));
// Returns ['z', 's', 'l', 'h', 'b']

/* Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order. */
function alphabeticalOrder(arr) {
  return arr.sort(function(a,b) {
    return a === b ? 0 : a < b ? -1 : 1;
  }
  );
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"])); //[ 'a', 'a', 'c', 'd', 'g', 'z' ]

/* Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable. */
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let newArr = [...arr];
  return newArr.sort(function(a,b) {
    return a-b;
  }
  );
}
console.log(nonMutatingSort(globalArray)); //[ 2, 3, 5, 6, 9 ]
//Split a String into an Array Using the split Method
/* The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string. */
var str = "Hello World";
var bySpace = str.split(" ");// Sets bySpace to ["Hello", "World"]
console.log(bySpace); //[ 'Hello', 'World' ]
var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);// Sets byDigits to ["How", "are", "you", "today"]
console.log(byDigits); //[ 'How', 'are', 'you', 'today' ]

/* Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation. */

function splitify(str) {
  return str.split(/\W/);
}
console.log(splitify("Hello World,I-am code")); //[ 'Hello', 'World', 'I', 'am', 'code' ]
//Combine an Array into a String Using the join Method-The join method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.
var arr = ["Hello", "World"];
var str = arr.join(" ");// Sets str to "Hello World"
console.log(str); //Hello World

/* Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the replace method. */
function sentensify(str) {
  return str.split(/\W/).join(" ");
}
console.log(sentensify("May-the-force-be-with-you")); //May the force be with you
//Apply Functional Programming to Convert Strings to URL Slugs
/* Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words
The output is a string with the spaces between words replaced by a hyphen (-)
The output should be all lower-cased letters
The output should not have any spaces
*/
// The global variable
var globalTitle = "Winter Is Coming";
function urlSlug(title) {
return title
    .split(/\W/)
    .filter(obj => {
      return obj !== "";
    })
    .join("-")
    .toLowerCase();

}
console.log(urlSlug(globalTitle)); //winter-is-coming
//Use the every Method to Check that Every Element in an Array Meets a Criteria-The every method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values meet the criteria, false if not.
/* Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value. */
function checkPositive(arr) {
  return arr.every(value => value > 0) 
  
}
console.log(checkPositive([1, 2, 3, -4, 5])); //false
//Use the some Method to Check that Any Elements in an Array Meet a Criteria-The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.
/* Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value. */
function checkPositive(arr) {
  return arr.some(value => value >0);
}
console.log(checkPositive([1, 2, 3, -4, 5])); //true
//Introduction to Currying and Partial Application-The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.

//In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.
//Un-curried function
 function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
/* //Alternative using ES6
let curried1 = x => y => x + y

curried(1)(2) // Returns 3 */
//This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available.
// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3
//partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. Here's an example:

//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
console.log(partialFn(10)); // Returns 13

