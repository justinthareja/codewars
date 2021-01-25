// Selection Grid Layout in text:

// | Ryu | E.Honda | Blanka | Guile | Balrog | Vega |
// | Ken | Chun Li | Zangief | Dhalsim | Sagat | M.Bison |
//     Input

// the list of game characters in a 2x6 grid;
// the initial position of the selection cursor(top - left is(0, 0));
// a list of moves of the selection cursor(which are up, down, left, right);
// Output

// the list of characters who have been hovered by the selection cursor after all the moves(ordered and with repetition, all the ones after a move, wether successful or not, see tests);
// Rules

// Selection cursor is circular horizontally but not vertically!

// As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost(examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

//     Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

// Test

// For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

//     Notice: changing some of the input data might not help you.

//         Examples

// 1.

// fighters = [
//     ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//     ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0, 0)
// moves = ['up', 'left', 'right', 'left', 'left']
// then I should get:

// ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
// as the characters I've been hovering with the selection cursor during my moves. 
// Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

// 2.

// fighters = [
//     ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//     ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0, 0)
// moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
// Result:

// ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']
// OFF - TOPIC

// Some music to get in the mood for this kata :

//     Street Fighter 2 - selection theme

function streetFighterSelection(fighters, position, moves) {
    let [x, y] = position;
    const leftBoundary = 0;
    const topBoundary = 0;
    const rightBoundary = fighters[0].length - 1;
    const bottomBoundary = fighters.length -1;

    const directions = {
        left() {
            if (x == leftBoundary) {
                x = rightBoundary;
            } else {
                x--;
            }
        },

        right() {
            if (x == rightBoundary) {
                x = leftBoundary;
            } else {
                x++;
            }
        },

        up() {
            if (y > topBoundary) {
                y--;
            }
        },

        down() {
            if (y < bottomBoundary) {
                y++;
            }
        }
    };

    function getFighter() {
        return fighters[y][x];
    }

    return moves.map((move) => {
        directions[move]();
        return getFighter();
    });

}

var fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

var moves = ['up', 'left', 'right', 'left', 'left'];

console.log(streetFighterSelection(fighters, [0, 0], moves), ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']);

moves = [];
console.log(streetFighterSelection(fighters, [0, 0], moves), []);

moves = ["left", "left", "left", "left", "left", "left", "left", "left"];
console.log(streetFighterSelection(fighters, [0, 0], moves), ['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog']);

moves = ["right", "right", "right", "right", "right", "right", "right", "right"];
console.log(streetFighterSelection(fighters, [0, 0], moves), ['E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega', 'Ryu', 'E.Honda', 'Blanka']);

moves = ["up", "left", "down", "right", "up", "left", "down", "right"];
console.log(streetFighterSelection(fighters, [0, 0], moves), ['Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken']);

moves = ["down", "down", "down", "down"];
console.log(streetFighterSelection(fighters, [0, 0], moves), ['Ken', 'Ken', 'Ken', 'Ken']);
console.log(streetFighterSelection(fighters, [0, 0], moves), ['Ryu', 'Ryu', 'Ryu', 'Ryu']);