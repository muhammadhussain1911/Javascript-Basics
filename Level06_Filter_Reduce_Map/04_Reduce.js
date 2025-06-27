const payment = [210, 450, 1020, 560, 2000]

const totalBill = payment.reduce((start, end) => {return (start + end)}, 0)

console.log(totalBill);

// <============Calculation: Adding 10% Tax in above logic============>

const finalBill = payment.reduce((sum, curr) => sum + curr, 0) * 1.10;
console.log(finalBill); // 4664

// // <============Above Job using Function============>

function calculateTotalWithTax(payments, taxRate = 0.10) {
  const total = payments.reduce((sum, val) => sum + val, 0);
  return total + (total * taxRate);
}

console.log(calculateTotalWithTax([210, 450, 1020, 560, 2000])); // 4664


// <============Price calculation for database data============>

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

const range = 5000
const selectedCourses = courses.filter((course)=> course.price < range)
console.log(selectedCourses);

const totalAmount = selectedCourses.reduce((accumulator, currentValue) => {return accumulator + currentValue.price}, 0)
console.log(totalAmount);

// <============Same calculation with chaining============>

const totalAmount1 = courses
  .filter(course => course.price < 5000)
  .reduce((acc, course) => acc + course.price, 0);

console.log(totalAmount1);

// <============Same calculation with function============>

const getAffordableTotal = (courseList, limit) => 
  courseList
    .filter(course => course.price < limit)
    .reduce((acc, course) => acc + course.price, 0);

console.log(getAffordableTotal(courses, 5000)); // 8997

