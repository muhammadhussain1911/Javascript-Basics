const data = {
    name: "Muhammad Hussain",
    age: 23,
    career: "Web App Developer",
}

function mySelf({name, age}) {
    console.log(`My name is ${name} and age is ${age}.`);
    
}

mySelf(data)