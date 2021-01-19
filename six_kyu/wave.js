function wave(str) {
    var result = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            let waveStr = str.split("");
            waveStr[i] = str[i].toUpperCase();
            result.push(waveStr.join(""));
        }

    }

    return result;
}

var test;

test = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
console.log(wave("hello"), test, "Should return: '" + test + "'");

test = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
console.log(wave("codewars"), test, "Should return: '" + test + "'");

test = [];
console.log(wave(""), test, "Should return: '" + test + "'");

test = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
console.log(wave("two words"), test, "Should return: '" + test + "'");

test = [" Gap ", " gAp ", " gaP "];
console.log(wave(" gap "), test, "Should return: '" + test + "'");