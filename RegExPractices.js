/* /regEx/.test('string'); test if a pattern exists or not within a string
'string'.match(/regEx/); extract the actual matches found

*/
/*Apply the regex myRegex on the string myString using the .test() method.*/
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);//The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.
console.log(result); //true
//Match a Literal String with Different Possibilities
/* Complete the regex petRegex to match the pets "dog", "cat", "bird", or "fish".*/
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; //search for multiple patterns using the alternation or OR operator: |.
let result1 = petRegex.test(petString);
console.log(result1); //true
//Ignore Case While Matching-can match cases using what is called a flag-  the flag that ignores case - the i flag(uppercase and lowercase);can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings "ignorecase", "igNoreCase", and "IgnoreCase".
/* Write a regex fccRegex to match "freeCodeCamp", no matter its case. Your regex should not match any abbreviations or variations with spaces.*/
let myString1 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; 
let result2 = fccRegex.test(myString1);
console.log(result2); //true
//Extract Matches
console.log("Hello World!".match(/Hello/)); //[ 'Hello', index: 0, input: 'Hello World!', groups: undefined ]
/*Apply the .match() method to extract the word coding. */
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result3 = extractStr.match(codingRegex); 
console.log(result3);
//Find More Than the First Match - To search or extract a pattern more than once, you can use the g flag.
/* Using the regex starRegex, find and extract both "Twinkle" words from the string twinkleStar. */
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig; //can use /Twinkle/gi;
let result4 = twinkleStar.match(starRegex); 
console.log(result4); //[ 'Twinkle', 'twinkle' ]
//Match Anything with Wildcard Period - The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match "hug", "huh", "hut", and "hum", you can use the regex /hu./ to match all four words.
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
console.log(huRegex.test(humStr)); // Returns true
console.log(huRegex.test(hugStr)); // Returns true
/* Complete the regex unRegex so that it matches the strings "run", "sun", "fun", "pun", "nun", and "bun" */
let exampleStr = "Let's have fun,bun,PUn with regular expressions!";
let unRegex = /.un/; 
let result5 = unRegex.test(exampleStr);
console.log(result5);
console.log(exampleStr.match(/.un/));
console.log(exampleStr.match(/.un/g)); //[ 'fun', 'bun']
console.log(exampleStr.match(/.un/gi)); //[ 'fun', 'bun', 'PUn' ]
//Match Single Character with Multiple Possibilities- search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.For example, you want to match "bag", "big", and "bug" but not "bog". You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters "a", "i", or "u".
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let str = ' big, bag,bug,Bog';
let bgRegex = /b[aiu]g/;
console.log(bigStr.match(bgRegex)); // Returns ["big"]
console.log(bagStr.match(bgRegex)); // Returns ["bag"]
console.log(bugStr.match(bgRegex)); // Returns ["bug"]
console.log(bogStr.match(bgRegex)); // Returns null
console.log(str.match(bgRegex));  //[ 'big', index: 1, input: ' big, bag,bug,bog', groups: undefined ]
let bgRegex1 = /b[aiu]g/i;
console.log(str.match(bgRegex1)); //[ 'big', index: 1, input: ' big, bag,bug,Bog', groups: undefined ]
console.log(str.match(/b[aiu]g/g)); //[ 'big', 'bag', 'bug' ]
console.log(str.match(/b[aiu]g/gi)); //[ 'big', 'bag', 'bug' ]
console.log(' big, Bag,bug,Bog'.match(/b[aiu]g/gi)); //[ 'big', 'Bag', 'bug' ]
console.log(' big, Bag,bUg,Bog'.match(/b[aiu]g/gi)); //[ 'big', 'Bag', 'bUg' ]
/* Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample. */
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result6 = quoteSample.match(vowelRegex);
console.log(result6);
//Match Letters of the Alphabet-Inside a character set, you can define a range of characters to match using a hyphen character: -.For example, to match lowercase letters a through e you would use [a-e].
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex2 = /[a-e]at/;
console.log(catStr.match(bgRegex2)); // Returns ["cat"]
console.log(batStr.match(bgRegex2)); // Returns ["bat"]
console.log(matStr.match(bgRegex2)); // Returns null
/* Match all the letters in the string quoteSample. */
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let result7 = quoteSample1.match(alphabetRegex);
console.log(result7);
//Match Numbers and Letters of the Alphabet-Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers. For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5. Also, it is possible to combine a range of letters and numbers in a single character set.
let jennyStr = "Jenny8675309";
let myRegex1 = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
console.log(jennyStr.match(myRegex1));
/* Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex. */
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/ig; // Change this line
let result8 = quoteSample2.match(myRegex2);
console.log(result8);
//Match Single Characters Not Specified -  you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.
//To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.
//For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.
/* Create a single regex that matches all characters that are not a number or a vowel. */
let quoteSample3 = "3 blind mice.";
let myRegex3 = /[^0-9aeiou]/gi; 
let res1 = quoteSample3.match(myRegex3); 
console.log(res1);
//Match Characters that Occur One or More Times-use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.
//For example, /a+/g would find one match in "abc" and return ["a"]. Because of the +, it would also find a single match in "aabc" and return ["aa"].
/* find matches when the letter s occurs one or more times in "Mississippi". */
let difficultSpelling = "Mississippi";
let myRegex4 = /s+/gi; 
let res2 = difficultSpelling.match(myRegex4);
console.log(res2);//[ 'ss', 'ss' ]
console.log(difficultSpelling.match(/ss/gi)); //[ 'ss', 'ss' ]
console.log(difficultSpelling.match(/s/gi)); //[ 's', 's', 's', 's' ]
//Match Characters that Occur Zero or More Times-The character to do this is the asterisk or star: *.
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex)); // Returns ["goooooooo"]
console.log(gPhrase.match(goRegex)); // Returns ["g"]
console.log(oPhrase.match(goRegex)); // Returns null
let goRegex1 = /go+/
console.log(soccerWord.match(goRegex1)); // Returns ["goooooooo"]
console.log(gPhrase.match(goRegex1)); // Returns null
console.log(oPhrase.match(goRegex1)); // Returns null
/* chewieQuote has been initialized as "Aaaaaaaaaaaaaaaarrrgh!" behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase "A" character immediately followed by zero or more lowercase "a" characters in chewieQuote */
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; 
let res3 = chewieQuote.match(chewieRegex);
console.log(res3); //['Aaaaaaaaaaaaaaaa']

