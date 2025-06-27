// <============Primitive Datatypes============>

// String, Number, Boolean, BigInt, Null, Undefined, Symbol

const myName = "Muhammad Hussain"
const myAge = 22
const isAppDeveloper = true
const ageInNanoSecond = 720489600n
const PHD_Degree = null
let personalStatus;
const youtubeChannel = Symbol('Hussain The Coder')


// <============Non-Primitive Datatypes============>

// Array, Object, Function

const study = ["Matric", "FA", "Darse Nizami"]
const completionYear = {"Matric" : 2018, "FA": 2021, "Darse Nizami": 2026}
function printCompletionYear() {
    console.log(completionYear);
}
printCompletionYear()



// 1. Stored in Memory Directly vs By Reference
let obj1 = { name: "Ali" };
let obj2 = obj1;           // obj2 points to the same object
obj1.name = "Hussain";     
console.log(obj2.name);    // Output: "Hussain" (same memory reference)
console.log(obj2);

let a = 5;       // a stores the value 5 directly
let b = a;       // b also gets a copy of value 5
a = 10;          // change 'a' won't affect 'b'
console.log(b);  // Output: 5
console.log(a);  // Output: 10

// 2. Mutable vs Immutable


let str = "Hello";      // Immutable
str[0] = "Y";          // This won’t change the string
console.log(str);      // Output: "Hello"

let arr = [1, 2, 3];    // Mutable
arr[0] = 99;            // ✅ Modifies the array
console.log(arr);       // Output: [99, 2, 3]
