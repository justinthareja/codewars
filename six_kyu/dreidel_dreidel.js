// gamble takes 3 arguments: an array of rolls, the current pot, starting currency
// gamble returns an integer representing ending currency
// whatever happens to the pot --> the opposite happens to your acct (can get clever with this logic?)
// return acct

function gamble(rolls, startingAcct, startingPot) {
	// declare var pot to store all the changes to the pot
	// declare var acct to store all changes to your account 

	console.log('the rolls are:');
	rolls.forEach(function (element) {
		console.log(element);
	});
	
	console.log('the starting account is', startingAcct);
	console.log('the starting pot is', startingPot);

	var pot = startingPot;
	var acct = startingAcct;
	
	// create an obj that stores outcomes of each roll as a new method

	var changes = new Object
	
	changes.nun = function () {
		console.log('executing Nun');
		acct = acct;
		pot = pot;
		console.log('the account after executing Nun is', acct);
		console.log('the pot after executing Nun is', pot);
	}
	changes.gimel = function () {
		console.log('executing Gimel');
		acct += pot;
		pot = 0;
		console.log('the account after executing Gimel is', acct);
		console.log('the pot after executing Gimel is', pot);
	}
	changes.hei = function() {
		console.log('executing Hei');
		acct += Math.floor(pot/2);
		pot = Math.floor(pot/2)
		console.log('the account after executing Hei is', acct);
		console.log('the pot after executing Hei is', pot);
	}
	changes.shin = function () {
		console.log('executing Shin');
		acct --;
		pot ++;
		console.log('the account after executing Shin is', acct);
		console.log('the pot after executing Shin is', pot);
	}

	// run a forEach loop on the array of rolls to alter pot and acct

	rolls.forEach(function (roll) {
		changes[roll.toLowerCase()]();
	})

	return acct;
}


// gamble(['Hei', 'Shin'], 10, 20); 
// gamble(['Hei', 'Hei'], 10, 20) ;
// gamble(['Nun', 'Nun', 'Shin', 'Gimel', 'Shin'], 10, 20);
// gamble(['Shin', 'Shin', 'Hei'], 10, 20)

