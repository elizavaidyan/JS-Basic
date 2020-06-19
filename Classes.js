//properties are assigned inside a constructor() method
//Use the keyword class to create a class, and always add the constructor() method
//The constructor method is called each time the class object is initialized.
class car { //creating a class
  constructor(brand){ //adding constructor;It has to have the exact name "constructor"
    this.carName = brand;
  }
}
myCar = new car("Ford"); //creating object 
console.log(myCar.carName); //Ford
// if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.
class car1 {
  constructor(brand){
    this.carName1 = brand;
  }
  present() {
    return "I have a " + this.carName1;
  }
}
myCar1 = new car1("Audi");  //Audi
console.log(myCar1.present()) //call the method by referring to the object's method name followed by parentheses (any parameters would go inside the parentheses); I have a Audi
class car2 {
  constructor(brand) {
    this.carName2 = brand;
  }
  present(x) {
    return x + ", I have a " + this.carName2;
  }
}
myCar2 = new car2("Ford");
console.log(myCar2.present("Hello")); //Hello, I have a Ford
class car3 {
  constructor(brand) {
    this.carName = brand;
  }
  static hello() { //statix method; 
    return "Hello!";
  }
}
myCar3 = new car3("Ford");
console.log(car3.hello()); //cannot call a static method on the object,  but on the class  ; Hello!
// console.log(myCar3.hello()); // this would raise an error
class car4 {
  constructor(brand) {
    this.carName = brand;
  }
  static hello(x) {
    return "Hello, " + x.carName;
  }
} 
myCar4 = new car4("Ford");
console.log(car4.hello(myCar4)); //object can be sent as a parameter to static method //Hello, Ford
//Inheritance -To create a class inheritance, use the extends keyword.A class created with a class inheritance inherits all the methods from another clas
//Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.
class Car5 {
  constructor(brand) {
    this.carName = brand;
  }
  present() {
    return 'I have a ' + this.carName;
  }
}
class Model extends Car5 {
  constructor(brand, mod) {
    super(brand); //The super() method refers to the parent class.;By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}
myCar5 = new Model("Ford", "Mustang");
console.log(myCar5.show()); //I have a Ford, it is a Mustang
//Getters and Setters - to do something special with the value before returning them, or before you set them.
//To add getters and setters in the class, use the get and set keywords.
class Car6 {
  constructor(brand) {
    this.carName = brand;
  }
  get cnam() { //even if the getter is a method, you do not use parentheses when you want to get the property value
    return this.carName;
  }
  set cnam(x){
    this.carName = x;
  }
}
myCar6 = new Car6("ford");
console.log(myCar6.cnam); //ford
//class declarations are not hoisted.
//cannot use the class yet.
//mycar7 = new Car7("Ford"); //This would raise an error.

class Car7 {
  constructor(brand) {
    this.carname = brand;
  }
}

//Now you can use the class:
mycar7 = new Car7("Ford")
//The syntax in classes must be written in "strict mode".
class Car8 {
  constructor(brand) {
    //i = 0; //error; i sis not defined; var i = 0; should be used
    this.carName = brand;
  }
}
var myCar8 = new Car8("Volvo");
console.log(myCar8.carName); //Volvo