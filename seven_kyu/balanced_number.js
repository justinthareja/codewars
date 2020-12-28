// Balanced number is the number that * The sum of all digits to the left
// of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.

function balancedNum(number) {
    let left = "";
    let right = "";
    let len = "";

    number = number.toString();
    len = number.length; 
    
    if (len % 2 === 0) {
        left = number.substring(0, len / 2 - 1);
        right = number.substring(len / 2 + 1);
    } else {
        left = number.substring(0, Math.floor(len / 2));
        right = number.substring(Math.floor(len / 2) + 1);
    }

    left = left.split("").reduce((a, b) => a + parseInt(b), 0);
    right = right.split("").reduce((a, b) => a + parseInt(b), 0);

    return left === right ? "Balanced" : "Not Balanced";

}

console.log(balancedNum(7), "Balanced")
console.log(balancedNum(959), "Balanced")
console.log(balancedNum(13), "Balanced")
console.log(balancedNum(432), "Not Balanced")
console.log(balancedNum(424), "Balanced")