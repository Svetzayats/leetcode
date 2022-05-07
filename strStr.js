/**
 *
 * Given two strings needle and haystack,
 * return the index of the first occurrence of needle in haystack,
 * or -1 if needle is not part of haystack.
 * For the purpose of this problem, we will return 0 when needle is an empty string.
 */

// of course we can use str.indexOf(substr)

const strStr = function (haystack, needle) {
    if (!needle.length) return 0;

    if (needle.length > haystack.length) return -1;

    for (let i = 0; i < haystack.length; i++) {
        for (let k = 0; k < needle.length; k++) {
            if (needle[k] !== haystack[i + k]) {
                break;
            }

            if (k === needle.length - 1) {
                return i;
            }
        }
    }

    return -1;
};
