// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

function isEven(n) {
    return n % 2 === 0;
}

function add(a, b) {
    return a + b;
}

function sumEvenNumbers(input = []) {
    return input.filter(isEven).reduce(add, 0);
}

console.log(sumEvenNumbers([4, 3, 1, 2, 5, 10, 6, 7, 9, 8]), 'should equal', 30);
console.log(sumEvenNumbers([]), 'should equal', 0);
