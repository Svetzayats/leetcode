/**
 * Write a function that reverses a string.
 * The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 */
const reverseString = function (s) {
    return s.reverse();
};

/**
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */
const reverseInteger = function (integer) {
    const max = Math.pow(2, 31) - 1;
    const min = Math.pow(-2, 31);
    const sign = x < 0 ? '-' : '';
    const arr = String(Math.abs(x)).split('');

    const res = sign + Number(arr.reverse().join(''));

    if (res > max || res < min) {
        return 0;
    } else {
        return res;
    }
};
