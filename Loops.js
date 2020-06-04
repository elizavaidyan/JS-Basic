//For loop
var i;
for (i = 0; i < 5; i++){ //statement 1 is optional
  console.log("The number is " + i);
}
var len, text;
var cars = ["BMW", "Volvo", "Saab", "Ford"];
/* can initiate many values in statement 1 (separated by comma) */
for (i =0, len =cars.length, text = ""; i < len; i++) { 
  text += cars[i];
}
console.log(text +'\n');
i = 2;
len = cars.length;
text = "";
//can omit statement 1 (like when your values are set before the loop starts)
for (; i < len; i++) {
  text += cars[i];
}
console.log(text);
//can omit statement 1 (like when your values are set before the loop starts)
//If you omit statement 2, you must provide a break inside the loop. Otherwise the loop will never end. This will crash your browser
//statement 3 is optional.
i = 0;
text = "";
for(; i < len; ){
  text += cars[i];
  i++;
}
console.log(text);
//for/in statement loops through the properties of an object
var person = {fname:"John", lname:"Doe", age:25};
text ="";
var x;
for (x in person){
  text += person[x];
  console.log(text);
  text = "";
}
//The For/Of Loop
//Looping over an Array
for (x of cars){
  console.log(x);
}
//Looping over a String
var txt = "JavaScript";
for (x of txt){
  console.log(x);
}
//while 
i = 0;
while(i < 10){
  
  console.log(i);
  i++; //If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser
}
//Do while
i = 20;
do {
  console.log(i);
  i++;
} while (i < 30);
//break
for(i = 0; i < 10; i++){
  if (i == 3){
    break; //jump out of the loop
  }
  console.log(i);
}
//continue
for (i = 0; i < 10; i++){
  if (i == 3){
    continue; //3 is not printed; to skip one loop iteration
  }
  console.log(i);
}
//JS Labels

lists: {
  console.log(cars[0]);
  console.log(cars[1]);
  break lists;
  console.log(cars[2]);
  console.log(cars[3]);
}