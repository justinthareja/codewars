// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// TODO keep hacking
function incrementString(string) {
    let letters = [];
    let numbers = [];
    
    if (string.length === 0) {
        return 1;
    }

    // separate out letters and numbers
    for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        if (isNaN(+letter)) {
            letters.push(letter);
        } else {
            numbers.push(letter);
        }
    }
}

console.log(incrementString("foobar000"), "should equal foobar001");
console.log(incrementString("foo"), "should equal foo1");
console.log(incrementString("foobar001"), "should equal foobar002");
console.log(incrementString("foobar99"), "should equal foobar100");
console.log(incrementString("foobar099"), "should equal foobar100");
console.log(incrementString(""), "should equal 1");