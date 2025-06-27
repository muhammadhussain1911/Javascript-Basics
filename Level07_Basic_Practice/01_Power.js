// <============Calculating Square and cube of a number============>

function square(number) { // Method 1
    console.log(number * number);
}
square(5);

function square1(number) { // Method 2
    console.log(Math.pow(number, 2))
}
square1(6)

// <============Calculating a number raised to the power of itself.============>

function numToNumTimes(number) { // Method 1
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= number; // multiply number by itself each time
    }
    return result;
}
console.log(numToNumTimes(3));

function numToNumTimes1(number) { // Method 2
    return Math.pow(number, number);
}
console.log(numToNumTimes1(4));

function numToNumTimes2(number) { // Method 3
    return number ** number;
}
console.log(numToNumTimes2(5)); 

// <============Simple project for filtering============>
// <============Simple project for filtering============>
// <============Simple project for filtering============>
// <============Simple project for filtering============>
// <============Simple project for filtering============>
// <============Simple project for filtering============>
// <============Simple project for filtering============>
// <============Simple project for filtering============>
// <============Simple project for filtering============>
// <============Simple project for filtering============>
// <============Simple project for filtering============>