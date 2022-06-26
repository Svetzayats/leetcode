/**
 * A single roll operation on a string is a circular increment
 * of each character by one. Looking at the english alphabet,
 * characters in the range ascii[a-z] a becomes b, b becomes c,
 * z becomes a
 * Given an array of integers named shifts, perform a roll operation
 * on the first roll[i] characters of str for each element i in the array.
 * Given a zero indexed string, an operation roll[i] affects characters
 * at positon 0 through roll[i-1]
 * str - string
 * shifts - array of position symbols, that should be shift
 * roll('abz', [3, 2, 1]) // dda
 * roll('abc', [1, 2, 3]) // ddd
 */

const codeZ = 122;
const lengthOfAlphabet = 26;

function roll(str, shifts) {
    if (!str || !shifts || !shifts.length) return str;

    const arr = new Array(str.length).fill(0);

    // calculates roll for each position
    shifts.forEach((shift) => {
        if (shift - 1 > arr.length) {
            arr[arr.length - 1]++;
        } else {
            arr[shift - 1]++;
        }
    });

    const resShift = arr.map((elem) => elem % lengthOfAlphabet);

    let res = [];
    let roll = 0;

    for (let i = resShift.length - 1; i >= 0; i--) {
        roll = (roll + resShift[i]) % lengthOfAlphabet;
        let suggest = str[i].charCodeAt() + roll;
        if (suggest > codeZ) {
            suggest -= lengthOfAlphabet;
        }
        res.push(String.fromCharCode(suggest));
    }

    return res.reverse().join('');
}
