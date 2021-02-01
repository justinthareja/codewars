function solveSimultaneous(array) {
    let [eq1, eq2] = array;
    let [x1, y1, n1] = eq1;
    let [x2, y2, n2] = eq2;
    let x, y;

    // solve for y on eq1
    // switch signs of x
    x1 = -x1;
    // divide by y
    x1 = x1 / y1;
    n1 = n1 / y1;
    // store newly solved for y constants
    eq1 = [x1, y1, n1];
    
    // sub n1, x1 = into y2
    // multiply n by y
    x1 = x1 * y2;
    // multiply x by y
    n1 = n1 * y2;

    // add x2 to this new x
    x2 = x2 + x1;
    // switch signs of n
    n1 = -n1;
    // divide n by x to get x = number
    n2 = n2 + n1;
    // this is the constant
    x = n2 / x2;
    x = Math.round(x);
    
    // sub x into eq1 to get y
    [x1, y1, n1] = eq1;

    y = x1 * x + n1;
    y = Math.round(y);

    return [x, y];
}

console.log(solveSimultaneous([[2, 6, 38], [15, -2, 144]]), [10, 3])
console.log(solveSimultaneous([[1, 1, 20], [1, -1, 2]]), [11, 9])
console.log(solveSimultaneous([[1, 2, 18], [3, -1, 5]]), [4, 7])