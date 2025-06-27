Object.create // made via constructer method    
const myBG = Symbol('bloodType')
const myInfo = { // made via object literals
    myName: "Muhammad Hussain", // JS engine behave myName as "myName".
    age: 22,
    currentStatus: "Student",
    study: "F.A",
    isAppDeveloper: true,
    contact: Symbol('03007009263'),
    offDay: ['Saturday', 'Sunday'],
    "Internet User": true,
    [myBG]: 'O+' // using symbol as a key inside object
}
console.log(Array.isArray(myInfo.offDay)); // true // checking type


myInfo.greet = function () {
    console.log('Hello User!');
    
}
myInfo.greet2 = function greetBlockName() {
    console.log(`Salam ${this.myName}`);
    
}
console.log(myInfo.greet2());

console.log(myInfo.greet());




myInfo.age = 23 // change in value of object.
console.log(myInfo.age);

Object.freeze(myInfo) // object locked. Now you cannot change any value in this object.
console.log(typeof myInfo);
console.log(myInfo.age); // not recommended dot syntax.
console.log(myInfo["age"]); // best practice. covers all cases like if you have given key in string format with whitespace e.g: "my Name". In this case you cannot access value via dot syntax.
// console.log(myInfo.Internet User); // cause error
console.log(myInfo["Internet User"]); // best approach and will work fine.
console.log(myInfo.contact);

console.log(typeof myInfo.contact);
console.log(typeof myInfo[myBG]);
console.log(myInfo[myBG]);
console.log(myInfo);

// <============Ways of merging Object===========>
    
const address = {
  city: "Lahore",
  zip: "54000"
};

const user = {
  name: "Hussain",
  address: "Street 1 DHA" // shorthand property
};

address.user = user; // embed user object as a single key-value into address like how an array was pushed to another array
console.log(address.user);

console.log(address);

const userInfo = Object.assign({}, address, user) // merged all key values pair inside one object.
console.log(userInfo);
const personInfo = {address, user}
console.log(personInfo); // merged two objects inside a single object.

// <============Override key inside object===========>

const address1 = {
  city: "Lahore",
  zip: "54000"
};

const user1 = {
    city: "Multan",
  name: "Hussain",
  address: "Street 1 DHA" // shorthand property
};
const overrideObj = {...address1, ...user1} // if two objects have same key, the second one will override first one.
console.log(overrideObj);


