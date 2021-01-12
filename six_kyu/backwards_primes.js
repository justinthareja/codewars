// Backwards Read Primes are primes that when read backwards in base 10
// (from right to left) are a different prime. (This rules out primes which are palindromes.)

// Examples:
// 13 17 31 37 71 73 are Backwards Read Primes
// 13 is such because it's prime and read from right to left writes 31 
// which is prime too. Same for the others.

// Task
// Find all Backwards Read Primes between two positive given numbers(both inclusive), 
// the second one always being greater than or equal to the first one.The resulting 
// array or the resulting string will be ordered following the natural order of the prime numbers.

//     Example
// backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] 
// backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] 
// backwardsPrime(501, 599) => []

// Note for Forth
// Return only the first backwards - read prime between start and end or 0 if you don't find any

// backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97]
// backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967]



function backwardsPrime(start, stop) {
    // uses basic trial division
    function isPrime(n) {
        for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
            if (n % i === 0) {
                return false;
            }
        }

        return true;
    }

    function reverseNumber(n) {
        n = n.toString();
        n = n.split("").reverse().join("");
        return Number(n);
    }

    function isPalindrome(n) {
        return n == reverseNumber(n);
    }

    function isBackwardsPrime(n) {
        return isPrime(n) && !isPalindrome(n) && isPrime(reverseNumber(n));
    }

    var result = [];

    for (let i = start; i <= stop; i++) {
        if (isBackwardsPrime(i)) {
            result.push(i);
        }
    }

    return result;
}

var a = [9923, 9931, 9941, 9967]
console.log(backwardsPrime(9900, 10000), a)