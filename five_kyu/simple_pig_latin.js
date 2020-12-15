// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/ig);
}

function pigIt(str){
    let pigWords = str.split(" ").map((word) => {
        // Don't touch characters
        if(word.length === 1 && !isLetter(word)) {
            return word;
        } 
        
        let pigLetters = word.split("");
        pigLetters.push(pigLetters.shift());
        pigLetters.push("ay");
        return pigLetters.join("");
    });

    return pigWords.join(" ");
}

console.log(pigIt('Pig latin is cool'), "should be igPay atinlay siay oolcay");
console.log(pigIt('Hello world !'), "should be elloHay orldway !");