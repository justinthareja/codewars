/*******************************************************************************************
The Coupon Code
*******************************************************************************************/

// MY SOLUTION

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return Date.parse(expirationDate) >= Date.parse(currentDate) && enteredCode === correctCode;
}



/*******************************************************************************************
List Filtering -- intro to higher order functions
*******************************************************************************************/

//MY SOLUTION

function filter_list(l) {
	return l.filter(function(element) {
		return typeof element == 'number';
	});
}


/*******************************************************************************************
Weight of its Contents
*******************************************************************************************/

// MY SOLUTION

function contentWeight(bottleWeight, scale) {

	var scaleArr = scale.split(' '); // parses the scale string into an array 
	var scaleInt = parseInt(scaleArr[0]); // parses the first element of the array into a number to use for calculations

	return scaleArr[2] === 'larger' ? bottleWeight * (scaleInt / (scaleInt + 1)) : bottleWeight / (scaleInt + 1);
}

// TOP SOLUTION
function contentWeight(bottleWeight, scale) {
  var s = parseInt(scale);
  return /larger/.test(scale) ? bottleWeight * s / (s+1) : bottleWeight / (s+1); //have dan explain the /larger/ syntax
}



/*******************************************************************************************
99 Bottles of Beer
*******************************************************************************************/

function sing() {
	
	var song = [];

	for (i = 99; i > 2; i--) {
		song.push(i + ' bottles of beer on the wall, ' + i + ' bottles of beer.'); 
		song.push('Take one down and pass it around, ' + (i - 1) + ' bottles of beer on the wall.');
	}

	song.push('2 bottles of beer on the wall, 2 bottles of beer.');
	song.push('Take one down and pass it around, 1 bottle of beer on the wall.')
	song.push('1 bottle of beer on the wall, 1 bottle of beer.');
	song.push('Take one down and pass it around, no more bottles of beer on the wall.');
	song.push('No more bottles of beer on the wall, no more bottles of beer.');
	song.push('Go to the store and buy some more, 99 bottles of beer on the wall.');

	return song;
}



/*******************************************************************************************
Basic JS - Building a Calculator
*******************************************************************************************/

var Calculator = {
	add: function (a, b) { 
		return a + b 
	},
	subtract: function (a, b) { 
		return a - b 
	},
	multiply: function (a, b) { 
		return a * b
	},
	divide: function (a, b) {
	  return b === 0 ? false : a / b 
	}
};



/*******************************************************************************************
Javascript Array Filter -- higher order functions (as arg)
*******************************************************************************************/

function getEvenNumbers(numbersArray){
	return numbersArray.filter(function (a) {
		return !(a % 2);
	})
}



/*******************************************************************************************
Javascript Array Filter -- higher order functions (as args)
*******************************************************************************************/

var data = [
  {name: 'Joe', age: 20},
  {name: 'Bill', age: 30},
  {name: 'Kate', age: 23}
]

function getNames(data){
  return data.map(function(item) {
  	return item.name;
  });
}



/*******************************************************************************************
Anagram Detection
*******************************************************************************************/

function isAnagram (test, original) {
	var t = test.toLowerCase().split("").sort().join("");
	var o = original.toLowerCase().split("").sort().join("");
	return t === o;
}



/*******************************************************************************************
Unpacking Arguments
*******************************************************************************************/

function spread(func, args) {

	// must unpack the args out of the array and apply it to func
	// return the function with arguments stripped out of the array
	// which would look like return func(arg[0], arg[1], arg[2]) but you can't assume any lengths

	return func.apply(window, args); // works when run in chrome, didn't work when run in kata
	return func.apply(this, args); // works when run in kata
	return func.apply(null, args); // was the 'best practice'
}



/*******************************************************************************************
Differential Averaging
*******************************************************************************************/

function addToAverage(current, points, add) {
	return ((current * points) + add) / (++points);
}



