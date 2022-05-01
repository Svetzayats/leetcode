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

/**
 * Given a string s, find the first non-repeating character in it and return its index.
 * If it does not exist, return -1.
 */

// solution with object
const firstUniqChar = function (s) {
    const set = {};
    const array = s.split('');

    array.forEach((elem) => {
        set[elem] ? set[elem]++ : (set[elem] = 1);
    });

    for (let i = 0; i < array.length; i++) {
        if (set[array[i]] === 1) {
            return i;
        }
    }

    return -1;
};

// solution with indexies
const firstUniqCharIndex = function (s) {
    for (i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
};

/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */
const isAnagram = function (s, t) {
    const clearStrS = s
        .replace(/[^\w]/g)
        .toLowerCase()
        .split('')
        .sort()
        .join('');
    const clearStrT = t
        .replace(/[^\w]/g)
        .toLowerCase()
        .split('')
        .sort()
        .join('');

    return clearStrS === clearStrT;
};

// interesting
const isAnagramObject = function (s, t) {
    const obj = {};
    const arr1 = s
        .replace(/[^\w]/g)
        .split('')
        .map((elem) => elem.toLowerCase());
    const arr2 = t
        .replace(/[^\w]/g)
        .split('')
        .map((elem) => elem.toLowerCase());

    arr1.forEach((elem) => {
        obj[elem] ? obj[elem]++ : (obj[elem] = 1);
    });

    arr2.forEach((elem) => {
        obj[elem] ? obj[elem]-- : (obj[elem] = 1);
    });

    return Object.values(obj).filter((elem) => elem !== 0).length;
};
