var cars = ["Saab", "Volvo", "BMW"]; //Array Creation
var numbers = [1, 2, 3, 4];
console.log(cars); //['Saab', 'Volvo', 'BMW']
console.log(numbers); //[1, 2, 3, 4]
var numbers1 = [1,
  2,
  3,
  4,
  5];
console.log(numbers1) //[1, 2, 3, 4, 5]
var num = new Array(1,2,3); //Another way of array creation; no need to use this
console.log(num); //[1, 2, 3]
var car1 = cars[0]; //Accessing array elements by referring to the index
console.log(car1); // Saab
cars[0] = "Opel"; //Changing an array element
console.log(cars); //['Opel', 'Volvo', 'BMW']
//JS arrays are objects
var arrayLength = cars.length; //returns array length
console.log(arrayLength); //3
var firstElement = cars[0]; //Accessing 1st Element of array
console.log(firstElement); //Opel
var lastElement = cars[cars.length -1]; //Accessing last Element of array
console.log(lastElement); //BMW
var i;
// Looping of array elements
for(i = 0; i<arrayLength; i++){ 
  console.log(cars[i]);
}
cars.forEach(carFunction); //forEach() function for looping
function carFunction(value){
  console.log(value);
}
function carFunction1(n1, n2){
  //console.log(n1, n2);
  console.log(n2, n1);
}
cars.forEach(carFunction1);
cars.push("Benz"); //push()method adds element to array at the end
console.log(cars);
cars[cars.length] = "Hyundai"; //Adding elements to array by length property
console.log(cars); //[ 'Opel', 'Volvo', 'BMW', 'Benz', 'Hyundai' ]
console.log(Array.isArray(cars)); //To check if a var is an array; 
console.log(cars instanceof Array); //instanceof operator; to check if a var is an array; returns true if an array
var arrayString = cars.toString(); //converts array to string
console.log(arrayString); // Opel,Volvo,BMW,Benz,Hyundai
console.log(cars.join("*")); //to string by join()method; but witha seperator; Opel*Volvo*BMW*Benz*Hyundai
console.log(cars.join("")); //OpelVolvoBMWBenzHyundai
console.log(cars); // Before popping, ;[ 'Opel', 'Volvo', 'BMW', 'Benz', 'Hyundai' ]
console.log(cars.pop()); //pops out the last element of array; returns the popped element result is Hyundai
console.log(cars); //after popping; [ 'Opel', 'Volvo', 'BMW', 'Benz' ]
console.log(cars.push("Prado")); //Returns new length of array
console.log(cars); //[ 'Opel', 'Volvo', 'BMW', 'Benz', 'Prado' ]
var shiftedElement = cars.shift(); //shifts elements to lower index; removes first element
console.log(shiftedElement); // shift() returns shifted element
console.log(cars); //[ 'Volvo', 'BMW', 'Benz', 'Prado' ]
var addedelement = cars.unshift("Audi"); // adds element at the beginning
console.log(addedelement); //returns new length of array
console.log(cars); //[ 'Audi', 'Volvo', 'BMW', 'Benz', 'Prado' ]
//delete cars[0]; //not recommended since it leaves undefined holes in the array
// console.log(cars); //[ <1 empty item>, 'Volvo', 'BMW', 'Benz', 'Prado' ]
console.log(cars.splice(2,0,"car1","car2")); //splice() returns array with deleted items
console.log(cars); //after splice(); 2 elets are added at 2 pos and 0 deleted
console.log(cars.splice(2,2,"car3","car4"));  //[ 'car1', 'car2' ]
console.log(cars); 
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys); // joins arrays
console.log(myChildren);
var array3 = ["Robin", "Morgan"];
myChildren = myGirls.concat(myBoys,array3); //concat() can take any no of args
console.log(myChildren);
myChildren = myGirls.concat(myBoys, "John"); // string as args
console.log(myChildren);
var newArray = cars.slice(1); //creates new array; doesn't remove any elements from original array
console.log(newArray); //array starting from 1
console.log(cars);
console.log(cars.slice(3)); //[ 'car4', 'BMW', 'Benz', 'Prado' ]
console.log(cars.slice(1,3)); //[ 'Volvo', 'car3' ]
var sortedArray = cars.sort(); //sorts alphabetically
console.log(sortedArray); 
console.log(cars);
var reversedArray = cars.reverse(); //reverses array elements
console.log(reversedArray);
var numArray = [40, 100, 1, 5, 25, 10];
numArray.sort(function(a,b){return(a-b)}); //sort uses compare function; sort() considers numbers as string so compare is used
console.log(numArray); // [ 1, 5, 10, 25, 40, 100 ]
var descendArray = numArray.reverse();
console.log(descendArray); //[ 100, 40, 25, 10, 5, 1 ]
console.log(numArray[0]);  // highest value; after sort in descending order
console.log(numArray[numArray.length-1]); // min value; after sort in descending order
var num1 = [45, 4, 9, 16, 25];
//var mapArray = num1.map(mapFunction);
function mapFunction(value,index,arr){ //index & arra are optional
  return value*2;
}
//console.log(mapArray); //each elt is multiplied by 2
console.log(num1.map(mapFunction)); //does not change original array
console.log(num1);
var filterArray = num1.filter(filterFunction);//a new array with array elements that passes a test.
function filterFunction(value,index,arr){ //index & arr are optional
  return value > 18;
}
console.log(filterArray);  //[ 45, 25 ]
var sum = num1.reduce(reduceFunction); // runs a function on each array element to produce (reduce it to) a single value
function reduceFunction(total, value,index,arr){
  return total+value;
}
console.log(sum);
console.log(num1.reduceRight(reduceFunction)); //works from right-to-left in the array
console.log(num1.every(filterFunction));//every() method check if all array values pass a test.; returns true or false
console.log(num1.some(filterFunction)); //some() method check if some array values pass a test.;rerturns true or false
console.log(num1.indexOf(45)); // returns index of array element
console.log(num1.indexOf(3));// returns -1 if item not found
console.log(num1.indexOf(16, 3)); //here 3 is where to start search;optional
var num2 = [45, 2, 6, 45,10];
console.log(num2.lastIndexOf(45));//returns the position of the last occurrence of the specified element.; result is 3
console.log(num1.lastIndexOf(16)); //same as Array.indexOf()
console.log(num1.find(filterFunction));//returns the value of the first array element that passes a test function
console.log(num1.findIndex(filterFunction)); //returns the index of the first array element that passes a test function.
var myArray = [["John", 23], ["Cat", 2]];
myArray.push(["dog", 3]);
console.log(myArray);//[ [ 'John', 23 ], [ 'Cat', 2 ], [ 'dog', 3 ] ]
function functionwithArgs(arg1,arg2) {
  console.log(arg1+arg2);
}
functionwithArgs(2,3); //5
function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // logs "foo"
//console.log(loc); // loc is not defined
var myGlobal = 10;
function fun1() {
  oopsGlobal = 5;//Variables which are used without the var keyword are automatically created in the global scope. 
}
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
/*fun1();
fun2(); */
fun2();
fun1();
//It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
var outerWear = "T-Shirt";
function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}
console.log(myOutfit());//sweater
var sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive() {
  sum = sum +5;
}
addThree();
addFive();
console.log(sum); //8
var processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
console.log(processed); //2


