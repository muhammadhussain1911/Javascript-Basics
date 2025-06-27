const myArray = [0,1,2,3,4,5]
console.log(myArray);
console.log(typeof myArray);

// // <============Array Methods============>
for (let [index, value] of myArray.entries()) {
  console.log(index, value);
}
console.log(myArray.every(n => n>0)); // false // Checks if all elements satisfy a condition.
console.log(myArray.find(n => n>2)); // find method returns the first match.
console.log(myArray.findIndex(n => n>2)); // findIndex method returns the index of first match.
console.log(myArray.filter(n => n % 2 === 0)); // filter method returns new array with elements that match condition.
console.log(myArray.findLast(n => n < 5)); // findLast return the last match the condition
console.log(myArray.findLastIndex(n => n < 5)); // Index of last match.
console.log(myArray.includes(4)); // true
console.log(myArray.indexOf(3)); // First index of a value.
console.log(myArray.join("-")); // Converts to string and join them.
for (let i of myArray.keys()) // Returns iterator of indices.
    console.log(i);
console.log([1, 2, 3, 2].lastIndexOf(2)); // Last index of a value.
console.log(myArray.map(n => n * 10)); // Returns new array after transforming each value.
console.log(myArray.reduce((a, b)=> a+b, 4)); // Reduces array to a single value.
console.log(myArray.some(n => n > 5)); // false // Checks if any element matches.
console.log(myArray.sort((a, b) => b - a)); // b-a => sort array in decending, a-b => sort array in ac
console.log(myArray.sort()); // b-a => sort array in decending. a-b => sort array in accending. By default, sorts as strings.
console.log(myArray.toReversed()); // Returns a reversed copy. Immutable
console.log(myArray.toSorted()); // returns a sorted copy
console.log(myArray.toSpliced(2,1)); // removes index 2 without modifying original. Immutable version of splice.
for (let val of myArray.values())  // Iterator for values.
    console.log(val);
console.log(myArray.with(2, 99)); // replaces 3rd element. Replaces element at index. Immutable 
console.log(myArray.flatMap((num) => num > 1 ? [num, num] : num)); // flatMap(callback) applies the callback to each element, then flattens (by level 1) the output array if the result is an array

console.log(Math.max(...myArray)); // return largest number in array. triple dots is a spread method. It spreads array into pieces.

console.log(myArray)

const nestedArray = [1,2,[3,4, [5, 6, [7, 8]]]] // The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log("Nested Array", nestedArray[2][2][2][1]); // Accessing the 2nd element (index 1) of the innermost nested array

const flatedArray = nestedArray.flat(2);
console.log(flatedArray);
console.log(Array.from("Hussain")); // convert string into array.
console.log(Array.isArray("Hussain")); // return boolean based on if given data is array or not.

myArray.push(6,7); // Add elements at last
console.log("After push: ", myArray);
myArray.pop(); // Remove one element from last
console.log("After pop: ", myArray);
myArray.unshift(-1) // Add elements at start
console.log("After unshift: ", myArray);
myArray.shift() // Removes one element from start
console.log("After shift", myArray);
myArray.at(3) // 4
myArray.at(-3) // 3 // if negative value then add value from length to find required index. => 6-3 = 3 => index(3), or add actual negative number in length like: => 6+(-3) => 6-3 = 3 => index(3)
myArray.concat([6,7,8])
myArray.copyWithin(1,3,4)
console.log(myArray);


 const immutableArray = myArray.slice(0, 3) // Slice method extract the portion you defined without modifing original array.
console.log("immutableArray", immutableArray);
console.log("A", myArray);


const modifiedArray = myArray.splice(0, 3) // Splice method modifies an array by adding, removing, or replacing elements. Changes the original array directly.
console.log("modifiedArray", modifiedArray);
console.log("B", myArray);

console.log(myArray.fill(5, 0, 3));

const arr2 = new Array(3);
console.log(arr2);


// <============Understanding an Array concept============>

const testArray = [10, 20, 30];

testArray["name"] = "Hussain";  // Setting a string property, but not behave like valid array element. JavaScript will not treat them as array elements, but as object properties.
testArray["1"] = 200;           // This will update index 1 (converted to number)
testArray[true] = "yes";        // Converted to string "true" → not a numeric index

console.log("Finding acive indexes", Object.keys(testArray)); // Finding acive indexes [ '0', '1', '2', 'name', 'true' ]

console.log(testArray);         // [10, 200, 30, name: "Hussain", true: "yes"]
console.log(testArray.length);  // 3 — "name" and "true" not counted

console.log(testArray[1]);      // 200 — valid array element
console.log(testArray["name"]); // Hussain — object property

// Traversal: Only indexes 0,1,2 are accessed
testArray.forEach((item, i) => {
  console.log(`Index ${i} = ${item}`); // .length, .forEach(), .map(), etc., They only affect the actual numeric indexes, not the custom string properties.
});

// Output:
// Index 0 = 10
// Index 1 = 200
// Index 2 = 30

// <============Make an Array from different variables============>

const val1 = 200
const val2 = 400
const val3 = 600

console.log(Array.of(val1, val2, val3));


// <============Relationship between length and numerical properties============>

const alphabetsArray = ['a', 'b', 'c', 'd']
alphabetsArray[6] = 'e'
console.log(alphabetsArray.length)
console.log(alphabetsArray[3])
console.log(Object.keys(alphabetsArray)); // For seeing indexes having vaild array elements
console.log(alphabetsArray);
alphabetsArray.length = 10 // length set to 10, so JS engine will add empty slots without creating any new elements and extends array length.
console.log("Increased length: ", alphabetsArray); // Increased length:  [ 'a', 'b', 'c', 'd', <2 empty items>, 'e', <3 empty items> ]
console.log(alphabetsArray[8]) // undefined as no element is present at index 8
alphabetsArray.length = 5
console.log(alphabetsArray);
console.log(Object.keys(alphabetsArray));
console.log(alphabetsArray.reverse()); //  it will change in original array unlike toReversed() method as it returns a reversed copy

alphabetsArray.forEach((value, index)=> {
    console.log(`${index} : ${value}`);
})

// <============join multiple arrays using an array method============>

const arr1 = [1,2,3,4]
const arr4 = [5,6,7,8,9]
const arr3 = [9,10,11,12]
console.log(arr1.concat(arr4, arr3)); // Method 1 for joining multiple arrays .concat() joins arrays without changing the original ones.
const result = [...arr1, ...arr4, ...arr3]; // Method 2 for joining multiple arrays. The spread operator is modern, more flexible, and cleaner. It's the preferred way in modern JavaScript development.
console.log(arr1);
console.log(result);

// <============include an array inside another array (nesting)============>
console.log(arr1.push(arr4));

arr1.push(arr4.push(arr3)); // arr4.push(arr3) return new length and that length will be pushed in arr1.
console.log(arr1);

