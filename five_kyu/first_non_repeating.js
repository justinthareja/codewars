// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
  var counts = {};
  
  for (var i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    if (!counts[char]) {
      counts[char] = 1;
    } else {
      counts[char]++;
    }
  }

  for (var i = 0; i < s.length; i++) {
    const char = s[i];
    if (counts[char.toLowerCase()] === 1) {
      return char;
    }
  }

  return ""
}

console.log(firstNonRepeatingLetter('a'), 'a');
console.log(firstNonRepeatingLetter('stress'), 't');
console.log(firstNonRepeatingLetter('sTress'), 'T');
console.log(firstNonRepeatingLetter('moonmen'), 'e');