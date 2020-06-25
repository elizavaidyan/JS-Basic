//Objects are variables too. But objects can contain many values.
//The values are written as name : value pairs (name and value separated by a colon).
var person = {
  firstName:"John", 
  lastName:"Doe", 
  age:50, 
  eyeColor:"blue",
  fullName:function() {
    return this.firstName + " " + this.lastName;
  }
}
//object is a collection of named values
//An object method is an object property containing a function definition.
//creating object with new keyword
var person1 = new Object();
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 50;
person1.eyeColor = "blue";
console.log(person1.firstName + " is " + person1.age +" years old."); //John is 50 years old.
var x = person1; //This will not create a copy of person.
//The object x is not a copy of person. It is person. Both x and person are the same object. Any changes to x will also change person, because x and person are the same object.
x.age = 10; // This will change both x.age and person.age
console.log(person1.age); //10
//Properties are the values associated with a JavaScript object.Properties can usually be changed, added, and deleted, but some are read only.
//Accessing JavaScript Properties
var age3 = person1.age; 
var age1 = person1["age"];
var age2 = "age";person1[age2]
console.log(person1[age2]);
var txt = "";
////The block of code inside of the for...in loop will be executed once for each property.
for (x in person) { 
  txt += person[x];
  txt += " ";
}
console.log(txt);
person.nationality = "English";//add new properties to an existing object by simply giving it a value only if the object already exists
console.log(person);
delete person.age; //or delete person["age"];delete keyword deletes a property from an object
console.log(person);
var name = person.fullName(); //Accessing Object Methods
console.log(name); //John Doe
//Adding a Method to an Object
person1.name = function() {
  return this.firstName + " " + this.lastName;
};
var myArray = Object.values(person);//Any JavaScript object can be converted to an array using Object.values()
console.log(myArray);
var myString = JSON.stringify(person);
//Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify()
//The result will be a string following the JSON notation
console.log(myString);
person.today = new Date();
var myString1 = JSON.stringify(person); //JSON.stringify converts dates into strings
console.log(myString1);
//JSON.stringify will not stringify functions
var person2 = {firstName:"John", age:function() {return 30;}};
/*var string2 = JSON.stringify(person2);
console.log(string2); */ //{"firstName":"John"}
//convert the functions into strings before stringifying.
person2.age = person2.age.toString();
var string3 = JSON.stringify(person2);
console.log(string3); //{"firstName":"John","age":"function() {return 30;}"}
//It is also possible to stringify JavaScript arrays
var arr = ["John", "Peter", "Sally", "Jane"];
console.log(arr); //[ 'John', 'Peter', 'Sally', 'Jane' ]
var string4 = JSON.stringify(arr);
console.log(string4); //["John","Peter","Sally","Jane"]
//Getters and setters allow to define Object Accessors (Computed Properties).
//JavaScript can secure better data quality when using getters and setters.
//Getter Method:get keyword
//person3 accesses lang as a property: person3.lang
//obj person3 accesses fullName as a function: person3.fullName()
var person3 = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  fullName: function(){
    return this.firstName + " " + this.lastName;
  },
  get lang() {
    //return this.language;
    return this.language.toUpperCase();
  }
};
console.log(person3.lang);//Display data from the object using a getter
console.log(person3.fullName());
//Setter Method:set Keyword
var person4 = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  set lang(lang) {
    this.language = lang;
    //this.language = lang.toUpperCase();
  }
};
person4.lang = "english";// Set an object property using a setter
console.log(person4.language); //english
var obj = {counter : 0}; //Object
//Defining setters
Object.defineProperty(obj, "reset", {
  get: function() {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get: function() {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get: function() {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set: function(value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set: function(value) {this.counter -= value;}
});
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;
console.log(obj.counter);//4
/*var person5 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
}; */
function person5(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
var Father = new person5("John1", "Doe1", 60, "Black");
console.log("Father is " + Father.age); //Father is 60
var Mother = new person5("Sally", "Rally", 48, "green");
console.log("Mother is " + Mother.age); //Mother is 48
//Adding a method to a constructor
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.name = function() {return this.firstName + " " + this.lastName;};
}
var Father1 = new Person("John", "Doe", 50, "blue");
console.log(Father1.name()); //John Doe
//you can not add a new property to an existing object constructor
Person.nationality = "English";
console.log(Father1.nationality); //undefined
//To add a new property to a constructor, you must add it to the constructor function
//prototype property allows to add new properties to object constructors
Person.prototype.nationality = "English";
console.log(Father1.nationality); //English
//prototype property also allows to add new methods to objects constructors
function Person6(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person6.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
var Father6 = new Person6("John", "Doe", 50, "blue");
console.log(Father6.name()); //John Doe