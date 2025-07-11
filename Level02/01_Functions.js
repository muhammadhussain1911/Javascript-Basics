function addNums(num1, num2) {
    return num1 + num2
}

console.log(addNums(4,6))

function login(username) {
    return `Congratulation ${username}! You have successfully logged in.`
}

console.log(login()); // If you will not pass any argument, then undefined will print.

function signin(username) {
    if (username === undefined) { // you can also write !username instead of username === undefined
        console.log("Please enter your name");
        return
    }
    return `Congratulation ${username}! You have successfully signed in.`
}

console.log(signin());

function fillForm(username = "Muhammad Hussain") { // If you will not pass any argument, then Muhammad Hussain will printed as default value.
    return `${username}! You have successfully filled form.`
}

console.log(login());

function addCartProducts(...price) { // rest operator will combine all values in a single array
    return price
}

console.log(addCartProducts(200, 300, 400, 500));

function addCartProducts1(val1, val2, ...price) { // values passed as argument will stored inside passed parameters and rest of all values will be combined inside a single array by rest operator
    return price
}

console.log(addCartProducts1(900, 700, 800, 600));

const newUser = {
    userName: "Muhammad Hussain",
    isLoggedIn: "not",
}

function checkLoginStatus(passingObject) { // passing object as parameter.
    return `${passingObject.userName} is ${passingObject.isLoggedIn} logged in.`
}
console.log(checkLoginStatus(newUser));
console.log(checkLoginStatus({ // We can directly pass object inside parameter rather than variable name that is storig object.
    userName: "Muhammad Hussain",
    isLoggedIn: "not",
}));


const newArray = ["Muhammad Hussain", "logged in"]
function checkSigninStatus(passingArray) { // passing array as parameter.
    return `${passingArray[0]} is ${passingArray[1]}.`
}
console.log(checkSigninStatus(newArray));
console.log(checkSigninStatus(["Muhammad Hussain", "logged in"])); // We can directly pass array inside parameter rather than variable name that is storig array.


function checkFormStatus(passingArray = ["Muhammad Hussain", "filled form"]) { // If not any value passed in argument, it take parameter's value as default 
    return `${passingArray[0]} has ${passingArray[1]}.`
}
console.log(checkFormStatus());

function firstName(fn) { // A function in which we passed a second function as a parameter is called first class function
    console.log("Muhammad");
    fn();
}
firstName(lastName);
function lastName() {
    console.log("Hussain");
}

// use function expression on the fly

function first(fn) { 
    console.log("Muhammad");
    fn();
}
first(function () { // Passing whole function (not its variable name) inside other function's parameter is called function expression on the fly
    console.log("Hussain");
});

const last = function () {
    console.log("Hussain");
}
