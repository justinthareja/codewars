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

// MY SOLUTUION

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





