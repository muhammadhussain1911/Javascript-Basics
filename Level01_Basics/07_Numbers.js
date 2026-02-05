const myNumber = new Number(12)
console.log(myNumber)
console.log(typeof myNumber)
console.log(myNumber.valueOf());


const number = 12345
// <============Number Methods============>
console.log(number.toExponential()); // Converts the number to exponential (scientific) notation as a string.
console.log(number.toExponential(2)); // You can also pass digits to define precision.
console.log(number.toFixed(2)); // Formats the number using fixed-point notation (decimal places).
console.log(number.toString());


const num = 1200000;
console.log(num.toLocaleString("en-US")); // Formats the number according to local language rules (e.g., currency, commas). // "1,200,000"
console.log(num.toLocaleString("de-DE")); // "1.200.000"
console.log(num.toLocaleString("en-US", { style: "currency", currency: "USD" })); // Using it with options // "$1,200,000.00"

const num1 = 12.345;
console.log(num1.toPrecision(2)); // Returns a string with a specified total number of digits. // "12"
console.log(num1.toPrecision(4)); // "12.35"

const dummyNum = 1125.567
console.log(dummyNum.toPrecision(3));

// <============Connect with HTML file to view result on screen============>
let myNumber1 = 1000000;

document.writeln(myNumber1);
document.writeln(`<hr>`);
document.writeln(myNumber1.toString()); // Convert number to string
document.writeln(`<hr>`);
document.writeln(myNumber1.toExponential()); // Convert number to exponential
document.writeln(`<hr>`);
document.writeln(myNumber1.toFixed(2)); // Fixed number to 2 after decimal point, and return fixed number.
document.writeln(`<hr>`);
document.writeln(myNumber1.toLocaleString("en-IN"));
document.writeln(`<hr>`);
document.writeln(myNumber1.toLocaleString("ar-DJ"));

const myFunction = function () {
  return myNumber1.toFixed(2);
};
console.log(myFunction());


// By writing Number in console of browser, we can access many methods of numbers.