let string1 = "titanic was a ship";
let regEx1 = /t[a-z]*i/
console.log(string1.match(regEx1)); //[ 'titani']
console.log(string1.match(/t[a-z]+i/)); //[ 'titani']

//Find Characters with Lazy Matching-finds the smallest possible part of the string that satisfies the regex pattern.use the ? character to change it to lazy matching
console.log(string1.match(/t[a-z]*?i/)); //[ 'ti']
/* Fix the regex /<.*>/ to return the HTML 
tag <h1> and not the text "<h1>Winter is coming</h1>" */
let text = "<h1>Winter is coming</h1>";
let myRegex5 = /<h.*?>/; 
let res4 = text.match(myRegex5);
console.log(res4); //['<h1>']
//Match Beginning String Patterns
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
console.log(firstRegex.test(firstString));// Returns true
let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst));// Returns false
/* Use the caret character in a regex to find "Cal" only in the beginning of the string rickyAndCal. */
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let res5 = calRegex.test(rickyAndCal); //true
console.log(res5);
let calRegex1 = /Cal^/;
console.log(calRegex1.test(rickyAndCal)); //false
let string2 = "Ricky and Cal both like racing.";
console.log(calRegex1.test(string2));
//Match Ending String Patterns-search the end of strings using the dollar sign character $ at the end of the regex.
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
console.log(storyRegex.test(theEnding));// Returns true
let noEnding = "Sometimes a story will have to end";
console.log(storyRegex.test(noEnding));// Returns false
/* Use the anchor character ($) to match the string "caboose" at the end of the string caboose. */
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let res6 = lastRegex.test(caboose);
console.log(res6); //
//Match All Letters and Numbers-The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_). These shortcut character classes are also known as shorthand character classes.
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
console.log(longHand.test(numbers)); // Returns true
console.log(shortHand.test(numbers)); // Returns true
console.log(longHand.test(varNames)); // Returns true
console.log(shortHand.test(varNames)); // Returns true
/* Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings. */
let quoteSample11 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let res7 = quoteSample11.match(alphabetRegexV2).length;
console.log(res7);//31
let res8 = quoteSample11.match(alphabetRegexV2);
console.log(res8);
//Match Everything But Letters and Numbers-can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].
let shortHand1 = /\W/;
let numbers1 = "42%";
let sentence1 = "Coding!";
console.log(numbers1.match(shortHand1)); // Returns ["%"]
console.log(sentence1.match(shortHand1)); // Returns ["!"]
/* Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings */
let quoteSample4 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let res9 = quoteSample4.match(nonAlphabetRegex).length;
console.log(res9);
console.log(quoteSample4.match(nonAlphabetRegex));
//Match All Numbers-The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.
/* Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count. */
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let res11 = movieName.match(numRegex).length;
console.log(res11); //4
//Match All Non-Numbers-The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.
/* Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles. */
let movieName1 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let res12 = movieName1.match(noNumRegex).length;
console.log(res12);//17
//Restrict Possible Usernames
/* 1) Usernames can only use alpha-numeric characters.
2) The only numbers in the username have to be at the end. There can be zero r more of them at the end. Username cannot start with the number.
3) Username letters can be lowercase and uppecase.
4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i; // Change this line
let res13 = userCheck.test(username);
console.log(res13);
//Match Whitespace-You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v].
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
console.log(whiteSpace.match(spaceRegex));// Returns [ ' ', ' ' ]
/* Change the regex countWhiteSpace to look for multiple whitespace characters in a string.*/
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; 
let res14 = sample.match(countWhiteSpace);
console.log(res14);
//Match Non-Whitespace Characters-Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].
let whiteSpace1 = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
console.log(whiteSpace1.match(nonSpaceRegex).length); // Returns 32
console.log(whiteSpace1.match(nonSpaceRegex));
//Specify Upper and Lower Number of MatchesYou can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

