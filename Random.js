/*Math.random()
Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive) */
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));//Math.random() used with Math.floor() can be used to return random integers; returns a random integer from 0 to 9
console.log(Math.floor(Math.random() * 11));// returns a random integer from 0 to 10
console.log(Math.floor(Math.random() * 100)); // returns a random integer from 0 to 99
console.log(Math.floor(Math.random() * 101)); // returns a random integer from 0 to 100
console.log(Math.floor(Math.random() * 10) + 1); // returns a random integer from 1 to 10
console.log(Math.floor(Math.random() * 100) + 1); // returns a random integer from 1 to 100
function getRndInteger(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
} //This JavaScript function always returns a random number between min (included) and max (excluded)
console.log(getRndInteger(0, 10));

function getRndInteger1(min, max){
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
} //function always returns a random number between min and max (both included)
console.log(getRndInteger1(0,10)); 
