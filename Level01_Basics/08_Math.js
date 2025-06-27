console.log(Math);
console.log(typeof Math);


// <===========Basic Arithmetic Functions============>

console.log(Math.abs(-92));           // 92 (absolute value, useful for distance calculations)
console.log(Math.ceil(9.2));          // 10  (rounding up, e.g., pagination: 4.2 pages → 5 pages)
console.log(Math.floor(4.9));         // 4  (rounding down, e.g., flooring prices)
console.log(Math.round(4.5));         // 5  (standard rounding)
console.log(Math.trunc(9.2));         // 9  (just remove the decimals)
console.log(Math.min(1,4,7,9,5));       // 1 (for finding minimum value)
console.log(Math.max(1,4,7,9,5));       // 9 (for finding maximum value)



// <===========Power & Roots============>

console.log(Math.pow(5, 4));          // 625 (5^4, useful for exponential growth)
console.log(Math.sqrt(16));           // 4 (square root)
console.log(Math.cbrt(27));           // 3 (cube root)
console.log(Math.SQRT1_2);            // 0.7071067811865476 // Square root of 1/2
console.log(Math.SQRT2);            // 1.4142135623730951 // Square root of 2

// <===========Exponential and Logarithmic Functions============>

console.log(Math.exp(4));             // 2.718... (e^1) // The exponential function, exp(x), calculates the value of e to the power of x, where e is the base of the natural logarithm, 2.718281828... .
console.log(Math.expm1(1));           // 1.718... (e^x - 1, used in precision-sensitive financial calcs)
console.log(Math.log(10));            // ~2.302 (ln(10))
console.log(Math.log10(1000));        // 3 (log base 10)
console.log(Math.log2(8));            // 3 (log base 2)
console.log(Math.log1p(0.5));         // 0.405 (more accurate for small x)

// <===========Trigonometric Functions (angles in radians)============>

console.log(Math.sin(Math.PI / 2));   // 1 (sin(90°))
console.log(Math.cos(0));             // 1 (cos(0°))
console.log(Math.tan(Math.PI / 4));   // 0.9999999999999999 (tan(45°))
console.log(Math.asin(1));            // 1.57... (inverse sine of 1 → 90°)
console.log(Math.acos(0));            // 1.57... (inverse cosine of 0 → 90°)
console.log(Math.atan(1));            // 0.785... (arctangent of 1 → 45°)
console.log(Math.atan2(10, 10));      // 0.785 (useful in game dev for angle between two points)

// <===========Hyperbolic Functions============>

console.log(Math.sinh(1));            // 1.175 (hyperbolic sine)
console.log(Math.cosh(1));            // 1.543 (hyperbolic cosine)
console.log(Math.tanh(1));            // 0.761 (hyperbolic tangent)
console.log(Math.asinh(1));           // 0.881 (inverse hyperbolic sine)
console.log(Math.acosh(2));           // 1.316 (inverse hyperbolic cosine)
console.log(Math.atanh(0.5));         // 0.549 (inverse hyperbolic tangent)

// <===========Other Useful Utilities============>

console.log(Math.fround(1.337));      // 1.3370000123977661 (convert to 32-bit float)
console.log(Math.clz32(1));           // 31 (count leading zeros in 32-bit int, useful in low-level optimizations)
console.log(Math.sign(-10));          // -1 (check if number is +, -, or 0)
console.log(Math.imul(2, 4));         // 8 (32-bit int multiplication)
console.log(Math.hypot(3, 4));        // 5 (Pythagoras: √(3² + 4²))

// <===========Min, Max, Random============>

console.log(Math.min(3, 7, 2));       // 2 (minimum value)
console.log(Math.max(3, 7, 2));       // 7 (maximum value)
console.log(Math.random());           // 0.123... (random number between 0 and 1)

console.log(Math.floor(Math.random() * 6) + 1); // Example: Generate random integer between 1 and 6 (like a dice)

// <===========Constants (Read-Only)============>

console.log(Math.PI);                // 3.14159... (used in geometry, e.g., circumference)
console.log(Math.E);                 // 2.71828... (natural logarithm base)
console.log(Math.LN2);               // 0.693... (ln(2))
console.log(Math.LN10);              // 2.302... (ln(10))
console.log(Math.LOG2E);             // 1.442... (log base 2 of E)
console.log(Math.LOG10E);            // 0.434... (log base 10 of E)
console.log(Math.SQRT2);             // 1.414... (square root of 2)
console.log(Math.SQRT1_2);           // 0.707... (square root of 1/2)


// <============OTP Generator============>

function generateOTP(length = 6) {
  let otp = '';
  for (let i = 0; i < length; i++) {
    // Random digit from 0 to 9
    let digit = Math.floor(Math.random() * 10);
    otp += digit;
  }
  return otp;
}
console.log("Your OTP is:", generateOTP()); // e.g., "Your OTP is: 839274"

// Optional: 4-digit OTP or 8-digit OTP
console.log(generateOTP(4)); // e.g., 4821
console.log(generateOTP(8)); // e.g., 93048172

// <============Get number between 10 and 20============>

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // between 10 to 20 
console.log(Math.floor(Math.random() * (max - min)+ 1) + min); // between 11 and 20