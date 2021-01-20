function nouveau(Constructor, ...args) {
    var self = {};
    var result;

    self.__proto__ = Constructor.prototype;
    result = Constructor.apply(self, args);

    if (typeof result == "function" || (typeof result == "object" && result != null)) {
        return result;
    }

    return self;
}


function Person(name) {
    this.name = name;
}
Person.prototype.sayHi = function () {
    return 'Hi, I am ' + this.name;
};

var guy = nouveau(Person, 'Guy');

console.log(guy.name, 'Guy');
console.log(guy.sayHi(), 'Hi, I am Guy');