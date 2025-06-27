function decimalToBinary(decimal) {
    let binary = ""
    for (; decimal > 0 ;) {
        let remainder = decimal % 2 ; // Get remainder (0 or 1)
        binary = remainder + binary ; // Add remainder to front of binary string
        decimal = Math.floor(decimal / 2); // Divide decimal by 2 and remove decimal
    }
    return binary || "0" // if input is 0, return "0"

}
 const bNumber = decimalToBinary(223)
 console.log(bNumber);

function binaryToDecimal(binary) {
    let reversedBinary = String(binary).split("").map(Number).reverse()
    let number = 0
    for (let index = 0; index < reversedBinary.length; index++) {
        number = number + (2**index * reversedBinary[index])
    }
    return number;
}

console.log(binaryToDecimal(bNumber));

