/**
 * Given a non-empty array of integers nums,
 * every element appears twice except for one.
 * Find that single one.
 */

// solution with object
const singleNumberPairs = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    const pairs = {};

    nums.forEach((elem) => {
        pairs[elem] = !pairs[elem];
    });
    for (const [key, value] of Object.entries(pairs)) {
        if (value) {
            return key;
        }
    }
};

// solution with set
const singleNumberSet = function (nums) {
    const set = new Set();

    nums.forEach((elem) => {
        if (set.has(elem)) {
            set.delete(elem);
        } else {
            set.add(elem);
        }
    });

    const [res] = set;
    return res;
};

// solution with XOR
const singleNumberXor = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    let result = 0;

    // xor for x ^ y ^ y return x
    nums.forEach((elem) => {
        result = result ^ elem;
    });

    return result;
};
