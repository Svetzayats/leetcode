/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * Modify array in-place
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 */

// simple solution with extra memory
function rotateArray(nums, k) {
    if (!k || !nums || !nums.length) {
        return;
    }

    const shift = k % nums.length;

    const newArray = [];
    for (let i = 0; i < nums.length; i++) {
        const index = (i + shift) % nums.length;
        newArray[index] = nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        array[i] = newArray[i];
    }
}

// solution that has n^2 complicity and doesn't work with big arrays
function rotateArray(nums, k) {
    if (!k || !nums || !nums.length || k === nums.length) {
        return;
    }

    const shift = k % nums.length;

    for (let i = 1; i <= shift; i++) {
        let prevValue = nums[0];

        nums[0] = nums[nums.length - 1];

        for (let j = 1; j < nums.length; j++) {
            const current = nums[j];
            nums[j] = prevValue;
            prevValue = current;
        }
    }
}

// solution with reverse part of array
function rotate(nums, k) {
    if (!k || !nums || !nums.length) {
        return;
    }

    const shift = k % nums.length;

    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, shift - 1);
    reverse(nums, shift, nums.length - 1);
}

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}
