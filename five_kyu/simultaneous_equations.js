// input [
//     [4, -3, 1, -10], 
//     [2, 1, 3, 0], 
//     [-1, 2, -5, 17]
// ]


// PAINFULLY MANUAL


function solveEq(eq) {
    // [eq1, eq2, eq3] = eq
    // [x1, y1, z1, n1] = eq1
    // [x2, y2, z2, n2] = eq2
    // [x3, y3, z3, n3] = eq3
    
    
    // solve for z in 3rd eq
        // x, y, z, n
        // switch signs of z
        // divide everything by z
        // store this

    // sub z in eq 2
        // multiply x3, y3, n3 by z2
        // add 
            // x2 = x2 + x3
            // y2 = y2 + y3
            // n2 = n2 - n3 (- because switch sides)
    // solve for y in 2nd eq
        // switch signs of y
        // divide everything by y

    // TODO:
    // sub z and y
    // solve for x in 1st eq

    // sub x result into 2nd eq to find y result
    // sub x and y result into 3rd eq to find z result
    // return [x, y, z]
}

