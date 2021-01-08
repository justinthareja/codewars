// Write a function called that takes a string of parentheses, 
// and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              => true
// ")(()))"          => false
// "("               => false
// "(())((()())())"  => true

function validParentheses(parens) {
    let count = 0;

    for (let i = 0; i < parens.length; i++) {
        let char = parens[i];
        if (char === "(") {
            count++;
        } else { 
            if (count === 0) { // a closed paren is not needed
                return false;
            } else {
                count--;
            }
        }
    }

    return count === 0;
}

console.log(validParentheses("()"), true)
console.log(validParentheses(")("), false)
console.log(validParentheses("(())(())()()"), true)
console.log(validParentheses("(()"), false)
console.log(validParentheses("()))"), false)
console.log(validParentheses("("), false)