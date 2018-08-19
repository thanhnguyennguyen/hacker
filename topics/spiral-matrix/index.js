const goLeft = (num, val = 1, col = 0, row = 0, result = [[]]) => {
    return spiral(num, val + 1, col - 1, row, true, result);
}

const goRight = (num, val = 1, col = 0, row = 0, result = [[]]) => {
    return spiral(num, val + 1, col + 1, row, true, result);
}

const goDown = (num, val = 1, col = 0, row = 0, result = [[]]) => {
    return spiral(num, val + 1, col, row + 1, false, result);
}

const goUp = (num, val = 1, col = 0, row = 0, result = [[]]) => {
    return spiral(num, val + 1, col, row - 1, false, result);
}

const visitedPosition = (col, row, result) => {
    return (result[row] !== undefined && result[row][(col)] !== undefined);
}

const spiral = (num, val = 1, col = 0, row = 0, horizontal = true, result = [[]]) => {
    // put your code here to address problems
    if (num < 1) return [[]];

    if (!result[row]) result[row] = [];
    result[row][col] = val;
    if (val === Math.pow(num, 2)) {
        return result;
    }
    if (horizontal) {
        if ((col + 1) < num &&  !visitedPosition(col + 1, row, result)) {
            return goRight(num, val, col, row, result);
        }
        if ((col - 1) >= 0 &&  !visitedPosition(col - 1, row, result)) {
            return goLeft(num, val, col, row, result);
        }
        if ((row + 1) < num &&  !visitedPosition(col, row + 1, result)) {
            return goDown(num, val, col, row, result);
        }
        if ((row - 1) >= 0 &&  !visitedPosition(col, row - 1, result)) {
            return goUp(num, val, col, row, result);
        }
    } else {
        if ((row + 1) < num &&  !visitedPosition(col, row + 1, result)) {
            return goDown(num, val, col, row, result);
        }
        if ((row - 1) >= 0 &&  !visitedPosition(col, row - 1, result)) {
            return goUp(num, val, col, row, result);
        }
        if ((col + 1) < num &&  !visitedPosition(col + 1, row, result)) {
            return goRight(num, val, col, row, result);
        }
        if ((col - 1) >= 0 &&  !visitedPosition(col - 1, row, result)) {
            return goLeft(num, val, col, row, result);
        }

    }
    
}

const spiral2 = num => {
    let result = [],
        startCol = 0,
        endCol = num - 1,
        startRow = 0,
        endRow = num - 1,
        counter = 1;
    if (num < 1) return [[]];
  
    for(let i = 0; i < num; i++)result.push([]);

    while(startCol <= endCol && startRow <= endRow) {
        // go right
        for (let i = startCol; i <= endCol; i++) result[startRow][i] = counter++;
        startRow++;
        //go down
        for (let i = startRow; i <= endRow; i++) result[i][endCol] = counter++;
        endCol--;
        //go left
        for (let i = endCol; i >= startCol; i--) result[endRow][i] = counter++;
        endRow--;
        // go up
        for (let i = endRow; i >= startRow; i--) result[i][startCol] = counter++;
        startCol++;
    }
    return result;
}

module.exports = {spiral, spiral2};
