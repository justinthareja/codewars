// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


function isOdd(n) {
    return !Number.isInteger(n / 2);
}

function findOdd(numbers) {
    let counts = {};
    
    numbers.forEach((number) => {
        if (number in counts) {
            counts[number]++;
        } else {
            counts[number] = 1;
        }
    });

    for (number in counts) {
        let count = counts[number];
        if (isOdd(count)) {
            return +number;
        }
    } 

    return "No odd number found.";
}


console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), "should equal 5");
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]),  "should equal -1");
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]), "should equal 5");
console.log(findOdd([10]),  "should equal 10");
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]),  "should equal 10");
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]), "should equal 1");
