const today = new Date()
console.log(today)
console.log(typeof today);

// <============Date Formats============>

console.log(today.toString()); // Returns a human-readable string of the full date and time. // Fri Jun 13 2025 08:25:08 GMT+0500 (Pakistan Standard Time)
console.log(today.toTimeString()); // Returns only the time portion. // 08:32:33 GMT+0500 (Pakistan Standard Time)
console.log(today.toDateString()); // Fri Jun 13 2025
console.log(today.toISOString()); // Returns a string in ISO 8601 format (used in APIs and databases). 
console.log(today.toLocaleString()); // Returns only the date portion, without time. // 6/13/2025, 8:25:08 AM
console.log(today.toLocaleTimeString()); // Localized only time. // 9:55:29 AM
console.log(today.toLocaleDateString()); // Localized only date. // 6/13/2025
console.log(today.toJSON()); // Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization. // 2025-06-13T04:29:28.854Z

// <============Get Specific Parts of Date============>

// Only format defined in comment. Your result may be different based on current time.
console.log(today.getFullYear()); // 2025
console.log(today.getMonth()); // 5
console.log(today.getDate()); // 13
console.log(today.getTime()); // 1749787207192
console.log(today.getDay()); // 5
console.log(today.getHours()); // 9
console.log(today.getMinutes()); // 0
console.log(today.getSeconds()); // 7
console.log(today.getMilliseconds()); // 192
console.log(today.getTimezoneOffset()); // -300
console.log(today.getUTCDate()); // 13
console.log(today.getUTCMonth()); // 5
console.log(today.getUTCFullYear()); // 2025
console.log(today.getUTCHours()); // 4
console.log(today.getUTCMinutes()); // 0
console.log(today.getUTCSeconds()); // 7

// <============Manually Date Creation============>
const dateCreated = new Date(2022, 4, 31, 14, 11, 45) // Due to array month from 0 count.
console.log(dateCreated.toLocaleString());

const dateCreated1 = new Date("2023-01-12") // As in string format, month starts from 1 count. // yyyy-mm-dd format
console.log(dateCreated1.toLocaleString());

const dateCreated2 = new Date("01-12-2023") // As in string format, month starts from 1 count. // mm-dd-yyyy format
console.log(dateCreated2.toLocaleString());

// <============Finding exact time moment for a function execution============>

const exactTime = Date.now(); // As a return type is number, we cannot call date methods on it.
// console.log(exactTime.getTime()); // Wrong way. TypeError: exactTime.getTime is not a function
console.log(exactTime); // return present exact time in miliseconds


const exactTime1 = new Date(); // As a return type is object, we can call all date methods on it.
console.log(exactTime1.getTime());

// <============More customization for your time============>

console.log(today.toLocaleString('default', {
    dateStyle: "full" // Press `Ctrl + Space` to explore all options.
}));

