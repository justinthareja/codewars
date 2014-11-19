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







