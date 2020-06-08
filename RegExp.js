//A regular expression is a sequence of characters that forms a search pattern.
//The search pattern can be used for text search and text replace operations.
//A regular expression can be a single character, or a more complicated pattern
// syntax : /pattern/modifiers;
var patt = /schools/i; //w3schools  is a pattern (to be used in a search). i  is a modifier (modifies the search to be case-insensitive).

//In JavaScript, regular expressions are often used with the two string methods: search() and replace().
var str = 'visit school!';
var n = str.search("school"); //Using String search() With a String;search() method searches a string for a specified value and returns the position of the match
console.log(n); //6
//Using String search() With a Regular Expression
var str = "visit Ann's School!";
var n = str.search(/school/i); //i for case- insensitive
console.log(n); //12
var rep = str.replace("School", "home"); //String replace() With a String; replaces a specified value with another value in a string
console.log(rep); //visit Ann's home!
//Use String replace() With a Regular Expression
console.log(str); //visit Ann's School!
var rep = str.replace(/school/i, "home");
console.log(rep); //visit Ann's home!
var str1 = "is this all there is ?"
var rep1 = str1.replace(/is/g, "was"); //Perform a global match (find all matches rather than stopping after the first match)
console.log(rep1); //was thwas all there was ?
var patt1 = /school/i;
var res = str.match(patt1);
console.log(res);
var patt2 = /is/m;
var str2 = "\n is this \n all there is?"
var res = str2.match(patt2);
console.log(res);
var patt3 = /[ah]/g; //Brackets are used to find a range of characters; Find any of the characters between the brackets
var res = str2.match(patt3);
console.log(res); //[ 'h', 'a', 'h' ]
var str3 = "123456789";
var patt4 = /[3-5]/g;
res = str3.match(patt4);
console.log(res); //[ '3', '4', '5' ]
var str4 = "re, green, red, green, gren, gr, blue, yellow";
var patt5 = /(red|green)/g; //Find any of the alternatives separated with |
res = str4.match(patt5);
console.log(res); //[ 'green', 'red', 'green' ]
str = "Give 100%!";
patt = /\d/g; //\d	Find a digit
res = str.match(patt);
console.log(res); //[ '1', '0', '0' ]
str = "Is this all there is?";
patt = /\s/g; //\s	Find a whitespace character
res = str.match(patt);
console.log(res); //[ ' ', ' ', ' ', ' ' ]
str = "HELLO, LOOK AT YOU!";
patt = /\bLO/; //\b Find a match at the beginning of a word like this: \bWORD
res = str.search(patt); 
console.log(res); //7
patt = /LO\b/; //at the end of a word like this: WORD\b
res = str.search(patt);
console.log(res); //3
str = "Hello World!"
patt = /\u0057/; //\uxxxx	Find the Unicode character specified by the hexadecimal number xxxx
res = str.match(patt);
console.log(res); //[ 'W', index: 6, input: 'Hello World!', groups: undefined ]
str = "Hellooo World! Hello W3Schools!"; 
patt1 = /o+/g; //n+ ;Matches any string that contains at least one n
var result = str.match(patt1);
console.log(result); //[ 'ooo', 'o', 'o', 'oo' ]
patt1 = /o/g;
result = str.match(patt1);
console.log(result);
patt = /lo*/g; //n*	Matches any string that contains zero or more occurrences of n; Here global search for an "l", followed by zero or more "o" characters.
res = str.match(patt); 
console.log(res);//[ 'l', 'looo', 'l', 'l', 'lo', 'l' ]
str = "1, 100 or 1000?";
patt1 = /10?/g;
patt2 = /10*/g;
result = str.match(patt1); //global search for a "1", followed by zero or one "0" characters.
res = str.match(patt2);
console.log(result); //[ '1', '10', '10' ]
console.log(res); //[ '1', '100', '1000' ]
patt =/e/;
//test() method is a RegExp expression method
//It searches a string for a pattern, and returns true or false, depending on the result.
res = patt.test("The best things in life are free");
console.log(res);//true Since there is an "e" in the string
res = /h/.test("The best things in life are free");
console.log(res); //true
//exec() method is a RegExp expression method
//It searches a string for a specified pattern, and returns the found text as an object
//If no match is found, it returns an empty (null) object.
res = /e/.exec("The best things in life are free");
console.log(res);