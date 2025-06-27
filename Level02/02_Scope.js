function one() {
    const userName = "Hussain"
    function two() {
        const firstName = "Muhammad"
        console.log(userName);
        
    }
    // console.log(firstName); // ReferenceError: firstName is not defined. Can't accessed outside function scope.
    two()
}
one()

// <============See Difference============>
console.log(completeName("Hussain"));
function completeName(givenName) { // Function can be execute before initializing function body.
    return `Muhammad ${givenName}`
}


console.log(obtainMarks(marks));
const obtainMarks = function (marks) { // Cannot access 'obtainMarks' before initialization
    return `You got ${marks} marks.`
}
