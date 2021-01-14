// //  TASK
// // The game consists of a grid(7 columns and 6 rows) and two players that
//  take turns to drop their discs.The pieces fall straight down, occupying 
//  the next available space within the column.The objective of the game is to 
//  be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.

// // Your task is to create a Class called Connect4 that has a method called 
// play which takes one argument for the column where the player is going to place their disc.


// // RULES
// // If a player successfully has 4 discs horizontally, vertically or diagonally
//  then you should return "Player n wins!” where n is the current player either 1 or 2.

// // If a player attempts to place a disc in a column that is full then you 
// should return ”Column full!” and the next move must be taken by the same player.

// // If the game has been won by a player, any following moves should return 
// ”Game has finished!”.

// // Any other move should return ”Player n has a turn” where n is the current 
// player either 1 or 2.

// // Player 1 starts the game every time and alternates with player 2.

// // The columns are numbered 0 - 6 left to right.

//



function Connect4() {
    this.isPlayerOnesTurn = true;
    this.board = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
    ];

    this.hasWinner = function hasWinner() {
        // TODO
        return false;
    };

    this.isValidColumn = function isValidColumn(col) {
        var row = this.board[col];
        
        return row.includes(0);
    };

    this.setPiece = function setPiece(col) {
        var row = this.board[col];

        for (let i = 0; i < row.length; i++) {
            if (row[i] == 0) {
                row[i] = 1;
                return;
            }
        }

        console.error("Couldn't set piece");
    };

    this.getPlayer = function getPlayer() {
        return this.isPlayerOnesTurn ? 1 : 2;
    };

    this.togglePlayerTurn = function togglePlayerTurn() {
        this.isPlayerOnesTurn = !this.isPlayerOnesTurn;
    };
};

Connect4.prototype.play = function (col) {
    if (this.hasWinner()) {
        return "Game has finished!";
    }

    if (!this.isValidColumn(col)) {
        return "Column full!";
    }
    
    this.setPiece(col);

    if (this.hasWinner()) {
        return `Player ${this.getPlayer()} wins!`;
    }

    this.togglePlayerTurn();

    return `Player ${this.getPlayer()}'s turn`;
};


console.log("~~~~~~~~~ NEW GAME ~~~~~~~")
// new
// creates a new object
// links prototype chain to that object
// invokes function with this = {}
// returns return value || this
game = new Connect4();
console.log(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game.play(0), "Player 2 has a turn", "Should return 'Player 2 has a turn'")


console.log("~~~~~~~~~ NEW GAME ~~~~~~~")
game = new Connect4();
console.log(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game.play(0), "Player 1 wins!", "Should return 'Player 1 wins!'")

console.log("~~~~~~~~~ NEW GAME ~~~~~~~")
game = new Connect4();
console.log(game.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game.play(4), "Column full!", "Should return 'Column full!'")

console.log("~~~~~~~~~ NEW GAME ~~~~~~~")
game = new Connect4();
console.log(game.play(1), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game.play(2), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game.play(2), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game.play(3), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game.play(3), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game.play(4), "Player 1 wins!", "Should return 'Player 1 wins!'")
console.log(game.play(4), "Game has finished!", "Should return 'Game has finished!'")