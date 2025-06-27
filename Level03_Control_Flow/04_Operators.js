// <============Logical Operator============>

const registration = true
const visaCard = true
const balance = true
const appInstalled = false
const onlineWebsite = true

if (registration && visaCard && balance) {
    console.log("Eligible for shopping.");
}

if (registration && appInstalled || onlineWebsite ) {
    console.log("Can add to cart his favourite products.");
    
}

// <============Ternary Operator============>


const overs = 50
 overs > 50 ? console.log("Test match") : console.log("One-Day match");
 
// <============Nullish Coalescing Operator(??)============>

let value;
// value = null ?? 34
// value = undefined ?? null ?? 21
value = undefined ?? 92 ?? 21 // only checks for null and undefined, and executes first relevant value.

console.log(`Value: ${value}`);

// <============Comparison Operator(<, >, <=, >=, ==, ===)============>

const grades = 70

if (grades > 90 && grades <= 100) {
    console.log("A+");
} else if (grades >= 80) {
    console.log("A");
} else if (grades < 80 && grades > 70) {
    console.log("B+");
} else if(grades <= 70 && grades > 60) {
    console.log("B");
} else if (grades <= 60 && grades > 45 ) {
    console.log("D");
} else {
    console.log("Fail");
}

const number = 4
if (number == "4") {
    console.log("Only number is same");
}

const number1 = 5
if (number1 === 5) {
    console.log("Both number and datatype are same.");
    
}