/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 */

function isValid(s) {
    if (s.length % 2 !== 0) return false;

    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (brackets[s[i]]) {
            stack.push(s[i]);
        } else {
            if (brackets[stack.pop()] !== s[i]) {
                return false;
            }
        }
    }

    return !stack.length;
}
