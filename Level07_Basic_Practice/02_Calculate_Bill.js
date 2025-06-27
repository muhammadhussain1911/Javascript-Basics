// <============Calculating total bill of purchased product============>

const payment = [210, 450, 1020, 560, 2000]

const totalBill = payment.reduce((start, end) => {return (start + end)}, 0)

console.log(`Your bill is ${totalBill}. Tax not included.`);

// <============Calculation: Adding 10% Tax on above bill============>

const finalBill = payment.reduce((sum, curr) => sum + curr, 0) * 1.10;
console.log(`Your final bill including government 10% tax is ${finalBill}.`);

// <============Calculating price for Customer's selected courses============>

const courses = [
    {
        courseName: "JS course",
        price: 2999
    },
    {
        courseName: "Python course",
        price: 999
    },
    {
        courseName: "Kotlin course",
        price: 5999
    },
    {
        courseName: "Data Science course",
        price: 12999
    },
    {
        courseName: "Java Course",
        price: 4999
    }
]

const totalAmount = courses
  .filter(course => course.price < 5000)
  .reduce((acc, course) => acc + course.price, 0);

console.log(`Your selected courses are of ${totalAmount} pkr.`);