// You've just moved into a perfectly straight street with exactly n identical 
//houses on either side of the road. Naturally, you would like to find out the house 
//number of the people on the other side of the street. The street looks something like this:

// Street
// 1|   |6
// 3|   |4
// 5|   |2
// Evens increase on the right; odds decrease on the left. House numbers start at 1 
// and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.

// Example
// Given your house number address and length of street n, give the house number on the opposite side of the street.

// Both n and address could get upto 500 billion with over 200 random tests.


function overTheRoad(address, n) {
    return address % 2 === 0 
        ? 2 * n - address + 1
        : 2 * ( n - ( Math.ceil( address / 2 ) - 1 ) );
}

console.log(overTheRoad(1, 3), 6);
console.log(overTheRoad(3, 3), 4);
console.log(overTheRoad(2, 3), 5);
console.log(overTheRoad(3, 5), 8);