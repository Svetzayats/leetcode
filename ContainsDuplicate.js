/**
 * Given an integer array nums,
 * return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 */

// solution with hash
const containsDuplicate = function (nums) {
    if (!nums || !nums.length) {
        return false;
    }

    const hash = {};
    let i = 0;

    while (!hash[nums[i]] && i < nums.length) {
        hash[nums[i]] = true;
        i++;
    }

    return i < nums.length;
};

// solution with Set
const containsDuplicateWithSet = function (nums) {
    return new Set(nums).size < nums.length;
};
