/**
 * Determine if a 9 x 9 Sudoku board is valid.
 * Only the filled cells need to be validated according to the following rules:
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 */

const isValidSudoku = function (board) {
    const size = board.length;
    // validate rows and columns
    for (let i = 0; i < size; i++) {
        // check row
        if (!isValidArea(board[i])) {
            return false;
        }

        // check column
        const column = [];
        for (let j = 0; j < size; j++) {
            column.push(board[j][i]);
        }

        if (!isValidArea(column)) {
            return false;
        }
    }

    // validate 3x3 blocks
    const block1 = rowsToBlocks(board.slice(0, 3));
    const block2 = rowsToBlocks(board.slice(3, 6));
    const block3 = rowsToBlocks(board.slice(6, 9));

    for (let i = 0; i < 3; i++) {
        if (!isValidArea(block1[i])) {
            return false;
        }

        if (!isValidArea(block2[i])) {
            return false;
        }

        if (!isValidArea(block3[i])) {
            return false;
        }
    }

    return true;
};

// validate field - array of symbols, doesn't count dots
const isValidArea = function (area) {
    const digits = area.filter((elem) => elem !== '.');
    return new Set(digits).size === digits.length;
};

const rowsToBlocks = function (rows) {
    const block1 = [];
    const block2 = [];
    const block3 = [];

    rows.forEach((row) => {
        row.forEach((elem, index) => {
            if (index < 3) {
                block1.push(elem);
            } else if (index < 6) {
                block2.push(elem);
            } else {
                block3.push(elem);
            }
        });
    });
    return [block1, block2, block3];
};

const board1 = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '6', '.', '.', '.', '.', '.', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

const board2 = [
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

const board3 = [
    ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
    ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
    ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
    ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
    ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
    ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.']
];