/*******************************************************************************************
Functional Addition
*******************************************************************************************/

function addThis(n) {
	return function toThis (m) {
		return n + m;
	}
}



/*******************************************************************************************
Find Your Villan Name
*******************************************************************************************/

var villainFirst = ["The Evil",
 "The Vile",
 "The Cruel",
 "The Trashy",
 "The Despicable",
 "The Embarrassing",
 "The Disreputable",
 "The Atrocious",
 "The Twirling",
 "The Orange",
 "The Terrifying",
 "The Awkward"]

var villainLast = ["Mustache",
 "Pickle",
 "Hood Ornament",
 "Raisin",
 "Recycling Bin",
 "Potato",
 "Tomato",
 "House Cat",
 "Teaspoon",
 "Laundry Basket"]

function getVillainName(birthday){

var lastName = villainLast[birthday.getDate() % 10];
var firstName = villainFirst[birthday.getMonth()];

return firstName + " " + lastName;

}

/*******************************************************************************************
Use map() to double the values in an array
*******************************************************************************************/

// declare a function named double that takes an array as its only argument
// double will return a new array 
// the function passed through map will do the doubling

function double (array) {
	return array.map(function (element) {
		return element * 2;
	})
}

/*******************************************************************************************
(Don't) make me repeat myself
*******************************************************************************************/

// repeat will take an integer as its only argument
// the goal is to repeat the string that is applied by the number inputted as the arg

// how do methods work? do you just return a new string?  
// -- upon further investigation: the method repeat is just an anon function thats stored as
// a property of the String.prototype object

// how do you extract the original string the method was called on?
// 'this' returns a string object with each letter of the string as a different numerical key, starting at 0

// store 'this' into a var called cur
// execute a for loop to extract the values of 'this' into string form and store into var rpt

// execute a for loop to repeat rpt by count and store into var end
// return end


String.prototype.repeat = function(count) {
	var cur = this, rpt = '', end = '';

	for (i = 0; i < cur.length; i++) {
		rpt += cur[i]; 
	}

	if (count === undefined) {
		return rpt;
	}
	// rpt is now the original string inputted

	for (i = 0; i < count; i++) {
		end += rpt;
	}

	return end; 
};

// other variations:

String.prototype.repeat = function(count) {
  return new Array(count + 1).join(this);
};

// new Array(count + 1) creates a new array where array.length = count + 1
// .join() is a native array method that glues all the elements in the array with whatever is in between the parenthesis
// this is the original string object that .repeat is run on
// 'this' has many different properties, how does .join know to use [[PrimitiveValue]]? I wasn't aware of this behavior which explains the first
// for loop in my own solution

String.prototype.whatIsThis = function (something) {
	return this;
}



/*******************************************************************************************
Say "Hello World" JS Style
*******************************************************************************************/

var say = function (string1) {
	return function (string2) {
		return string1 + ' ' + string2;
	}
}

// invoking say('Hello') returns a new function that looks like:

// function (string2) {
// 	return string1 + ' ' + string2;
// }

// where string1 = 'Hello' and is available to the returned function due to JS's function scope

// invoking this anon function with any argument will return "Hello" + ' ' + string2.

// Say Hello World with the following invokation:

say("Hello")("World");



/*******************************************************************************************
Adding useful functional functionality to JavaScript arrays
*******************************************************************************************/

// The JavaScript standard now includes functional additions to array like map, filter and reduce, 
// but sadly is missing the convenience functions range and sum . Implement a version of range and sum 
// (which you can then copy and use in your future Kata to make them smaller).
// While not forbidden try to write both function without using a for loop


// RANGE Example: Array.range(0, 3) returns [0, 1, 2]

// .range() will be a method on the Array object. 
// it will accept two arguments, start and count
// it will return an array containing 'count' numbers from 'start' to 'start + count' 

