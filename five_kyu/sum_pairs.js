// sum_pairs([11, 3, 7, 5], 10)
// # ^ --^ 3 + 7 = 10
//     == [3, 7]

// sum_pairs([4, 3, 2, 3, 4], 6)
// # ^ -----^ 4 + 2 = 6, indices: 0, 2 *
// # ^ -----^ 3 + 3 = 6, indices: 1, 3
// # ^ -----^ 2 + 4 = 6, indices: 2, 4
// # * entire pair is earlier, and therefore is the correct answer
//     == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
//     == None / nil / undefined(Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5], 10)
// # ^ -----------^ 5 + 5 = 10, indices: 1, 5
// # ^ --^ 3 + 7 = 10, indices: 3, 4 *
// # * entire pair is earlier, and therefore is the correct answer
//     == [3, 7]


// TODO: MAKE THIS MORE EFFICIENT
function sumPairs(ints, s) {
    let result;
    let x = 0, y = ints.length;

    for (let i = 0; i < ints.length; i ++) {
        let diff = s - ints[i];

        for (let j = i + 1; j < ints.length; j++) {
            if (ints[j] === diff && (i >= x ) && ( j <= y )) {
                x = i;
                y = j;
                result = [ints[i], ints[j]];
            }
        }
    }

    return result;
}


console.log(sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7], "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8");
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6), [0, -6], "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6");
console.log(sumPairs([20, -13, 40], -7), undefined, "No Match: [20, -13, 40] should return undefined for sum = -7");
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2), [1, 1], "First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2");
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10), [3, 7], "First Match From Left REDUX!: [10, 5, 2, 3, 7, 5] should return [3, 7] for sum = 10");
console.log(sumPairs([4, -2, 3, 3, 4], 8), [4, 4], "Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8");
console.log(sumPairs([0, 2, 0], 0), [0, 0], "Zeroes: [0, 2, 0] should return [0, 0] for sum = 0");
console.log(sumPairs([5, 9, 13, -3], 10), [13, -3], "Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10");