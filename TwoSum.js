/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 * You can return the answer in any order.
 */

const twoSum = function (nums, target) {
    const remainders = {};

    for (let i = 0; i < nums.length; i++) {
        if (remainders.hasOwnProperty(nums[i])) {
            return [remainders[nums[i]], i];
        } else {
            remainders[target - nums[i]] = i;
        }
    }
    return [];
};
