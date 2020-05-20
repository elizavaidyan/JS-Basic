var txt = "abcdefghijklmnopqrst";
console.log(txt.length); //length property returns the length of the string
console.log("The length of the string is "+ txt.length);
var str = "Please locate where 'locate' occurs";
var pos = str.indexOf("locate"); //position of first occurrence of 'locate'
console.log(pos);
console.log(str.lastIndexOf("locate")); // last occurence position of string
console.log(str.indexOf("John")); //returns -1 if string is not found
console.log(str.lastIndexOf("john")); //returns -1
var pos1 = str.indexOf("locate",15); //15 is the starting position of search
console.log(pos1);
var pos2 = str.lastIndexOf("locate",15);
console.log(pos2);
console.log(str.search("locate")); //search method
var str1 = "Apple, Banana, Kiwi";
var res = str1.slice(7, 13); //extracts a part of a string
console.log(res);
console.log(str1.slice(7,14));
console.log(str1.slice(-16, -6)); //starting from the end
console.log(str1.slice(7));
console.log(str1.slice(-7)); //counting from the end
console.log(str1.substring(7,13)); //substring() method
console.log(str1.substring(5));
console.log(str1.substr(7,3)); //substr()method, sec para is the length
console.log(str1.substr(7));
console.log(str1.substr(-3, 6));// it doesn't consider sec para if first para is negative
console.log(str1.substr(-5));





