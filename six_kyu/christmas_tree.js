// Description:

// Create a function christmasTree(height) that returns a christmas tree of the correct height

// christmasTree(5) should return:

//     *    
//    ***   
//   *****  
//  ******* 
// *********


// Height passed is always an integer between 0 and 100.

// Use \n for newlines between each line.

// Pad with spaces so each line is the same length. The last line having only stars, no spaces.



// christmasTree takes a positive integer between 0 and 100 and returns multiple strings to compose a christmas tree
// each line will have an odd number of stars
// the number of stars repeats as does the padding before and after each start to create symmetry (repeats = for loops)
// the max length of the christmas tree is always the base
// the top of the tree always has 1 star, and each line after adds 2 more (one on each side to keep symmetry)


// the padding on each side of the stars is always (height - 1) per line
// so when height = 5, padding on line 5 = 0 and padding on line 1 = 4.

// building line 1 would look like (assuming i = 0)
// padding of (height - (i + 1)) + 
// 1 star + (2 x i) stars + 
// padding of (height - (i +1))

// line 2 would look like (assuming i = 1)
// padding of (height - (i + 1)) + 
// 1 star + (2 x i) stars + 
// padding of (height - (i + 1))

// line n would look like (assuming i = n - 1)
// padding of (height - (i + 1)) + 
// 1 star + (2 x i) stars + 
// padding of (height - (i + 1))

// probably need a padding function, which just returns the numbers of spaces for that line on each side;
// could use a star function too with the same logic


// function pad(num) {
// 	var str = '';
// 	for (i = 0; i < num; i++) {
// 		str += ' ';
// 	}
// 	return str;
// }

// function star(num) {
// 	var str = '*';
// 	for (i = 0; i < num; i++) {
// 		str += '**';
// 	}
// 	return str;
// }

// function pad(num) {
// 	var str = ''
// 	for (i = 0; i < num; i++) {
// 		str += ' '
// 	}
// 	return str;
// }

// // this code returns the proper solution for height = 5
// 	// console.log(pad(4) + star(0) + pad(4))
// 	// console.log(pad(3) + star(1) + pad(3))
// 	// console.log(pad(2) + star(2) + pad(2))
// 	// console.log(pad(1) + star(3) + pad(1))
// 	// console.log(pad(0) + star(4) + pad(0))
 
// // run a for loop that compiles with the build construction as noted above
// 	// pad is always height - (i + 1) 
// 	// star is always i

// function christmasTree(height) {
	
// 	var tree = '';
// 	for (i = 0; i < height; i++) {
// 		tree += pad(height - i - 1);
// 		tree += star(i);
// 		tree += pad(height - i - 1);
// 		tree +=  '\n';
// 	}
// 	return tree;
// }



// NEW APPROACH:

//     *    
//    ***   
//   *****  
//  ******* 
// *********

// nested for loops
// first for loop covers the height: for (i = 0; i < height; i++)
// when i is 0, only 1 star needs to be printed with 0 padding
// when i is 1, 3 stars need to be printed with 

function christmasTree (height) {
		

	for (i = 0; i < height; i++) {

		var tree = ''

		var spaces = height - 1 - i;
		var stars = 1 + i * 2;

		for (j = 0; j < spaces; j++) {
			tree += ' ';
		}

		for (k = 0; k < stars; k++) {
			tree += '*';
		}

		for (l = 0; l < spaces; l++) {
			tree += ' ';
		}

		console.log(tree);
	}
}





