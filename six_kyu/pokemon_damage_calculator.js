/*

Description:

It's a Pokemon battle! Your task is to calculate the damage that a particular move would do using the following formula 
(not the actual one from the game):

damage = 50 * (attack/defense) * effectiveness
Make sure to round the result up to the nearest integer.

attack = your attack power
defense = the opponent's defense
effectiveness = the effectiveness of the attack based on the matchup (see explanation below)
Effectiveness:

Attacks can be super effective, neutral, or not very effective depending on the matchup. For example, water would be super 
effective against fire, but not very effective against grass.

Super effective: 2x damage
Neutral: 1x damage
Not very effective: 0.5x damage
To prevent this kata from being tedious, you'll only be dealing with four types: fire, water, grass, and electric. 
Here is the effectiveness of each matchup:

fire > grass 
fire < water 
fire = electric

water < grass 
water < electric

grass = electric

For this kata, any type against itself is not very effective. Also, assume that the relationships between different types 
are symmetric (if a is super effective against b, then b is not very effective against a).


the function takes in your type and the opponent's type as strings and the attack and defense as numbers.
returns a round number based on damage formula above

how to organize the effectiveness is the biggest task
four types, each with a relationship to all four types
effectiveness has 3 outcomes, based on relationship between yourType and oppType

if yourType > oppType, effectiveness = 2
if yourType = oppType, effectiveness = 1
if yourType < oppType, effectiveness = .5

what's the best way to organize the comparisons?

4x4 comparison array?


create a 4x4 array of outcomes with the following format (assuming the rows are your type and the columns are the opp type)

		fire	electric	grass	water
fire

electric

grass

water

extract the rows into an object called rows with the key being the element name and index corresponding to the row to match the format above


*/

function calculateDamage (yourType, opponentType, attack, defense) {

	var effectiveness = getEffectiveness(yourType, opponentType);
	
	return Math.ceil(50 * (attack/defense) * effectiveness);

}

function getEffectiveness(typeA, typeB) {
	var outcomes = [[0.5,1.0,2.0,0.5],
					[1.0,0.5,1.0,2.0],
					[0.5,1.0,0.5,2.0],
					[2.0,0.5,0.5,0.5]];

	var yourRow = {
		fire: outcomes[0],
		electric: outcomes[1],
		grass: outcomes[2],
		water: outcomes[3],
	}

	var yourEffectiveness = {
		fire: yourRow[typeA][0],
		electric: yourRow[typeA][1],
		grass: yourRow[typeA][2],
		water: yourRow[typeA][3],
	}

	return yourEffectiveness[typeB];
}


// BEST PRACTICE SOLUTION 

// var effects = {
//   fire : {
//     fire : 0.5,
//     grass : 2,
//     water : 0.5,
//     electric : 1
//   },
//   grass : {
//     fire : 0.5,
//     grass : 0.5,
//     water : 2,
//     electric : 1
//   },
//   water : {
//     fire : 2,
//     grass : 0.5,
//     water : 0.5,
//     electric : 0.5
//   },
//   electric : {
//     fire : 1,
//     grass : 1,
//     water : 2,
//     electric : 0.5
//   }
// };

// function calculateDamage(yourType, opponentType, attack, defense){
//   return Math.ceil(50 * (attack/defense) * effects[yourType][opponentType]);
// }

// the readability is pretty difficult with the outcomes matrix. much better to use objects within objects:
// in retrospect, i was pretty close, just broke out the objects into two separate ones when i could have just nested them
// also the outcomes 4x4 matrix was unnecessary when the same thing can be represented within nested objects. 
