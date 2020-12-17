// Write a function, persistence, that takes in a positive parameter num and returns 
// its multiplicative persistence, which is the number of times you must multiply the 
// digits in num until you reach a single digit.

function multiply (a, b) {
    return a * b;
}

function persistence(n) {
    let count = 0;
    let number = n;

    while(number.toString().length > 1) {
        const digits = number.toString().split("");
        number = digits.reduce(multiply);
        count++;
    }

    return count;
}

console.log(persistence(39), 'should equal', 3);
console.log(persistence(999), 'should equal', 4);
console.log(persistence(4), 'should equal', 0);
