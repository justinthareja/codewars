// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(string) {

}

console.log(accum("abcd"), "should equal A-Bb-Ccc-Dddd");
console.log(accum("RqaEzty"), "should equal R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy");
console.log(accum("cwAt"), "should equal C-Ww-Aaa-Tttt");