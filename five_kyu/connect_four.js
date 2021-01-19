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
        var columns = [];

        for (let col = 0; col <= 6; col++) {
            let column = [];

            for (let row = this.board.length - 1; row >= 0; row--) {
                let piece = this.getPiece([row, col]);
                column.push(piece)
            }

            columns.push(column);
        }

        columns = columns.map(this.hasFourInARow.bind(this));

        return columns.includes(true);
    };

    this.checkRows = function checkRows() {
        var rows = this.board;

        rows = rows.map(this.hasFourInARow.bind(this));

        return rows.includes(true);
    }

    this.checkDiagonals = function checkDiagonals() {
        var diagonals = [
            // BOTTOM LEFT -> TOP RIGHT
            [ [3, 0], [2, 1], [1, 2], [0, 3] ] ,
            [ [4, 0], [3, 1], [2, 2], [1, 3], [0, 4] ],
            [ [5, 0], [4, 1], [3, 2], [2, 3], [1, 4], [0, 5] ],
            [ [5, 1], [4, 2], [3, 3], [2, 4], [1, 5], [0, 6] ],
            [ [5, 2], [4, 3], [3, 4], [2, 5], [1, 6] ],
            [ [5, 3], [4, 4], [3, 5], [2, 6] ],

            // TOP LEFT -> BOTTOM RIGHT
            [ [2, 0], [3, 1], [4, 2], [5, 3] ],
            [ [1, 0], [2, 1], [3, 2], [4, 3], [5, 4] ],
            [ [0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5] ],
            [ [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6] ],
            [ [0, 2], [1, 3], [2, 4], [3, 5], [4, 6] ],
            [ [0, 3], [1, 4], [2, 5], [3, 6] ]
        ];

        diagonals = diagonals.map(this.getPieces.bind(this));
        diagonals = diagonals.map(this.hasFourInARow.bind(this));

        return diagonals.includes(true);
    };

    this.printBoard = function printBoard() {
        var print = "";

        this.board.forEach(function printRow(col) {
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

    this.hasFourInARow = function hasFourInARow(array) {
        var count = 0;
        var max = 0;
        var target = this.getPlayer();

        array.forEach(function countVal(val) {
            if (val == target) {
                count++;
            } else {
                count = 0;
            }

            if (count > max) {
                max = count;
            }
        });
        
        return max >= 4;
    }

    this.getPieces = function getPieces(coords) {
        return coords.map(this.getPiece.bind(this));
    }

    this.getPiece = function getPiece(coord) {
        var [ row, col ] = coord;

        if (row == null || col == null) {
            throw "Cannot get piece, invalid coordinate";
        }

        return this.board[row][col];
    }

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
