var person = {
  firstName : "john",
  lastName : "Doe",
  id : 5566,
  fullName : function(){
    return this.firstName + " " + this.lastName; //In an object method, this refers to the "owner" of the method.;The person object is the owner of the fullName method.
  }
};
console.log(person.fullName()); //John Doe
//this keyword refers to the object it belongs to
var x = this; //this Alone;When used alone, the owner is the Global object, so this refers to the Global object
console.log(x); //{}
function MyFunction() {
  return this; //in a function, this refers to the Global object 
}
console.log(MyFunction()); //Object [global] 
var person1 = {
  firstName : "Johna",
  lastName : "Doee",
  fullName : function() {
    return this; //this is the person object (The person object is the "owner" of the function):
  }
}
console.log(person1.fullName());
"use strict";
var y = this; //In strict mode, when used alone, this also refers to the Global object [object Window]
console.log(y); //{}

function MyFunction1() {
  return this; //JavaScript strict mode does not allow default binding.  So, when used in a function, in strict mode, this is undefined.
}
console.log(MyFunction1());
var person2 = {
  firstName : "Joe",
  lastName : "D",
}
console.log(person1.fullName.call(person2)); //when calling person1.fullName with person2 as argument, this will refer to person2, even if it is a method of person1