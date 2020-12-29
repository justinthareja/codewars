// Write a function that takes in a string of one or more words, and returns the same string, 
// but with all five or more letter words reversed(Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces.Spaces will be included 
// only when more than one word is present.

//     Examples: spinWords("Hey fellow warriors") => returns "Hey wollef sroirraw" 
//     spinWords("This is a test") => returns "This is a test" 
//     spinWords("This is another test")=> returns "This is rehtona test"


function reverseString(string) {
    return string.split("").reverse().join("");
}

function spinWords(string) {
    return string
        .split(" ")
        .map(function(word) {
            return word.length >= 5
                ? reverseString(word)
                : word;
        })
        .join(" ");
}

console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");
console.log(spinWords("This is another test"), "This is rehtona test");