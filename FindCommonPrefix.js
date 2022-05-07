/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */

// first solution with filter
const longestCommonPrefix = function (strs) {
    if (!strs.length) return '';

    if (strs.length === 1) return strs[0];

    let prefix = '';

    for (let i = 0; i < strs[0].length; i++) {
        const symbol = strs[0][i];

        if (!symbol) {
            return '';
        }
        const arr = strs.filter((str) => str[i] === symbol);

        if (arr.length === strs.length) {
            prefix += symbol;
        } else {
            break;
        }
    }

    return prefix;
};

// solution with nested cycle
const longestCommonPrefix2 = function (strs) {
    if (!strs.length) return '';
    if (strs.length === 1) return strs[0];
    if (strs.filter((str) => !str.length).length) return '';

    const sorted = strs.sort((a, b) => a.length - b.length);
    let prefix = '';

    for (let i = 0; i < sorted[0].length; i++) {
        const symbol = strs[0][i];
        for (let j = 1; j < sorted.length; j++) {
            if (sorted[j][i] !== symbol) {
                return prefix;
            }
        }
        prefix += symbol;
    }

    return prefix;
};
