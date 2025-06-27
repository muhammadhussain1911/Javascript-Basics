// <============Making Math Tables============>

for (let table = 1; table <= 20; table++) {
    console.log(`Table of ${table}`);
    
    for (let times = 1; times <= 10; times++) {
        console.log(`${table} x ${times} = ${table * times}`);
        
        
    }
    console.log("");
}

function counting() {
    console.log("Counting from 1 to 100");
    console.log("Counting start");
    
    for (let index = 1; index <= 100; index++) {
        console.log(`${index}`);
    }
    console.log("Counting Ended");
    
}

counting()
const myArr = ['Hussain', 'hasan', 'hasnain']
for (let index = 0; index < myArr.length; index) {
    console.log(`${index+1}`);
}

// <============Break & Continue============>

for (let index = 1; index <= 21; index++) {
    if (index == 11) {
        console.log(`Now value is ${index}`);
        console.log(`Detected ${index}`);
        
        break;
    }
    console.log(`Current value is ${index}`);
}

for (let index = 1; index <= 21; index++) {
    if (index == 11) {
        console.log(`Now value is ${index}`);
        console.log(`Detected ${index}`);
        continue; // Skips below part. continue statement skips the rest of the loop body for the current iteration and jumps directly to the next iteration of the loop.
    }
    console.log(`Current value is ${index}`);
}

function multipleOfNumber(number) {
    let str = "";
    for (let index = 1; index <= 50; index++) {
        str += `${number * index} `; // ← Append instead of replace
    }
    console.log(str.trim().split(" ").map((n)=>parseInt(n))); // converting each string into number and printing array.
}
multipleOfNumber(2);

function multipleOfNumber1(number) {
    let arr = []; // using direct array
    for (let index = 1; index <= 50; index++) {
        return arr.push(index * number)
    }
    console.log(arr); 
}
multipleOfNumber(3);