// <============For of Loop on Arrays============>


const array = [1,2,3,4,5,6]

for (const length of array) {
    console.log(length); // print values of array
}

for (const [index, number] of array.entries()) {
    console.log(`Index: ${index} Number: ${number}`); // printing index values using for loop.
}


// <============For Of Loop on Map Object============>

const mapObj = new Map() // Map() object is iterable

mapObj.set("name", "Hussain")
mapObj.set("name", "Hussain") // this will overwrite first key as map store only unique keys.
mapObj.set({key: "value"}, "Object") // can take object as key
mapObj.set("class", "FA")
// console.log(mapObj);

// for of loop works on Map object.
for (const entry of mapObj) {
    console.log(entry); // print each key-value pair in a single array.
}

for (const [key, value] of mapObj) { // syntax for printing key values without array. destructure of array.
    console.log(`${key} ${value}`);
}

// <============For Of Loop on Simple Object============>

const simpleObj = {
    name: "Muhammad Hussain",
    nameOfFather: "Shahzad Ahmad"
}

for(const entry of simpleObj) { // for of loop don't work on plain object. for in loop does.
    console.log(entry); // TypeError: simpleObj is not iterable at Object.
    
}

// <============For Of Loop on String============>

const str = "Muhammad Hussain"

for(const char of str) {
    if (char === " ") { // When loop reach on space in string...
        continue; // ... continue dismiss the code execution for current iteration and jump to next iterations of loop
    }
    console.log(`Current character is ${char}`);
}