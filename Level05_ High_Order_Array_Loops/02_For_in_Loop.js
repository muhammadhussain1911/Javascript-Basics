// <============For in Loop on Plain Object============>

const myObj = {
    name: "Muhammad Hussain",
    nameOfFather: "Shahzad Ahmad"
}

for (const key in myObj) {
    console.log(key); // print keys of object
    
}

for (const key in myObj) {
    console.log(key, myObj[key]); // printing key-value of object
    
}



// <============For in Loop on Map Object============>

const mapObj = new Map() // Map() object is iterable

mapObj.set("name", "Hussain")
mapObj.set("name", "Hussain") // this will overwrite first key as map store only unique keys.
mapObj.set({key: "value"}, "Object") // can take object as key
mapObj.set("class", "FA")
console.log(mapObj);

for (const key in mapObj) {
    console.log(key); // nothig will print. Because Map’s key-value pairs are not enumerable properties — they are stored internally, not as standard object keys.
    
}

// <============For in Loop on Array============>

const nums = [11, 12, 13, 14]

for (const number in nums) {
    console.log(number); // print index of array.
        
}
for (const number in nums) {
    console.log(number, nums[number]); // print index and value of array.
        
}