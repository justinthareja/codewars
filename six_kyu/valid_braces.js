// Write a function that takes a string of braces, and determines if the 
// order of the braces is valid. It should return true if the string is valid,
//  and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new 
// characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, 
// brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

function validBraces(braces) {
    let stack = [];

    function findMatch(brace) {
        let braceHash = {
            '{' : '}',
            '}' : '{',
            '[' : ']',
            ']' : '[',
            '(' : ')',
            ')' : '('
        };

        return braceHash[brace];
    }

    function isOpenBrace(brace) {
        return ['{', '[', '('].includes(brace);
    }
    
    for (let i = 0; i < braces.length; i++) {
        let brace = braces[i];
        if (isOpenBrace(brace)) {
            stack.unshift(findMatch(brace));
        } else {
            // Is a closed brace
            let nextClosedBrace = stack.shift();
            if (!nextClosedBrace) {
                return false;
            } 

            if (nextClosedBrace !== brace) {
                return false;
            }
        }
    }

    return stack.length === 0;
}


// Examples
console.log(validBraces("(){}[]"),  true);
console.log(validBraces("([{}])"),  true);
console.log(validBraces("(}"),  false);
console.log(validBraces("[(])"),  false);
console.log(validBraces("[({})](]"),  false);
console.log(validBraces("}{"), false);
console.log(validBraces("{{}"), false);
