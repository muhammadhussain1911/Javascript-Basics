const shops = [500, 510, 450, 100, 410, 200, 210, 120, 150, 170, 230]

const billPayer = shops
.map((shop) => shop - 40)
.filter((shop) => shop >= 200) // This is chaining. .map().filter()
console.log(billPayer);

// <============Childhood Game============>

const gameNumber = [23, 45, 54, 20]
gameNumber.forEach((num) => console.log(((num + num + 10) / 2) - num))

const result = gameNumber
.map((num) => num + num)
.map((num) => num + 10)
.map((num) => num / 2)
.map((num, index) => num - gameNumber[index]) // chaining

console.log(result);

console.log(typeof result);

