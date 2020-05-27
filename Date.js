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
var date2 = new Date();
console.log(date2.getTime());// getTime() method returns the number of milliseconds since January 1, 1970; result is 1590583363711
console.log(date2.getFullYear());//getFullYear() method returns the year of a date as a four digit number; Result is 2020
console.log(date2.getMonth()); //getMonth() method returns the month of a date as a number (0-11). Result is 4
var months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
console.log(months[date2.getMonth()]); //May
console.log(date2.getDate());//getDate() method returns the day of a date as a number (1-31)
console.log(date2.getHours());//getHours() method returns the hours of a date as a number (0-23)
console.log(date2.getMinutes());//getMinutes() method returns the minutes of a date as a number (0-59)
console.log(date2.getSeconds());//getSeconds() method returns the seconds of a date as a number (0-59)
console.log(date2.getMilliseconds());//getMilliseconds() method returns the milliseconds of a date as a number (0-999)
console.log(date2.getDay());//getDay() method returns the weekday of a date as a number (0-6)
var days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
console.log(days[date2.getDay()]); 
var date3 = new Date();
date3.setFullYear(2020); //setFullYear() method sets the year of a date object
//console.log(date3.setFullYear(2020)); returns milliseconds
//date3.toString();
console.log(date3); //2020-05-27T13:52:51.608Z
date3.setFullYear(2020, 11, 3);//setFullYear() method can optionally set month and day
console.log(date3); //2020-12-03T13:52:51.608Z
date3.setMonth(3); //setMonth() method sets the month of a date object (0-11)
console.log(date3); //2020-04-03T13:52:51.608Z
date3.setDate(15); //setDate() method sets the day of a date object (1-31)
console.log(date3); //2020-04-15T13:55:19.354Z
date3.setDate(date3.getDate() + 50); //setDate() method can also be used to add days to a date
console.log(date3);
date3.setHours(30);//setHours() method sets the hours of a date object (0-23)
console.log(date3);
date3.setMinutes(30);//setMinutes() method sets the minutes of a date object (0-59)
console.log(date3);
date3.setSeconds(30);
console.log(date3);
//Compare Dates
var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);//January is 0
if (someday > today)
{
  text = "Today is before January 14, 2100";

} else {
  text = "Today is after January 14, 2100";
}
console.log(text);




