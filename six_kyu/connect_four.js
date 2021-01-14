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
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ];


    this.checkCols = function checkCols() {
        var count = 0;
        var hasWin = false;

        for (let col = 0; col < 7; col++) {
            count = 0;

            for (let row = this.board.length -1; row >= 0; row--) {
                let piece = this.board[row][col];

                if (piece == this.getPlayer()) {
                    count++
                }

                if (count == 4) {
                    hasWin = true;
                }
            }
        }

        return hasWin;
    };

    this.checkRows = function checkRows() {
        var count = 0;
        var hasWin = false;

        for (let row = this.board.length - 1; row >= 0; row--) {
            count = 0;
        
            for (let col = 0; col < 7; col++) {
                let piece = this.board[row][col];

                if (piece == this.getPlayer()) {
                    count++
                }

                if (count == 4) {
                    hasWin = true;
                }
            }
        }

        return hasWin;
    }

    this.checkDiagonals = function checkDiagonals() {
        return false;
    };

    this.printBoard = function printBoard() {
        var print = "";

        this.board.forEach(function printCol(col) {
            print += JSON.stringify(col);
            print += "\n";
        });

        console.log(print);
    }

    this.hasWinner = function hasWinner() {
        return this.checkCols() || this.checkRows() || this.checkDiagonals();
    };

    this.isValidColumn = function isValidColumn(col) {
        for (let row = this.board.length - 1; row >= 0; row--) {
            if (this.board[row][col] == 0) {
                return true;
            }
        }

        return false;
    };

    this.setPiece = function setPiece(col) {
        for (let row = this.board.length - 1; row >= 0; row--) {
            if (this.board[row][col] == 0) {
                this.board[row][col] = this.getPlayer();
                return;
            }
        }

        console.error("Couldn't set piece");
    };

    this.getPlayer = function getPlayer() {
        return this.isPlayerOnesTurn ? 1 : 2;
    };

    this.getOtherPlayer = function getOtherPlayer() {
        return this.isPlayerOnesTurn ? 2: 1;
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

    return `Player ${this.getOtherPlayer()} has a turn`;
};


console.log("~~~~~~~~~ NEW GAME ~~~~~~~")
// new
// creates a new object
// links prototype chain to that object
// invokes function with this = {}
// returns return value || this
var game = new Connect4();
console.log(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game.play(0), "Player 2 has a turn", "Should return 'Player 2 has a turn'")


console.log("~~~~~~~~~ NEW GAME ~~~~~~~")
var game2 = new Connect4();
console.log(game2.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game2.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game2.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game2.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game2.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game2.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game2.play(0), "Player 1 wins!", "Should return 'Player 1 wins!'")

console.log("~~~~~~~~~ NEW GAME ~~~~~~~")
var game3 = new Connect4();
console.log(game3.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game3.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game3.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game3.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game3.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game3.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game3.play(4), "Column full!", "Should return 'Column full!'")

console.log("~~~~~~~~~ NEW GAME ~~~~~~~")
var game4 = new Connect4();
console.log(game4.play(1), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game4.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game4.play(2), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game4.play(2), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game4.play(3), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
console.log(game4.play(3), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
console.log(game4.play(4), "Player 1 wins!", "Should return 'Player 1 wins!'")
console.log(game4.play(4), "Game has finished!", "Should return 'Game has finished!'")


console.log("~~~~~~~~~ NEW GAME ~~~~~~~")
var game5 = new Connect4();
game5.play(0);
game5.play(1);
game5.play(0);
game5.play(1);
game5.play(0);
game5.play(1);
console.log(game5.play(0), "Player 1 wins!")
console.log(game5.play(0), "Game has finished!")