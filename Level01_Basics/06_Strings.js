const myName = new String("Muhammad Hussain");

// <============Connect with html to view String Methods on screen============>

document.writeln(myName);
document.writeln(`<hr>`);
document.writeln(myName.toUpperCase()); // Convert string to upper case
document.writeln(`<hr>`);
document.writeln(myName.toLowerCase()); // Convert string to lower case
document.writeln(`<hr>`);
document.writeln(myName.length); // Return length of string myName
document.writeln(`<hr>`);
document.writeln(myName[3]); // Return 4th character of string myName
document.writeln(`<hr>`);
document.writeln(myName.indexOf("H")); // Return index of character H
document.writeln(`<hr>`);
document.writeln(myName.charAt(2)); // Return character in string at index 2
document.writeln(`<hr>`);
document.writeln(myName.indexOf("u")); // Return index of character u
document.writeln(`<hr>`);
document.writeln(myName.split(""));
document.writeln(`<hr>`);
document.writeln(myName.split(" "));
const myFunction = function () {
  return myName.indexOf("u");
};
console.log(myFunction());

// <================================>

console.log(myName.__proto__); // old way and not recommended
console.log(Object.getPrototypeOf(myName)); // modern way
console.log(myName);
console.log("Type of myName is:", typeof myName);

console.log(myName.valueOf()); // The valueOf() method of String values returns this string value. Called on string object not on simple string.

// <============String Methods============>

const myFullName = "Muhammad Hussain"

console.log(myFullName.length);
console.log(myFullName.at(0)); // Returns character at index
console.log(myFullName.charAt(7)); // Same as at. Returns character at index
console.log(myFullName.charCodeAt(4)); // Returns Unicode of character
console.log(myFullName.codePointAt(4)); // Unicode code point (UTF-16)
console.log(myFullName.includes("Hus")); // Checks if exists
console.log(myFullName.indexOf("a")); // First position
console.log(myFullName.lastIndexOf("a")); // Last position
console.log(myFullName.startsWith("Muhammad")); // Beginning match
console.log(myFullName.endsWith("ain")); // Ending match
console.log(myFullName.search(/H/)); // Searches using regex
console.log(myFullName.match(/n/g)); // Returns matches
console.log([...myFullName.matchAll(/a/g)]); // Returns all matches (iterator)
console.log(myFullName.toUpperCase()); // All uppercase
console.log(myFullName.toLowerCase()); // All lowercase
console.log(myFullName.toLocaleUpperCase()); // Locale-aware uppercase
console.log(myFullName.toLocaleLowerCase()); // Locale-aware lowercase
console.log(myFullName.normalize()); // Unicode normalization
console.log(myFullName.trim()); // To return a new string with whitespace trimmed from both ends
console.log(myFullName.trimStart()); // To return a new string with whitespace trimmed from start
console.log(myFullName.trimEnd()); // To return a new string with whitespace trimmed from end
console.log(myFullName.slice(0,8)); // Extract portion // slice(start, end)
console.log(myFullName.substring(9,16)); // Similar to slice (no negative index) // substring(start, end)
console.log(myFullName.substr(9, 7)); // Deprecated, slice alternative // substr(start, length)
console.log(myFullName.replace("a", "@")); // Replaces first match // replace("old", "new")
console.log(myFullName.replaceAll("a", "@")); // Replaces all matches // replaceAll("old", "new")
console.log(myFullName.repeat(3)); // Repeats string // repeat(n)
console.log(myFullName.padEnd(18, "-")); // padEnd(length, str) // Pad from end
console.log(myFullName.padStart(19, "-")); // padStart(length, str)	// Pad from start
console.log(myFullName.concat(" is an App Developer.")); // 
console.log(myFullName.split(" ")); // 


// <============A small logic test============>
console.log(((myFullName.replaceAll(" ", "") + " ").repeat(3)).trimEnd()); // removing space first from myFullName, then add space after end of each string, then remove space at last of whole repeated string.

console.log(
  Array(3).fill(myFullName.replaceAll(" ", "")).join(" ") // more readable and better way to do above task
);

// <============Reversing a String============>

const nameToReversed = "Hussain"
const reversedName = nameToReversed.split("").reverse().join("");
console.log(reversedName);
