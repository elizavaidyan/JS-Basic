let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name, duck.numLegs); //Aflac 2
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + dog.numLegs + " legs";
  }
};
console.log(dog.sayLegs()); //This dog has 4 legs
//Make Code More Reusable with the this Keyword
let dog1 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};
console.log(dog1.sayLegs()); //This dog has 4 legs.
/*Constructor Function -Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.
Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
Constructors define properties and behaviors instead of returning a value as other functions might. */
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
} //This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively
let blueBird = new Bird();
//new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird. Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results. Now blueBird has all the properties defined inside the Bird constructor
console.log(Bird.name, blueBird.name);
blueBird.name = "CCC";
console.log(Bird.name, blueBird.name);
//Extend Constructors to Receive Arguments
function Bird1(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
let cardinal = new Bird("Bruce", "red");
console.log(cardinal);
//Verify an Object's Constructor with instanceof - allows to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. 
let crow = new Bird("Alexis", "black");
console.log(crow instanceof Bird); //true

let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};
console.log(canary instanceof Bird);
function Bird2(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck1 = new Bird2("Donald");
let canary1 = new Bird2("Tweety");//name and numLegs are called own properties, because they are defined directly on the instance object. That means that duck and canary each has its own separate copy of these properties. In fact every instance of Bird will have its own copy of these properties. 
let ownProps = [];
for (let property in duck1) {
  if (duck1.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps); //[ 'name', 'numLegs' ]
//Use Prototype Properties to Reduce Duplicate Code-Properties in the prototype are shared among ALL instances 
//every object in JavaScript has a prototype property which is part of the constructor function that created it.
function Dog2(name) {
  this.name = name; //own property
}
Dog2.prototype.numLegs = 4; //protptype property
let beagle = new Dog2("Snoopy");
console.log(beagle); //Dog1 { name: 'Snoopy' }
//Iterate Over All Properties
/* two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype. */
let ownProps1 = [];
let proptptypeProps = [];
for (let property in beagle) {
  if(beagle.hasOwnProperty(property)) {
    ownProps1.push(property)
  } else {
      proptptypeProps.push(property);
  }
}
console.log(ownProps1); //[ 'name' ]
console.log(proptptypeProps); //[ 'numLegs' ]
//Constructor Property-constructor property is a reference to the constructor function that created the instance. The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. 
console.log(duck.constructor === Bird);  //false
console.log(beagle.constructor === Dog2);  //true
//Since the constructor property can be overwritten, it’s generally better to use the instanceof method to check the type of an object.
function Dog3(name) {
  this.name = name;
}
let jerman = new Dog3();
function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog3) {
    return true;
  } else {
    return false;
  }
}
console.log(joinDogFraternity(beagle)); //false
console.log(joinDogFraternity(jerman)); //true
//Change the Prototype to a New Object
function Bird3(name) {
  this.name = name; //own property
}
Bird3.prototype = {
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My nmae is" + this.name);
  }
};
let peacock = new Bird3("PPP");
console.log(peacock);
//Remember to Set the Constructor Property when Changing the Prototype
function Dog4(name) {
  this.name = name;
}

// Only change code below this line
Dog4.prototype = {
  constructor: Dog4, // define the constructor property
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
//Understand Where an Object’s Prototype Comes From
let shepherd = new Dog4("Donald"); //shepherd inherits its prototype from the Dog4 constructor function.can show this relationship with the isPrototypeOf method
console.log(Dog4.prototype.isPrototypeOf(shepherd)); //true
//Understand the Prototype Chain-Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype
Object.prototype.isPrototypeOf(Bird.prototype); // returns true
let duck2 = new Bird("Donald");
duck2.hasOwnProperty("name"); // yields true
/*The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example of the prototype chain. In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method. */
console.log(Object.prototype.isPrototypeOf(Dog4.prototype)); //true
//Use Inheritance So You Don't Repeat Yourself(DRY)
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
  
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
  
};

function Animal() { } //supertype or parent-that defined behaviors shared by all animals

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
//Inherit Behaviors from a Supertype
let animal = Object.create(Animal.prototype);//create an instance of Animal
/* Object.create(obj) creates a new object, and sets obj as the new object's prototype. Recall that the prototype is like the "recipe" for creating an object. By setting the prototype of animal to be Animal's prototype, you are effectively giving the animal instance the same "recipe" as any other instance of Animal. */
console.log(animal.eat()); //nom nom nom
console.log(animal instanceof Animal); //true
//Set the Child's Prototype to an Instance of the Parent
function Animal1() { }

Animal1.prototype = {
  constructor: Animal1,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Doggy() { }

Doggy.prototype = Object.create(Animal.prototype); //instances of Dog inherit from Animal.

let boobie = new Doggy();
//Reset an Inherited Constructor Property
/* function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
let duck = new Bird();
let beagle = new Dog();
*/
//Add Methods After Inheritance
/* Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print "Woof!" to the console. */
function Animal2() { }
Animal2.prototype.eat = function() { console.log("nom nom nom"); };

function Dog5() { }
Dog5.prototype = Object.create(Animal2.prototype);
Dog5.prototype.constructor = Dog5;
Dog5.prototype.bark = function() {
  return "Woof!";
}
let bea = new Dog5();
console.log(bea.bark()); //Woof!
//Override Inherited Methods
function Bird4() { }

Bird4.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird4.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird."
}
let penguin = new Penguin();
console.log(penguin.fly()); //Alas, this is a flightless bird.
//Use a Mixin to Add Common Behavior Between Unrelated Objects
/* Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide. */
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj) {
  obj.glide = function() {
    return "Gliding!";
  }
};
glideMixin(bird);
glideMixin(boat);
console.log(bird.glide()); //Gliding!
console.log(boat.glide()); //Gliding!
//Use Closure to Protect Properties Within an Object from Being Modified Externally
/* The simplest way to make this public property private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function.
In JavaScript, a function always has access to the context in which it was created. This is called closure.

 */
/*Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15. */
function Bird5() {
  //this.weight = 15; //public variable
  let weight = 15; //private variable
  this.getWeight = function() {
    return weight;
  }
}
//Immediately Invoked Function Expression (IIFE)
//A common pattern in JavaScript is to execute a function as soon as it is declared:
(function () {
  console.log("Ha Ha");
})();//this is an anonymous function expression that executes right away,Outputs "Ha Ha" immediately
// the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an immediately invoked function expression or IIFE.

/* Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).

function makeNest() {
  console.log("A cozy nest is ready");
}
makeNest();

 */
(function () {
  console.log("Cozy nest is ready!")
}) (); //Cozy nest is ready!

//Use an IIFE to Create a Module
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        return "Gliding on the water";
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        return "Flying, wooosh!";
      };
    }
  }
})(); // The two parentheses cause the function to be immediately invok
//an immediately invoked function expression (IIFE) that returns an object motionModule. This returned object contains all of the mixin behaviors as properties of the object. The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. Here is an example using it:

motionModule.glideMixin(duck);
console.log(duck.glide()); //Gliding on the water
