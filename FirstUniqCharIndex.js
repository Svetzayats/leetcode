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
