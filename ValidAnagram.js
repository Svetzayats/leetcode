/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */
const isAnagram = function (s, t) {
    const clearStrS = s
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
    const clearStrT = t
        .replace(/[^\w]/g, '')
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
        .replace(/[^\w]/g, '')
        .split('')
        .map((elem) => elem.toLowerCase());
    const arr2 = t
        .replace(/[^\w]/g, '')
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