//For example, to match only the letter a appearing between 3 and 5 times in the string "ah", your regex would be /a{3,5}h/.
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
console.log(multipleA.test(A4)); // Returns true
console.log(multipleA.test(A2)); // Returns false
/* Change the regex ohRegex to match the entire phrase "Oh no" only when it has 3 to 6 letter h's.*/
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; 
let res15 = ohRegex.test(ohStr); //true
console.log(res15);
//Specify Only the Lower Number of Matches-To only specify the lower number of patterns, keep the first number followed by a comma.

//For example, to match only the string "hah" with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.
let A5 = "haaaah";
let A3 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multlipleA = /ha{3,}h/;
console.log(multipleA.test(A5)); // Returns true
console.log(multipleA.test(A3)); // Returns false
console.log(multipleA.test(A100)); // Returns true
/* Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.*/
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; 
let res16 = haRegex.test(haStr);
console.log(res16); //true
//Specify Exact Number of Matches-To specify a certain number of patterns, just have that one number between the curly brackets.

//For example, to match only the word "hah" with the letter a 3 times, your regex would be /ha{3}h/.
let A6 = "haaaah";
let A7 = "haaah";let A101 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
console.log(multipleHA.test(A6)); // Returns false
console.log(multipleHA.test(A7)); // Returns true
console.log(multipleHA.test(A101)); // Returns false
/* Change the regex timRegex to match the word "Timber" only when it has four letter m's.*/
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; 
console.log(timRegex.test(timStr)); //true
//Check for All or None-You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
console.log(rainbowRegex.test(american)); // Returns true
console.log(rainbowRegex.test(british)); // Returns true
/* Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word. */
let favWord = "favorite";
let favRegex = /favou?rite/; 
console.log(favRegex.test(favWord)); //true
//Positive and Negative Lookahead
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex)); // Ret/urns ['q']
console.log(quit.match(qRegex)); // Returns null
console.log(noquit.match(quRegex));//null
console.log(noquit.match(qRegex));[ 'q']
/* simple password checker that looks for between 3 and 6 characters and at least one number */
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log(checkPass.test(password)); // Returns true
/* Use lookaheads in the pwRegex to matchswords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.8*/
let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{4,})(?=\w*\d{2})/; // Change this line
console.log(pwRegex.test(sampleWord)); //false
let sampleWord1 = "bana12";
console.log(pwRegex.test(sampleWord1));//true
let sampleWord2 = "banan1";
console.log(pwRegex.test(sampleWord2)); //false
let sampleWord3 = "abc123";
console.log(pwRegex.test(sampleWord3));//true
//Check For Mixed Grouping of Characters-use parentheses ().
let testStr = "Puhghhmpkin";
let testRegex = /P(engu|umpk)in/;
console.log(testRegex.test(testStr));// Returns true
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/i; // Change this line
let result = myRegex.test(myString); 
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);

