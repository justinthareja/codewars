var moveZeros = function (arr) {
    let zeroes = [];
    let result = [];

    arr.forEach((value) => {
        if (value === 0) {
            zeroes.push(value);
        } else {
            result.push(value);
        }
    });
    
    return result.concat(zeroes);
}

console.log(
    moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]),
    [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
);