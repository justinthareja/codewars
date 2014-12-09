console.log(array_diff([1,2,3],[4,3,1]));

var array_diff = function (a, b) {
	return a.filter(function(element) {
		return b.indexOf(element) === -1;
	})	  
}

var each = function(collection, callback){
    if (Array.isArray(collection)) {
        for (i = 0; i < collection.length; i++) {
            callback(collection[i]);    
        }
    }
    
    else if (typeof collection === 'object') {
        for (key in collection) {
            callback(collection[key]);
        }
    }
};

Array.isArray(thing) -> T/F

each([1, 2, 3, 4, 5], function(item){ console.log(item); } );
// 1
// 2
// 3
// 4
// 5

var filterWithEach = function(collection, predicate){
    
    var result = [];
    
    each(collection, function(element) {
        if (predicate(element)) {
            filteredArray.push(predicate(element);
        }
    }
    
    return result;
};


filter([1, 2, 3, 4, 5], function(item){ return item > 2; });
[3, 4, 5]


reduce([1, 2, 3, 4, 5], function(total, val){ return total + val; }, 0);
-> 15

var reduce = function(collection, callback, runningTotal){

    var result = runningTotal;
    
    each(collection, function(element) {
        result = callback(result, element);
    })

    return result;

};


