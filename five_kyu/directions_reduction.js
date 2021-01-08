
function dirReduc(directions) {
    const opposites = {
        EAST: "WEST",
        WEST: "EAST",
        NORTH: "SOUTH",
        SOUTH: "NORTH"
    };

    let shouldDelete = false;
    
    const reducedDirections = directions.filter((direction, i) => {
        if (shouldDelete) {
            shouldDelete = false;
            return false;
        }

        if (directions[i + 1] == opposites[direction]) { 
            shouldDelete = true;
            return false;
        }

        return true;
    });
    
    if (reducedDirections.length == directions.length) {
        return directions;
    }

    return dirReduc(reducedDirections);
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])