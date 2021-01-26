function superStreetFighterSelection(fighters, position, moves) {
    let [y, x] = position;
    const leftBoundary = 0;
    const topBoundary = 0;
    const rightBoundary = fighters[0].length - 1;
    const bottomBoundary = fighters.length - 1;

    const directions = {
        left() {
            if (x == leftBoundary) {
                x = rightBoundary;
            } else {
                x--;
            }

            if (getFighter() == "") {
                this.left();
            }
        },

        right() {
            if (x == rightBoundary) {
                x = leftBoundary;
            } else {
                x++;
            }

            if (getFighter() == "") {
                this.right();
            }
        },

        up() {
            if (y > topBoundary) {
                y--;
            }

            if (getFighter() == "") {
                this.down();
            }
        },

        down() {
            if (y < bottomBoundary) {
                y++;
            }

            if (getFighter() == "") {
                this.up();
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
