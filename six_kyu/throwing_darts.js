/*

You've just recently been hired to calculate scores for a Dart Board game! 

Scoring specifications:
0 points - radius above 10
5 points - radius between 5 and 10 inclusive
10 points - radius less than 5

If all radiuses are less than 5, award 100 BONUS POINTS!

Write a function that accepts an array of radiuses (can be integers and/or floats), 
and returns a total score using the above specification.
An empty array should return 0.

Examples:
scoreThrows( [1, 5, 11] ) => returns 15 
scoreThrows( [15, 20, 30] ) => returns 0 
scoreThrows( [1, 2, 3, 4] ) => returns 140

*/
// declare 2 variables: score and bonus
// bonus will increase 1 for every time a throw radius is less than five
// at the end of the function, before returning the score, if bonus === array.length score +=100
// run a forEach loop on the array that tests each element based on the scoring specifications and totals accordingly



function scoreThrows (dartThrows) {
	var score = 0,
		bonus = 0;

	dartThrows.forEach(function (throwRadius) {
		if (throwRadius < 5) {
			bonus++;
			score += 10;
		}
		else if (throwRadius <= 10) {
			score += 5;
		} 
	});

	if (bonus === dartThrows.length && dartThrows.length > 0) {
		score += 100;
	}

	return score;
}
