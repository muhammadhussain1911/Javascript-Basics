let number = 2

while (number < 100) {
    console.log(`Multiples of ${number} are: `);
    number = number + 2
}

const season = "Winter"

if (season == "Winter") {
    console.log("Wear warm clothes");
} else if (season == "Summer") {
    console.log("Drink Juice");
} else {
    console.log("Enjoy spring");
}


function multipleOfNumber(number) {
    let str = ""
    for (let index = 1; index <= 50; index++) {
        str = `${number * index} `
    }
    
}
multipleOfNumber(2)

const classFellows = ["Usama", "Ahmad", "Danish", "Asif", "Faizan", "Mujeeb"]

let fellow = 0;
while (fellow < classFellows.length) {
    console.log(classFellows[fellow]);
    fellow++
}

let score = 2
do {
    console.log(`Current score is ${score}`); // Firstly code executes then condition is checked.
    score++
    
} while (score <= 6);
