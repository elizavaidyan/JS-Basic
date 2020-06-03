//if statement
var hour = 19;
if(hour <18){
  console.log("Good Day!");
} else{
  console.log("Good Evening!")
}
var time = 10;
if(time < 10){
  console.log("Good Morning!");
} else if(time < 20){
  console.log("Good Day!");
} else {
  console.log("Good Evening!");
}
switch(new Date().getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;    
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;// not necessary to break the last case in a switch block. The block breaks (ends) there anyway        
}
var x = "0";
switch(x){ //strict comparison; === ; both value and type
  case 0:
    console.log("OFF");
    break;
  case 1:
    console.log("ON");
    break;
  default:
    console.log("Has no value");       
}
