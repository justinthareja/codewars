// paired with Alex Zook
// Implemented using long division
function cycle(n) {
    let carry = 1;
    let howManyTimes = Math.floor(carry / n); // -> 0
    let remainder = carry % n; // first remainder -> 1
    let remainders = [];
    let cycleLength = 0;

    function findDigit() {
        remainders.push(remainder);
        carry = remainder * 10;
        remainder = carry % n;
        howManyTimes = Math.floor(carry / n);
        cycleLength++;
    }

    if (n % 2 == 0 || n % 5 == 0 || n % 10 == 0) {
        return -1;
    }

    // loop this function until we find a repeat remainder
    while (remainder != remainders[0]) {
        findDigit();
    }

    return cycleLength;
}

console.log(cycle(33), 2)
console.log(cycle(18118), -1)
console.log(cycle(69), 22)
console.log(cycle(197), 98)
console.log(cycle(65), -1)