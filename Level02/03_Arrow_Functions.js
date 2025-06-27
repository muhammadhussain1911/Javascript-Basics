const info = {
    userName: "Ali Raza",
    age: 6,
    message: function () {
        console.log(`${this.userName}, welcome to our platform`);
        console.log(this);
        
    }
}

info.message();
info.userName = "Hasan Raza"
info.message()

console.log(this); //In Node environment, this refer to an empty object "{}"" , but in browser, "this" refer to Window object.

function thisInNode () {
    const userName = "Muhammad Hussain"
    console.log(this.userName); // Print undefined. // 'this' does not refer to local variables in a function. It refers to the global object in Node.js, and local variables are not automatically attached to it.
    
    console.log(this);
    
}
thisInNode()

const thisInArrow = () => {
    console.log(this); // // In arrow functions, `this` is lexically inherited from the surrounding scope. // At top-level in Node.js, it's `{}`, but in browsers it's `window`.
}
    
thisInArrow()

function regularFunc() {
  console.log("Regular Global:", this);
}
regularFunc();

const timerObj = {
  msg: "I am delayed",
  showMsg: function () {
    setTimeout(() => {
      console.log(this.msg); // arrow inherits `this` from showMsg
    }, 1000);
  }
};
timerObj.showMsg();

const addNum = (num1, num2) => {
    console.log(`${num1} + ${num2} =`);
    return num1 + num2 // explicit return if two or more lines of code in arrow function, or one line of code but with curly braces like (num1, num2) => {return num1 + num2}
}
console.log(addNum(3,6));

const addNumber = (num1, num2) => num1 + num2 // implicit return if one line of code in arrow function
console.log(addNumber(3,6));

const arrowWithParantheses = (num1, num2) => (num1 + num2) // same as addNumber function.
console.log(arrowWithParantheses(4,6));

const returnObjInArrow = () => ({name: "Muhammad Hussain"}) // for returning object, parentheses is compulsory.
console.log(returnObjInArrow());
