/**
 * Given an integer array nums, move all 0's to the end of it
 * while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 */

// obvious solution
const moveZeroes = function (nums) {
    const arr = [];

    nums.forEach((num) => {
        if (num) {
            arr.push(num);
        }
    });

    const lastIndexNotZero = arr.length - 1;

    nums.forEach((num, index) => {
        if (index <= lastIndexNotZero) {
            nums[index] = arr[index];
        } else {
            nums[index] = 0;
        }
    });
};

// solution with pointer
const moveZeroesWithPointer = function (nums) {
    let pointer = 0;

    nums.forEach((num, index) => {
        if (num) {
            nums[pointer] = num;
            if (index !== pointer) {
                nums[index] = 0;
            }
            pointer++;
        }
    });
};
