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