// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n.If that value has more than one digit, 
// continue reducing in this way until a single - digit number is produced.
// The input will be a non - negative integer.

function sumDigits(n) {
    return n
        .toString()
        .split("")
        .reduce(function(a, b) {
            return a + parseInt(b);
        }, 0);
}

function digital_root(n) {
    if (n < 10) {
        return n;
    }

    return digital_root(sumDigits(n));
}

console.log(digital_root(16), 7);
console.log(digital_root(942), 6);
console.log(digital_root(132189), 6);
console.log(digital_root(456), 6);
