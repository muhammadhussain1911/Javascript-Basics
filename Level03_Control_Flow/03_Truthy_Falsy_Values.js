const email = "hussain@gmail.ai"
// const email = "hussain"
// const email = []

if (email) { // in this case we assume email is true. We are not checking wether email is correct or not. We are only checking if an email has some value assuming that the value will be true. This is truthy and falsy situation. 
    console.log("User registered");
    
} else {
    console.log("User not registered.");
}

//Falsy values: false, 0, -0, "", 0n, null, undefined, NaN

// Truthy values: All values except falsy values are truthy values. Example: "0", "-0", "false", [], {}, function() {}

// <============Checking if array is empty============>

const checkArray = []
if (checkArray.length === 0) {
    console.log("Array is Empty");
}

// <============Checking if object is empty============>

const checkObject = {}
if (Object.keys(checkObject).length === 0) {
    console.log("Object is Empty.");
}

// <============Some Comparisons============>

// (false == 0) => true
// (false == "") => true
// (0 == "") => true