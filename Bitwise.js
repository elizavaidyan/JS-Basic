//JavaScript Uses 32 bits Bitwise Operands
//JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.

//Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.

//After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.

var x = 5;
var y = 1;
var z = x & y; //Bitwise AND
console.log(z); //1 
var orResult = x | y; //Bitwise OR
console.log(orResult); //5
var xorResult = x ^ y; //Bitwise XOR
console.log(xorResult); //4
var notResult = ~x; //Bitwise NOT
console.log(notResult); //-6
var leftShift = x << y; //Bitwise Leftshift
console.log(leftShift); //10
var rightShift = -5 >> 1; // (Sign Preserving)Bitwise Right shift
console.log(rightShift); //-3
var zerofillRshift = x >>> y; //Zero fill right shift
console.log(zerofillRshift); //2
//Converting Decimal to Binary
function dec2bin(dec){
  return (dec >>>0).toString(2);
}
var dectobin = dec2bin(-5);
console.log(dectobin); //11111111111111111111111111111011
//Convering binary to decimal
function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}
var bintodec = bin2dec(101);
console.log(bintodec); //5