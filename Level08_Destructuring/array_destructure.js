function calculate(a, b, c) {
    const add = a + b + c;
    const sub = a - b;
    const mul = a * b * c;
    const div = a / b;
    return [add, sub, mul, div]
}


console.log(calculate(10, 5, 2)); // console the returning array [ 17, 5, 100, 2 ]
const [add, sub, mul, div] = calculate(10, 5, 3);
console.log(add); // console the result of add function.


