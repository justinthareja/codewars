// Task
// Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

function pascalsNumber(n, k) {
    // Position 'k' is zero indexed
    if (k === 0) {
        return 1;
    } else {
        return pascalsNumber(n, k - 1) * ((n + 1 - k) / k);
    }
}


function pascalsRow(n) {
    let row = [];

    for (let i = 0; i <= n; i++) {
        row.push(pascalsNumber(n, i));
    }

    return row;
}

function pascalsTriangle(n) {
    let triangle = [];

    // The example wants row with n(1) = [1], so iterate to n - 1 starting from 0
    for (let i = 0; i < n; i++) {
        triangle.push(pascalsRow(i));
    }

    return triangle.flat();
}

console.log(pascalsTriangle(1), 'should equal', [1]);
console.log(pascalsTriangle(2), 'should equal', [1, 1, 1]);
console.log(pascalsTriangle(4), 'should equal', [1, 1, 1, 1, 2, 1, 1, 3, 3, 1]);