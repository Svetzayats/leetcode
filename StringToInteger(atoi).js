/**
 * Implement the myAtoi(string s) function,
 * which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).
 * string consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.
 */

// first solution
const myAtoi = function (s) {
    const min = Math.pow(-2, 31);
    const max = Math.pow(2, 31) - 1;
    const array = [];
    const stringArray = s.trim().split('');
    let sign = '';

    for (let i = 0; i < stringArray.length; i++) {
        const symbol = stringArray[i];

        if (symbol === '+' || symbol === '-') {
            if (!array.length) {
                if (!sign) {
                    sign = symbol;
                    continue;
                } else {
                    return 0;
                }
            } else {
                break;
            }
        }

        if (
            ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(symbol)
        ) {
            array.push(symbol);
        } else {
            break;
        }
    }

    if (!array.length) {
        return 0;
    }

    const res = Number(sign + array.join(''));

    if (res > max) {
        return max;
    }

    if (res < min) {
        return min;
    }

    return res;
};

// solution without trim and with switch and labels
const myAtoi1 = function (s) {
    const min = Math.pow(-2, 31);
    const max = Math.pow(2, 31) - 1;
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let res = '';
    let sign = '';

    main: for (let i = 0; i < s.length; i++) {
        const symbol = s[i];

        switch (symbol) {
            case ' ':
                if (!res && !sign) {
                    continue main;
                } else {
                    break main;
                }
            case '+':
            case '-':
                if (!res && !sign) {
                    sign = symbol;
                    continue main;
                } else {
                    break main;
                }
            case '.':
                break main;
            default:
                if (digits.includes(symbol)) {
                    res += symbol;
                    continue main;
                } else {
                    break main;
                }
        }
    }

    if (!res.length) {
        return 0;
    }

    res = Number(sign + res);

    if (res < min) {
        return min;
    }

    if (res > max) {
        return max;
    }

    return res;
};

// easy solution with parseInt
const myAtoi2 = function (s) {
    const min = Math.pow(-2, 31);
    const max = Math.pow(2, 31) - 1;
    const res = parseInt(s);

    if (Number.isNaN(res)) return 0;
    if (res < min) return min;
    if (res > max) return max;

    return res;
};
