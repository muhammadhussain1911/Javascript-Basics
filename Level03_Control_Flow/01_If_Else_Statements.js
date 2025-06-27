const  age = 22
if (age > 18) {
    const eligibility = "eligible for vote" // Don't use var otherwise it will have global scope and can be accessed outside if condition scope.
    console.log(`Person is ${eligibility}`);
} else {
    console.log(`Person is not ${eligibility}`);
}

console.log(`Person is ${eligibility}`); // only executed when using var

const score = 101
if (score > 100) console.log("Player made century.");
; // shorthand notation. This is called implicit scope, because no {} used. This executes only in one line, and for more lines use comma after every executable code line.

const DA = 99
if (DA > 80) console.log("Website has good SEO.") , console.log("Website eligible for guest posting."),
console.log("Website is ranking."); // But this syntax is not readable and highly not recommended. 

const marks = 98

if (marks > 90) {
    console.log("A+");  
} else if (marks > 80) {
    console.log("B+");
} else if (marks > 70) {
    console.log("C+");
} else if (marks > 60) {
    console.log("D");
} else {
    console.log("Need to hard work.");
}

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