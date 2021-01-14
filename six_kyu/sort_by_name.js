var ones = [
    "zero", "one", "two", "three", "four", "five", 
    "six", "seven", "eight", "nine", "ten", 
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", 
    "sixteen", "seventeen", "eighteen", "nineteen"
];

var tens = [
    "ten", "twenty", "thirty", "fourty", "fifty", 
    "sixty", "seventy", "eighty", "ninety"
];


function sortByName(ary) {
    var names = ary.map(convertNumberToWord);

    names.sort();

    return names.map(convertWordToNumber)
}

// 8 -> "eight"
// 999 -> "nine hundred ninety nine"
// "12" -> "twelve"
// "815" -> "eight hundred fifteen"
function convertNumberToWord(num) {
    var str = String(num);

    str = str.split("");
    str = str.map(toWord)
    str = str.join(" ");

    return str;
}

function convertWordToNumber(words) {
    var num = words.split(" ");

    num = num.filter((word) => word != "hundred")
    num = num.map(toNumber);
    num = num.join("");

    return Number(num);
}

function toNumber(value, index, array) {
    var diff = array.length - index;

    // Ones place
    if (diff == 1) {
        // Skip ones place for teens
        if (array[index - 1] == 1) {
            return "";
        }

        return ones.indexOf(value);
    }

    if (diff == 2) {
        // Handle teen values
        if (value == 1) {
            return ones.indexOf(value + array[index + 1]);
        } 

        return tens.indexOf(value);
    }

    if (diff == 3) {
        return ones.indexOf(value);
    }
}

function toWord(value, index, array) {
    var diff = array.length - index;
    
    // Ones place
    if (diff == 1) {
        // Skip ones place for teens
        if (array[index - 1] == 1) {
            return "";
        }

        return ones[value];
    }

    // Tens place
    if (diff == 2) {
        // Handle teen values
        if (value == 1) {
            return ones[value + array[index + 1]];
        } 
        
        return tens[value - 1];
    }
    
    // Hundreds place
    if (diff == 3) {
        return `${ones[value]} hundred`;
    }
}


console.log(sortByName([9, 99, 999]), [9, 999, 99]);
console.log(sortByName([8, 8, 9, 9, 10, 10]), [8, 8, 9, 9, 10, 10]);
console.log(sortByName([1, 2, 3, 4]), [4, 1, 3, 2]);