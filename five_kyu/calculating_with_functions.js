// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// paired with Alex Zook
// Number functions
function zero(x) {
    if (!x) return 0
    else {
        return x(0);
    }
}
function one(x) {
    if (!x) return 1
    else {
        return x(1);
    }
}
function two(x) {
    if (!x) return 2
    else {
        return x(2);
    }
}
function three(x) {
    if (!x) return 3
    else {
        return x(3);
    }
}
function four(x) {
    if (!x) return 4
    else {
        return x(4);
    }
}
function five(x) {
    if (!x) return 5
    else {
        return x(5);
    }
}
function six(x) {
    if (!x) return 6
    else {
        return x(6);
    }
}
function seven(x) {
    if (!x) return 7
    else {
        return x(7);
    }
}
function eight(x) {
    if (!x) return 8
    else {
        return x(8);
    }
}
function nine(x) {
    if (!x) return 9
    else {
        return x(9);
    }
}

// Operand functions
function plus(y) {
    return function (a) {
        return y + a;
    }
}
function minus(y) {
    return function (a) {
        return a - y;
    }
}
function times(y) {
    return function (a) {
        return y * a;
    }
}
function dividedBy(y) {
    return function (a) {
        return Math.floor(a / y);
    }
}