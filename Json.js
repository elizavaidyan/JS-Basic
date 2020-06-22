//JSON is a format for storing and transporting data.
//JSON is often used when data is sent from a server to a web page.
/* {
  "employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
  ]
}  *///This JSON syntax defines an employees object: an array of 3 employee records (objects) ie,In the example above, the object "employees" is an array. It contains three objects.Each object is a record of a person (with a first name and a last name).
//JSON Data - A Name and a Value;JSON data is written as name/value pairs, just like JavaScript object properties.A name/value pair consists of a field name (in double quotes), followed by a colon, followed by a value
//"firstName":"John"
//JSON names require double quotes. JavaScript names do not
//JSON Objects:JSON objects are written inside curly braces.Just like in JavaScript, objects can contain multiple name/value pairs
//{"firstName":"John", "lastName":"Doe"}
//JSON Arrays:JSON arrays are written inside square brackets.Just like in JavaScript, an array can contain objects
//Converting a JSON Text to a JavaScript Object;A common use of JSON is to read data from a web server, and display the data in a web page.First, create a JavaScript string containing JSON syntax
var text = '{ "employees" : [' +
'{ "firstName":"John", "lastName":"Doe"},' +
'{"firstName":"Ann", "lastName":"Smith"},' +
'{"firstName":"Peter", "lastName":"Jones"}]}';
//Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object
var obj = JSON.parse(text);
console.log(obj.employees[1].firstName + " " + obj.employees[1].lastName); //Ann Smith