// <============For each Loop on Array============> Most common loop for arrays

const libs = ["tailwind", 'bootstrap']

libs.forEach((lib) => {
    console.log(lib, lib);
})

function print(lib) {
    console.log(lib);
}

libs.forEach(print) // pass only reference of function "print", not "print()"

libs.forEach( (value, index, array) => { // callback function of foreach takes three parameters: value, index, array
    console.log(index, value, array);
    
} )

// Working with data coming from database.

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

allUsers.forEach((userData) => {
    console.log(userData.userName, userData.userId, userData.isLoggedIn);
    
})

allUsers.forEach((userData) => {
    if (userData.isLoggedIn === false) { // filtering user based on their login status.
        console.log(userData.userName);
    }
    
    
})

allUsers.forEach((userData) => {
    let data = [userData.userName, userData.userId, userData.isLoggedIn];
    console.log(data); // print in array format
    
})
