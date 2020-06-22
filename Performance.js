//Statements or assignments that can be placed outside the loop will make the loop run faster.
/*var i;
for (i = 0; i < arr.length; i++) {
 code statements
} */ //bad
/*var i;
var l = arr.length;
for(i = 0; i < l; i++){

} */
//The bad code accesses the length property of an array each time the loop is iterated.The better code accesses the length property outside the loop and makes the loop run faster.
//Don't create new variables if you don't plan to save values.
/* var fullName = firstName + " " + lastName;
console.log(fullName); */ //can be replaced by the following code
//console.log(firstName + " " + lastName);
