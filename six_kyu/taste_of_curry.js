// takes a function fun and an arbitrary number of other arguments
function curry(fun, ...args) {
    // returns a function which works like fun with the first
    // arguments replace by the remaining arguments of curry
    return function(...curriedArgs) {
        return fun.call(this, ...args, ...curriedArgs);
    }
}

function add(a, b, c) {
    return a + b + c;
}

var addOne = curry(add, 1);
console.log(add(1, 2, 3) === addOne(2, 3));

var obj = {
    a: 'foo',
    b: function(a) { return this.a + a; }
};

obj.foobar = curry(obj.b, 'bar');
console.log(obj.foobar() === "foobar");