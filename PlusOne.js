/**
 * You are given a large integer represented as an integer array digits,
 * where each digits[i] is the ith digit of the integer.
 * The digits are ordered from most significant to least significant in left-to-right order.
 * The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
 */

// first solution
const plusOne = function (digits) {
    let index = digits.length - 1;
    let needContinue = true;

    do {
        needContinue = plusAtIndex(digits, index);
        index--;
    } while (needContinue);

    return digits;
};

// increase element and report, if we need go further
const plusAtIndex = function (digits, index) {
    if (index < 0) {
        digits.unshift(1);
        return false;
    }
    if (digits[index] === 9) {
        digits[index] = 0;
        return true;
    }
    digits[index]++;
    return false;
};

// more simple solution
const altPlusOne = function (digits) {
    for (let i = digits.length - 1; i > -1; i--) {
        digits[i]++;
        if (digits[i] > 9) {
            digits[i] = 0;
            continue;
        } else {
            break;
        }
    }

    return !digits[0] ? [1, ...digits] : digits;
};
