/**
 * Count the maximum number of repeating symbols in a string.
 */

function maxNumberOfRepeats(str) {
    if (!str) {
        return 0;
    }

    let res = 0;
    let s = str;

    while (s.length) {
        let newStr = s.replaceAll(s[0], '');
        res = Math.max(res, s.length - newStr.length);
        s = newStr;
    }

    return res;
}
