var num1 = 10;
var num2 = 20;
var total = num1 + num2;
console.log(total);
var n1 = "10";
var n2 = "20";
var sum = n1 + n2;
console.log(sum); //string concatenation
var total1 = num1 + n1; //string and number addition - result is a string
console.log(total1);
console.log(n2 + num2); //returns a string - string concatenation
var num3 = "50";
var result = "The result =" + num1 + num2; //string concatenation
console.log(result);
var result1 = num2 + num1 + "100"; //adds num1 & num2 and concatenates with 100, returns 30100
console.log(result1);
console.log(n2/n1); //converts strings to nos and divide ie, 20/10
console.log(n1*n2);
console.log(100/"Apple"); //returns NAN..Not A Number
console.log(isNaN(num1)); //To find out num1 is a number
var num3 = NaN;
console.log(num1+num3); //Result is NaN ;num1=10
console.log(num3+n1); //n1="10"..string concatenation
console.log(typeof NaN); //NaN is a number
console.log(2/0); //Returns infinity
console.log(-2/0); //Returns -infinity
console.log(typeof Infinity); //Infinity is a number
var num4 = new Number(10); //Object.Don't create number objs which slow down execution speed
console.log(n1==num4); //n1=10
var num5 = new Number(500);
console.log(num4==num5); //objs cannot be compared So returns false
console.log(n1.toString()); //toString() method returns a string; n1=10
console.log((200).toString()); //200
console.log((100+23).toString()); //Result is 123
console.log(9.56.toExponential(2)); //toExponential() method
//console.log(10.toExponential(2)); shows error
var num6 = 2.9656;
console.log(num6.toFixed()); // toFixed() method ;Retuns 3
console.log(num6.toFixed(0)); //Retuns 3
console.log(num6.toFixed(2)); //Returns 2.97
console.log(num6.toPrecision()); // toPrecision()method;num specified length;Returns 2.9656
console.log(num6.toPrecision(2)); //Returns 3.0
console.log(2.56.toPrecision(2));//Retuns 2.6
console.log(2.56.toPrecision(4));//Retuns 2.560; length is 4
console.log((123).valueOf()); //valueOf() ; returns a num as a num
console.log(Number(true)); //Number(); converts vars to nums
console.log(Number("123")); //Retuns 123
console.log(Number("  10  ")); //Retuns 10
console.log(Number("10,33")); //Retuns NaN
console.log(Number(10)); //Returns 10
console.log(Number("John")); //Returns NaN
console.log(Number(new Date("2017-09-30")));//Date to num; returns millisecs since 1.1.1970
console.log(parseInt(10)); //parseInt()method; Returns whole num
console.log(parseInt("10.33")); //Returns 10
console.log(parseInt("10 20 30")); //Returns the first num
console.log(parseInt("10 years")); //Returns 10
console.log(parseInt("years 10")); //Returns NaN
console.log(parseFloat(10)); //parseFloat() methos; returns a num; 10
console.log(parseFloat(10.33));// returns 10.33
//Num properties can be used with wrapper Number
console.log(Number.MAX_VALUE); //MAX_VALUE property; max value in js
console.log(Number.MIN_VALUE); //MIN_VALUE
console.log(Number.POSITIVE_INFINITY); //POSITIVE_INFINITY
console.log(Number.NEGATIVE_INFINITY); // NEGATIVE_INFINITY
console.log(Number.NaN); //NaN
console.log(n1.MAX_VALUE); //cannot be used with vars; returns undefined



