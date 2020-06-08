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
console.log(str1.slice(7,14));//index starts at 0
console.log(str1.slice(-16, -6)); //starting from the end
console.log(str1.slice(7));
console.log(str1.slice(-7)); //counting from the end
console.log(str1.substring(7,13)); //substring() method
console.log(str1.substring(5));
console.log(str1.substr(7,3)); //substr()method, sec para is the length
console.log(str1.substr(7));
console.log(str1.substr(-3, 6));// it doesn't consider sec para if first para is negative
console.log(str1.substr(-5));
var str2 = "Please visit Microsoft";
var n = str2.replace("Microsoft", "Amazon"); //replace() method;(search string, replace string)
console.log(n);
var n1 = str2.replace("locate", "Amazon"); //search string is not in original string
console.log(n1);
var str3 = "Please visit Microsoft and Microsoft!";
console.log(str3.replace("Microsoft", "Amazon")); //Only first search string is replaced
console.log(str3.replace("MICROSOFT", "Amazon")); //replace() is case sensitive
console.log(str3.replace(/MICROSOFT/i, "Amazon")); // /i to replace case sensitive. then string is written without quotes
console.log(str3.replace(/Microsoft/g, "Amazon")); // /g to replace all matches

var text1 = "Hello World!";
var uppercaseText = text1.toUpperCase(); //to upper case
console.log(uppercaseText);
var lowercaseText = text1.toLowerCase(); // to Lower Case
console.log(lowercaseText); 

var text2 = "How are you?";
var textConcat = text1.concat(" ", text2); //first param is " "
console.log(textConcat);
var textConcat1 = "Hello World"+ " "+ "How are you?";
console.log(textConcat1);
var text3 = "   Hi   ";
var textTrim = text3.trim(); //trim white spaces
console.log(textTrim);
var charatPos = text1.charAt(0); //returns character at position 0
console.log(charatPos);
console.log(text1.charCodeAt(0)); //unicode of chara at 0
console.log(text1[0]);
text1[0]="A"; //does not show error,but does not work
console.log(text1[0]);
var text4 = "a, b, c, d,e";
var splitText = text4.split(",");  //converts to an array
console.log(text4); //a, b, c, d,e
console.log(splitText); //[ 'a', ' b', ' c', ' d', 'e' ]
console.log(text4[0]);
console.log(splitText[0]);
var text5 = "a, b, c";
var splitText1 = text4.split(" "); //[ 'a,', 'b,', 'c,', 'd,e' ]
console.log(splitText1);
console.log(text5.split(" ")); //[ 'a,', 'b,', 'c' ]
console.log(text5.split("|")); //[ 'a, b, c' ]
console.log(text5.split(""));










