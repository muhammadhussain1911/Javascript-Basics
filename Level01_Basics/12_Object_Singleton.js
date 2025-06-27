const nestedSingletonObj = new Object() // Creating a singleton object using the Object constructor


nestedSingletonObj.myName = {
    firstName: "Muhammad",
    lastName: "Hussain",
    userName: {
        githubUserName: "muhammadhussain1911",
        linkedinUserName: "muhammadhussain1911"
    }
}
nestedSingletonObj.age = 23

console.log(nestedSingletonObj);
// console.log(nestedSingletonObj.myName.userName.linkedinUserName); // Accessing the LinkedIn username from the nested userName object inside myName
const singletonObj = Object.assign(new Object(), {
  myName1: "Muhammad Hussain",
  age: 22,
  currentStatus: "Student",
  study: "F.A"
});

console.log(singletonObj);

// const obj3 = {nestedSingletonObj, singletonObj} // return new object consisting on two objects printed one by one. not merging
// console.log(obj3);
const obj4 = Object.assign({}, nestedSingletonObj, singletonObj)
console.log(obj4);

const obj1 = {a: 1, b: 2, c: 3}
const obj2 = {d: 4, e: 5, f: 6}
const obj3 = Object.assign(obj1, obj2)
console.log(obj1);

// <============Creating Singleton object and assinging key-values pair at a time===========>

const singletonObj1 = Object.assign(new Object(), {
  myName: "Muhammad Hussain",
  age: 22,
  currentStatus: "Student",
  study: "F.A"
});

console.log(singletonObj1);
console.log(typeof singletonObj1);

