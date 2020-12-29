// A pangram is a sentence that contains every single letter of the alphabet at 
// least once. For example, the sentence "The quick brown fox jumps over the lazy dog" 
// is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, 
// False if not. Ignore numbers and punctuation.

function isPangram(string) {
    let letters = [];

    for (let i = 97; i <= 122; i++) {
        letters.push(i);
    }

    letters = letters.map(function(charCode) {
        return String.fromCharCode(charCode);
    });

    letters = letters.reduce(function(hash, char) {
        hash[char] = false;
        return hash;
    }, {});

    string = string.toLowerCase();

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (char in letters && letters[char] === false) {
            letters[char] = true;
        }
    }

    for (let letter in letters) {
        if (letters[letter] === false) {
            return false;
        }
    }

    return true;
}

console.log("The quick brown fox jumps over the lazy dog", true);
console.log("Not a pangram", false);