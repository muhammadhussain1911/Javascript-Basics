const myUser1 = {
    userName: "User123",
    fatherName: "abc",
    userId: 1911,
    isLoggedIn: false
}

console.log(myUser1);
console.log(Object.keys(myUser1)); // accessing all keys of myUser1 in array format.
console.log(Object.values(myUser1)); // accessing all values of myUser1 in array format.
console.log(Object.entries(myUser1)); // accessing all key-value pairs of myUser1 (every key-value inside a single array) in array format.
console.log(myUser1.hasOwnProperty('userId')); // checking that if userId exists in user1. return type: boolean



const allUsers = [
    {
        userName: "User1911",
        userId: 4080,
        isLoggedIn: false
    },
    {
        userName: "User1912",
        userId: 4081,
        isLoggedIn: false
    },
    {
        userName: "User1913",
        userId: 4082,
        isLoggedIn: true
    },
    {
        userName: "User1914",
        userId: 4083,
        isLoggedIn: false
    },
]
console.log(allUsers[2].userName); // Accessing value inside object inside array
