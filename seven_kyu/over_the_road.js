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
   let evens = [];
   let odds = [];

   for (let i = 1; i <= n * 2; i += 2) {
       odds.push(i);
   }

   for (let i = n * 2; i >= 2; i -= 2) {
       evens.push(i);
   }

   if (address % 2 === 0) {
       let addressIndex = evens.indexOf(address);
       return odds[addressIndex];
   } else {
       let addressIndex = odds.indexOf(address);
       return evens[addressIndex];
   }

}

console.log(overTheRoad(1, 3), 6);
console.log(overTheRoad(3, 3), 4);
console.log(overTheRoad(2, 3), 5);
console.log(overTheRoad(3, 5), 8);