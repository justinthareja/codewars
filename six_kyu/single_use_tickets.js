// time to learn the constructor functions. known so far: constructor functions are an easy way to generate new objects
// and should be used when you need to generate a large amount of objects that share the same properties. instead of 
// creating a new object each time, you just invoke a constructor function with arguments as some but not necessarily
// all individual properties you want to find within the object. Sometimes the properties can be exactly the same


// lets create our first constructor function to make new snowboards. each snowboard object will have the following three 
// properties: brand, size, flex. Each property will be passed in as a parameter of the Snowboard constructor function.

// ez. now add a chirp function that remains constant among all snowboards. this chirp function will console.log a 
// pro callout and up your GNAR points. All snowboard objects will have a chirp ready upon manufacture

function Snowboard (theBrand, theSize, theFlex) {
	this.brand = theBrand;
	this.size = theSize;
	this.flex = theFlex;
	this.chirp = function (name) {
		console.log('HEY', name, 'I CANT BELIEVE YOURE A PRO, IM SOOOOO MUCH BETTER THAN YOU');
	}
}

// new Snowboard ('Burton', 151, 'Medium');


// ok let's take it to the real problem:

// You're hosting an event, and the admission tickets are expensive. Groups of people are trying to cheat the system by using 
// the same tickets multiple times. Stop them!

// 1) Create a constructor function called Ticket that takes one parameter, code, and creates a Ticket object. 
// The Ticket object will have the following parameters:

// code : a string that stores the ticket code
// used : a boolean that stores whether or not the ticket has been used yet
// useTicket: a function registers that the ticket has been used and prevents reuse or tampering
// Note: Do not let anyone tamper with used tickets. Once a ticket has been used, don't let anyone change it by writing:
// ticket.used = false


// within constructor functions, 'this' always refers to the object that will be created. when creating a new object, it always
// makes sense to store it somehow so you can peep the properties later.

function Ticket(theCode) {
  this.code = theCode;
  this.used = false;
  this.useTicket = function () {
  	Object.defineProperty(this, 'used', {
  	  value: true,
  	  writable: false
  	});
  }
}

// each property can always be writable, enumerable, and configurable.
// once ticket.used = true, we have to set it as non- writable. (should be done within the useTicket function)


// 2) Create a function called validTicket to check whether the ticket is valid and return true or false. For a ticket to be 
// valid, the ticket code must match the correct code, and the ticket must be unused.

function validTicket(ticket, correctCode){
	return ticket.code === correctCode && ticket.used === false;
}


// BEST PRACTICE NOTES:
// ticket.used === false can also be noted as !ticket.used
// Object.freeze can be used in place of Object.defineProperty
