// Task
// Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

function pascalsTriangle(depth) {
    let triangle = [];
    // rows are zero indexed
    depth = depth - 1;

    for (let n = 0; n <= depth; n++) {
        let row = [];
        let previousRow = triangle[n - 1] || [];

        for (k = 0; k <= n; k++) {
            // first column of any row in pascal's triangle is always 1
            if (k === 0) {
                row.push(1);
            } else {
                row.push(
                    previousRow[k - 1] +
                    // default to 0 to prevent column counter from going beyond right boundary of triangle
                    (previousRow[k] || 0)
                );
            }
        }

        triangle.push(row);
    }

    return triangle.flat();
}

console.log(pascalsTriangle(1), 'should equal', [1]);
console.log(pascalsTriangle(2), 'should equal', [1, 1, 1]);
console.log(pascalsTriangle(4), 'should equal', [1, 1, 1, 1, 2, 1, 1, 3, 3, 1]);