/*

Playing ping-pong can be really fun! Unfortunatelly after a long and exciting play you can forget who's service turn it is. 
Let's do something about that!

Write a function that takes the current score as a string separated by : sign as an only parameter and returns "first" or 
"second" depending on whose service turn it is.

We're playg old-school, so the rule is that players take turn after every 5 services. 
That is until the score is 20:20 - from that moment each player serves 2 times in his turn.

Examples:

service("0:0") // => "first"
service("3:2") // => "second"
service("21:20") // => "first"
service("21:22") // => "second"

There's no need to check if the passed parameter is valid - the score will be always provided in
 correct syntax and you don't need to check if one of the players has already won - that won't be the case.

P.S. The game ends when one of the players reaches 21 points with minimum 2-point lead. 
If there's a current score of 20:20, the winner will be the first player to reach 2-point lead.

*/


// function service will take a string that has the score as a string in the format "first:second"
// service will return a string of who is serving, either "first" or "second"
// before comparing, the score needs to be parsed into numbers

// THIS JUST IN: NOT NECESSARILY because the first person's score can be double or single digits. 
// need to slice anything before and after':''

// first person's score = score.slice(0,score.indexOf(':'))
// second person's score = score.slice(score.indexOf(':') + 1) 


// they swap every 5 until the score is 20:20 (or 40 turns)
// they swap every 2 after
// breaking it down:

// serveNum --> server 
// 0 - 4 --> 'first'
// 5 - 9 --> 'second'
// 10 - 14 --> 'first'
// 15 - 19 --> 'second'
// 20 - 24 --> 'first'
// 25 - 29 --> 'second'
// 30 - 34 --> 'first'
// 35 - 39 --> 'second'
// 40 - 41 --> 'first'
// 42 - 43 --> 'second'
// 44 - 45 --> 'first'
// 46 - 47 --> 'second'
// 48 - 49 --> 'first'
// 50 - 51 --> 'second'

// etc... 

// function service(score) {

// 	var firstScore = parseInt(score.slice(0, score.indexOf(':'))),
// 		secondScore = parseInt(score.slice(score.indexOf(':') + 1)),
// 		serveNum = firstScore + secondScore,
// 		counter = 1.0;

// 	if (serveNum >= 40) {
// 		for (i = 0; i < serveNum - 40; i++) {
// 			counter += 0.5;
// 		}	
// 	}
// 	else {
// 		for (i = 0; i < serveNum; i++) {
// 			counter += 0.20000001;
// 		}
// 	}

// 	var isFirst = Math.floor(counter) % 2;

// 	return isFirst ? 'first' : 'second'

// }

// refactor using best practices. apparently there were some math things i just couldn't comprehend on my own


function service(score) {

	var scores = score.split(':'),
		serveNum = +scores[0] + +scores[1]

	return Math.floor(serveNum / (serveNum < 40 ? 5 : 2)) % 2 === 0 ? 'first' : 'second';

}


