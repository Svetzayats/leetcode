/**
 * Given an integer array nums sorted in non-decreasing order,
 * remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let prevUnique = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[prevUnique]) {
            nums[++prevUnique] = nums[i];
        }
    }

    return (nums.length = ++prevUnique);
};
