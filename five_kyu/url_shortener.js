// Background Information
// When do we use an URL shortener ?
//     In your PC life you have probably seen URLs like this before:

// https://bit.ly/3kiMhkU
// If we want to share a URL we sometimes have the problem that it is way too long, for example this URL:

//     https://www.google.com/search?q=codewars&tbm=isch&ved=2ahUKEwjGuLOJjvjsAhXNkKQKHdYdDhUQ2-cCegQIABAA&oq=codewars&gs_lcp=CgNpbWcQAzICCAAyBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBAgAEB4yBggAEAUQHlDADlibD2CjEGgAcAB4AIABXIgBuAGSAQEymAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=RJmqX8aGHM2hkgXWu7ioAQ&bih=1099&biw=1920#imgrc=Cq0ZYnAGP79ddM
//     In such cases a URL shortener is very useful.

// How does it work ?
//     The URL shortener is given a long URL, which is then converted into a shorter one.Both URLs are stored in a database.It is important that each long URL is assigned a unique short URL.

// If a user then calls up the short URL, the database is checked to see which long URL belongs to this short URL and you are redirected to the original / long URL.

// Important Note: Some URLs like www.google.com are used very often, it can happen that two users want to shorten the same URL, so you have to check if this URL has been shortened before to save memory in your database.

//     Task
// URL Shortener
// Write a function urlShortener(longUrl), which receives a long URL and returns an URL consisting only of lowercase letters(and one dot and one slash).

// Every short URL has to include short.ly / and must not be longer than 13.

// Note: short.ly / is not a valid short URL.

// Redirect URL
// Write a function urlRedirector(shortUrl), which receives the shortened URL and returns the corresponding long URL.

//     Performance
// There are 475_000 random tests.You don't need a complicated algorithm to solve this kata, but iterating each time through the whole database to check if a URL was used before or generating short URLs based on randomness, won't pass.

// GOOD LUCK AND HAVE FUN!

const HOST = "short.ly/"
// Essentially the first longURL gets stored as short.ly/aaaa
// then short.ly/aaab and so on
var path = "aaaa";
var shortToLong = {};
var longToShort = {};

function urlShortener(longURL) {
    var shortURL = longToShort[longURL];

    if (!shortURL) {
        // Increment path
        path = incrementString(path);

        // Set short URL 
        shortURL = HOST + path;

        // Update database
        shortToLong[shortURL] = longURL;
        longToShort[longURL] = shortURL;
    }

    return shortURL;
}

function urlRedirector(shortURL) {
    var longURL = shortToLong[shortURL];

    if (!longURL) {
        // uhoh
    }

    return longURL;
}

// "aaaa" -> "aaab"
// "aaab" -> "aaac"
// ...
// "aaaz" -> "aaba"
function incrementString(string) {
    if (string == "") {
        return "";
    }

    var last = string[string.length - 1];
    var rest = string.substring(0, string.length - 1);

    if (last != "z") {
        return rest + incrementLetter(last);
    }

    return incrementString(rest) + incrementLetter(last);
}

// "a" -> "b"
// "b" -> "c"
// ...
// "z" -> "a"
function incrementLetter(letter) {
    let aCharCode = 97;
    let zCharCode = 122;
    let letterCharCode = letter.charCodeAt(0);

    if (letterCharCode == zCharCode) {
        return "a";
    } 

    return String.fromCharCode(letterCharCode + 1);
}


console.log(incrementString("aaaa") === "aaab");
console.log(incrementString("aaab") === "aaac");
console.log(incrementString("aaaz") === "aaba");
console.log(incrementString("aaba") === "aabb");
console.log(incrementString("aazz") === "abaa");
console.log(incrementString("abaa") === "abab");
