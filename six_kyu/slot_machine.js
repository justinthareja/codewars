var reel1 = ["King", "Jack", "Wild", "Bell", "Star", "Seven", "Queen", "Cherry", "Shell", "Bar"];
var reel2 = ["Star", "Bar", "Jack", "Seven", "Queen", "Wild", "King", "Bell", "Cherry", "Shell"];
var reel3 = ["King", "Bell", "Jack", "Shell", "Star", "Cherry", "Queen", "Bar", "Wild", "Seven"];
var spin = [0, 5, 0];

console.log(fruit([reel1, reel2, reel3], spin), 6, "Should return: '6'");

// ********************************************

function fruit(reels, spins) {
    var score = 0;
    var items = spins.map(spinToItem);

    return scoreItems(items);

    // **************************

    function spinToItem(n, i) {
        return reels[i][n];
    }
}

function countItem(obj, item) {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item]++;
    }

    return obj;
}

function makeCountHash(array) {
    return array.reduce(countItem, {});
}

// ['Seven', 'Shell', 'Wild']; -> score;
function scoreItems(items) {
    var counts = makeCountHash(items);

    for (let item in counts) {
        if (counts[item] == 3) {
            return threeOfTheSame(item);
        } 
        
        if (counts[item] == 2) {
            if (item == "Wild") {
                return twoOfTheSame(item);
            } 
            
            if (counts.hasOwnProperty("Wild")) {
                return twoOfTheSamePlusWild(item);
            } 

            return twoOfTheSame(item);
        }
    }

    return 0;
}

function twoOfTheSame(item) {
    var scores = {
        Wild: 10,
        Star: 9,
        Bell: 8,
        Shell: 7,
        Seven: 6,
        Cherry: 5,
        Bar: 4,
        King: 3,
        Queen: 2,
        Jack: 1,
    };

    return scores[item];
}

function twoOfTheSamePlusWild(item) {
    return twoOfTheSame(item) * 2;
}

function threeOfTheSame(item) {
    return twoOfTheSame(item) * 10;
}