// the easiest way would be to create an empty array, and run a for loop from i = start to i < count 
// inside the for loop would push i to the empty array
// return the empty array outside the for loop


Array.range = function (start, count) {
	var range = [];

	for (i = 0; i < count; i++) {
		range.push(start + i);
	}
	return range;
}


// SUM Example: [0, 1, 2].sum() returns 3 

// .sum will be a method on the Array object
// accepts no arguments
// returns a sum of all the elements in the array it was run on
// use the reduce method and pass through a function that sums the previous value on the current value

// Array.prototype.sum = function () {
// 	if (this.length) {
// 		return this.reduce(function (a, b) {
// 			return a + b;
// 		})	
// 	}
// 	else {
// 		return 0;
// 	}
// }


// Array.prototype.whatIsThis = function () {
// 	return this.length;
// }

// // BEST PRACTICES

// Array.range = function(start, count) {
//   return Array.apply(null, Array(count)).map(function(e, i) {
//     return start + i;
//   });
// }

// Array.prototype.sum = function() {
//   return this.reduce(function(prev, next) {
//     return prev + next;
//   }, 0);
// }
// reduce has an optional second argument for initial value 



/*******************************************************************************************
For the Sake of Argument
*******************************************************************************************/

// Write a function named numbers that returns true if all the parameters it is passed are of the 
// Number type. Otherwise, the function should return false. The function should accept any number 
// of parameters

// first thing first, figure out how to extract all the numbers into a data structure you can manipulate.
// dabble with function.arguments --> returns an array of arguments

// run a forEach loop that returns a Boolean value where:
// typeof element === number 
// and store it in a new array = var isNumber

// numbers returns a Boolean value where:
// indexOf(false) > 0


// function.arguments IS NOT AN ARRAY, it's an array-like object that only shares the .length property with arrays
// use the following code snippet to convert into an array: var args = Array.prototype.slice.call(arguments);

// function numbers () {
// 	var isNumber = [], 
// 		args = [].slice.call(arguments) // same as Array.prototype.slice.call(arguments)

// 	args.forEach(function (element) {
// 		isNumber.push(typeof element === 'number');
// 	})

// 	return isNumber.indexOf(false) === -1; // indexOf === -1 when the value does not exist in the array indexOf is iterating over
// }

// BEST PRACTICE

function numbers() {
  return [].every.call(arguments, function (value) {
    return typeof value === "number";
  });
}

// the variable arguments returns an array-like object within if the function scope (don't need the functon prefix)



/*******************************************************************************************
Playing with Types
*******************************************************************************************/

// in this case, there will be a certain type and value to the argument
// the types are finite and of a small volume, so this sounds like a good time to write a switch statement for the first time
// the types are: object, boolean, string, number


function typing (param) {
	console.log(typeof param);
	switch (param) {
		case typeof param === 'boolean':
			return 'boolean=' + param.toString();
			break;
		case typeof param === 'object':
			return 'object=' + param.toString();
			break;
		case typeof param === 'string':
			return 'string=' + param.toString();
			break;
		case typeof param === 'number':
			return 'number=' + param.toString();
			break;		
	}

}


// function fruit (expr) {
// 	switch (expr) {
// 	  case "Oranges":
// 	    console.log("Oranges are $0.59 a pound.");
// 	    break;
// 	  case "Apples":
// 	    console.log("Apples are $0.32 a pound.");
// 	    break;
// 	  case "Bananas":
// 	    console.log("Bananas are $0.48 a pound.");
// 	    break;
// 	  case "Cherries":
// 	    console.log("Cherries are $3.00 a pound.");
// 	    break;
// 	  case "Mangoes":
// 	  case "Papayas":
// 	    console.log("Mangoes and papayas are $2.79 a pound.");
// 	    break;
// 	  default:
// 	    console.log("Sorry, we are out of " + expr + ".");
// 	}

// 	console.log("Is there anything else you'd like?");
// }


// tldr: fuck switch statements