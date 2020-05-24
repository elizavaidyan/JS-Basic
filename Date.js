var d = new Date(); //Creating Date object with Date()constructor; with current date and time
console.log(d); //2020-05-24T14:10:36.721Z
var d1 = new Date(2018, 10, 24, 10, 33, 30, 0); //new Date(year, month, day, hours, minutes, seconds, milliseconds)
console.log(d1); //2018-11-24T05:03:30.000Z ; js counts months from 0 to 11
var d2 = new Date(2018, 10, 24, 10, 33);
console.log(d2); //2018-11-24T05:03:00.000Z
var d3 = new Date(2018, 11);
console.log(d3); //2018-11-30T18:30:00.000Z
var d4 = new Date(2018); //cannot omit month. If you supply only one parameter it will be treated as milliseconds.
console.log(d4); // 1970-01-01T00:00:02.018Z
var d5 = new Date(99, 11, 24); //One and two digit years will be interpreted as 19xx
console.log(d5); //1999-12-23T18:30:00.000Z
var d6 = new Date(9, 11, 24);
console.log(d6); //1909-12-23T18:30:00.000Z
var d7 = new Date("October 13, 2014 11:13:00")// creating date object ; new Date(dateString)
console.log(d7); //2014-10-13T05:43:00.000Z
var d8 = new Date(0);
console.log(d8); //1970-01-01T00:00:00.000Z
var d9 = new Date(100000000000);//01 January 1970 plus 100 000 000 000 milliseconds is approximately 03 March 1973:
console.log(d9);
console.log(new Date(-100000000000));//January 01 1970 minus 100 000 000 000 milliseconds is approximately October 31 1966
console.log(d1.toString()); //Sat Nov 24 2018 10:33:30 GMT+0530 (India Standard Time)
console.log(d1.toUTCString()); //Sat, 24 Nov 2018 05:03:30 GMT
console.log(d1.toDateString()); // Sat Nov 24 2018
console.log(new Date("2015-03-25").toString());//Wed Mar 25 2015 05:30:00 GMT+0530 (India Standard Time; ISO Date(year,month and date)
console.log(new Date("2015-03").toString()); //ISO Date(only year and month); Sun Mar 01 2015 05:30:00 GMT+0530 (India Standard Time)
console.log(new Date("2015").toString()); //Thu Jan 01 2015 05:30:00 GMT+0530 (India Standard Time)
console.log(new Date("2015-03-25T12:00:00Z").toString()); // ISO Dates (Date-Time);(YYYY-MM-DDTHH:MM:SSZ); Wed Mar 25 2015 17:30:00 GMT+0530 (India Standard Time)
console.log(new Date("2015-03-24T11:00:00").toString()); //to modify relate to UTC; remove Z; Tue Mar 24 2015 11:00:00 GMT+0530 (India Standard Time)
console.log(new Date("03/25/2015").toString()); //Wed Mar 25 2015 00:00:00 GMT+0530 (India Standard Time)
console.log(new Date("Mar 25 2015")); //2015-03-24T18:30:00.000Z
console.log(new Date("25 Mar 2015")); //2015-03-24T18:30:00.000Z
console.log(new Date("March 25 2015").toString()); //Wed Mar 25 2015 00:00:00 GMT+0530 (India Standard Time)
console.log(new Date("JANUARY 20 2015").toString()); //Commas are ignored. Names are case insensitive; Tue Jan 20 2015 00:00:00 GMT+0530 (India Standard Time)
console.log(Date.parse("Mar 21 2020"));//Date.parse() method to convert it to milliseconds,  returns the number of milliseconds between the date and January 1, 1970, result is 1584729000000
var msec = Date.parse("Mar 21 2020");
var date1 = new Date(msec);
console.log(date1);