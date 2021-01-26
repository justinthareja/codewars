function cycle(n) {
    // looking for a repeated cycle in the decimal part
    // if that doesn't exist return -1

        // n = 7
    // do 1 / n
        // 1 / 7
    // convert result to string
        // "0.14285714285714285"
    // maybe consider edge case of repeats over long length (cycle length max 8 ?)
    // lop off 0.
        // "14285714285714285"

    // iterate cycle length from 1 to max (10?). for each cycle length (c):
        // split the string every "c" characters
        // check to make sure all the splits are the same


}

console.log(cycle(33), 2)
console.log(cycle(18118), -1)
console.log(cycle(69), 22)
console.log(cycle(197), 98)
console.log(cycle(65), -1)