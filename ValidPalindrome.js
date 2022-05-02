/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
 * and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

const isPalindrome = function (s) {
    const clearStr = s.replace(/[^\w]|_/g, '').toLowerCase();
    const reversedStr = clearStr.split('').reverse().join('');
    return clearStr === reversedStr;
};

const isPalindromeWithCycle = function (s) {
    const clearStr = s.replace(/[\W]|_/g, '').toLowerCase();
    let left = 0;
    let right = clearStr.length - 1;
    while (left < right) {
        if (clearStr[left] !== clearStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
