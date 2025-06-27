//<============Conversion to number============>
const age = "22"
console.log(age) // 22
console.log(typeof age); // string
const actualAge = Number(age) // convert "22" to 22
console.log(actualAge) // 22
console.log(typeof actualAge); // number


const numStr = "22abc"
console.log(numStr); // 22abc
console.log(typeof numStr); // string
const convertedNumStr = Number(numStr) // if not possible to convert in number, it converts to NaN(not a number).
console.log(convertedNumStr) // NaN
console.log(typeof convertedNumStr); // number


const a = null
console.log(a) // null
console.log(typeof a); // object
const numA = Number(a) // convert null to 0
console.log(numA); // 0
console.log(typeof numA); // number


const b = undefined
console.log(b) // undefined
console.log(typeof b); // undefined
const numB = Number(b) // convert undefined to NaN(not a number)
console.log(numB); // NaN
console.log(typeof numB); // number

const c = true
console.log(c) // true
console.log(typeof c); // boolean
const numC = Number(c) // convert true to 1
console.log(numC); // 1
console.log(typeof numC); // number

const d = false
console.log(d) // false
console.log(typeof d); // boolean
const numD = Number(d) // convert false to 0
console.log(numD); // 0
console.log(typeof numD); // number

// We have noticed following conversions:
// "22" => 22
// "22abc" => NaN
// null => 0
// undefined => NaN
// true => 1 , false => 0

// <============Conversion to String===========>

const num = 23
console.log(num); // 23
console.log(typeof num); // number
const convertedNum = String(num) // convert 23 to "23"
console.log(convertedNum); // "23"
console.log(typeof convertedNum); // string

// We have noticed following conversion:
// 23 => "23"
// Hussain => const num = Hussain
        //  ^
//ReferenceError: Hussain is not defined, Hussain cannot be assigned as a number to variable.
// null => "null"
// undefined => "undefined"
// true => "true"
// false => "false"


// <============Conversion to Boolean===========>

const bool = 1
console.log(bool); // 1
console.log(typeof bool); // number
const convertedBool = Boolean(bool) // convert 1 to true
console.log(convertedBool); // true
console.log(typeof convertedBool); // boolean

// We have noticed following conversions:
// 1 => true
// "22abc" => true
// null => false
// undefined => false
// true => true , false => false

// Oftenly browser gives us data in string form, then we have to convert it into number or boolean.

// Following way of writing code is highly not recomended. 
// console.log("1" + 2);
// console.log("1" + "2");
// console.log(5 + "9");
// console.log(1 + 2 + "3");

let x = 2
console.log(++x);
console.log("true" > 0)