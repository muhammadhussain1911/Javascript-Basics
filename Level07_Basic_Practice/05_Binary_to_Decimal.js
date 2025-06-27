// <============Converting Binary to Decimal number without reversing array============>

// In previous file "04_Decimal_to_Binary.js", we converted binary number to decimal number with a reversed array that is easy.

function binaryToDecimal(binary) {
    let binaryArray = String(binary).split('').map(Number)

    let number = 0
    for (let index = 0; index < binaryArray.length; index++) {
        number = number + ( 2 ** (binaryArray.length - (index + 1)) * binaryArray[index] )
    }
    return number;
}

console.log(binaryToDecimal(11011111));