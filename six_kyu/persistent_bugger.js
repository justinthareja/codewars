// Write a function, persistence, that takes in a positive parameter num and returns 
// its multiplicative persistence, which is the number of times you must multiply the 
// digits in num until you reach a single digit.

function multiply (a, b) {
    return a * b;
}

function persistence(n) {
    n = n.toString();
    if (n.length === 1) {
        return 0;
    }

    n = n.split("").reduce(multiply);
    return 1 + persistence(n);
}

console.log(persistence(39), 'should equal', 3);
console.log(persistence(999), 'should equal', 4);
console.log(persistence(4), 'should equal', 0);
