/*

Description:

Steve and Josh are bored and want to play something. They don't want to think too much, so they come up with a really simple game. 
Write a function called winner and figure out who is going to win.

They are dealt the same number of cards. They both flip the card on the top of their deck. Whoever has a card with higher value 
wins the round and gets one point (if the cards are of the same value, neither of them gets a point). After this, the two cards 
are discarded and they flip another card from the top of their deck. They do this until they have no cards left.

deckSteve and deckJosh are arrays representing their decks. They are filled with "cards", represented by a single character. 
The card rank is as follows (from lowest to highest):

'2','3','4','5','6','7','8','9','T','J','Q','K','A'
Every card may appear in the deck more than once. Figure out who is going to win and return who wins and with what score:

"Steve wins x to y" if Steve wins, where x is Steve's score, y is Josh's score
"Josh wins x to y" if Josh wins, where x is Josh's score, y is Steve's score
"Tie" if the score is tied at the end of the game.
Example:

Steve is dealt ['A','7','8']
Josh is dealt  ['K','5','9']
In first round, ace beats king and Steve gets one point.
In second round, 7 beats 5 and Steve gets his second point.
In third round, 9 beats 8 and Josh gets one point.

You should return "Steve wins 2 to 1".

*/


// function winner takes two arrays, deckSteve and deckJosh as arguments and returns a string and integers in the following format:

// "Steve wins x to y" if Steve wins, where x is Steve's score, y is Josh's score
// "Josh wins x to y" if Josh wins, where x is Josh's score, y is Steve's score
// "Tie" if the score is tied at the end of the game.

// need to build a map to convert the letter cards into numbers before doing the comparison.
// store steveScore and joshScore into variables that increase +1 after each comparison

// a for loop can compare cards[deckSteve[i]] to cards[deckJosh[i]]
// if cards[deckSteve[i]] > cards[deckJosh[i]] steveScore ++
// if cards[deckJosh[i]] > cards[deckSteve[i]] joshScore ++
// if cards[deckJosh[i]] > cards[deckSteve[i]] nothing happens

// winning statement could be created with a ternary operator within a ternary operator (or if elseif else lolololol #style)

// return winningStatement


function winner (deckSteve, deckJosh) {

	var steveScore = 0, joshScore = 0, winningStatement,
	
	cards = {
		2: 2,
		3: 3,
		4: 4,
		5: 5,
		6: 6,
		7: 7,
		8: 8,
		9: 9,
		T: 10,
		J: 11,
		Q: 12,
		K: 13,
		A: 14
	};

	for (i = 0; i < deckSteve.length; i++) {
		if (cards[deckSteve[i]] > cards[deckJosh[i]]) {
			steveScore++;
		} 
		else if (cards[deckJosh[i]] > cards[deckSteve[i]]) {
			joshScore++;	
		} 
	}

	steveScore === joshScore ? winningStatement = "Tie" : 
	steveScore > joshScore ? winningStatement = ("Steve wins " + steveScore + " to " + joshScore) : 
						 	 winningStatement = ("Josh wins " + joshScore + " to " + steveScore)

	return winningStatement;
}



// best practice uses cards as an array and uses indexOf --> why?

// comparison would be if (rank.indexOf(deckSteve[i] > rank.indexOf(deckJosh[i]))) steveScore ++

// expand to make a function generateDecks that takes an integer 'deckSize' input and returns an arrays to use for winner
// the two arrays will be the length of the integer input with random cards from the deck

// lets use an array instead of an object this time
// var cards = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
// define two empty array newDeck for the generator to push to
// the generator must go through cards and pick one at random to put in newDeck
// the generator stops when newDeck.length === deckSize

// return newDeck

// how can you pick a random element of the array?

// var item = items[Math.floor(Math.random()*items.length)];

function generateDeck (deckSize) {

	var newDeck = [],
		cards = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

	for (i = 0; i < deckSize; i++) {
		newDeck.push(cards[Math.floor(Math.random() * cards.length)]);
	}

	return newDeck;
}










