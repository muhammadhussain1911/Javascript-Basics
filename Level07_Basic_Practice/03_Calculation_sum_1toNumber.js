// <============Calculating Sum of number from 1 to number============>
let val = 23
let result = 0
for (let i = 0; i <= val; i++) { // Method 1
     result += i
    
}
console.log(result);

// <============Above job with different logic============>

// Much faster for large numbers!
let value = 24;
let sum = (value * (value + 1)) / 2; // Method 2
console.log(sum);