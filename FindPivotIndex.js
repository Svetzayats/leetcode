/**
   * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
   * The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
   * If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
   * Return the leftmost pivot index. If no such index exists, return -1.
   *
   * @param {number[]} arr - The array to check.
   * @return {number} The pivot index, or -1 if none exists.
   *
   * @example:
   *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then pivot element is 5 and its index = 2
   *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then pivot element is 9 and its index = 2
   *  [1, 2, 3, 4, 5] => -1   => no pivot element
   *  [2,1,-1] => 0   => = === 1 + (-1) then pivot element is 2 and its index 0 
   * 
   * https://leetcode.com/problems/find-pivot-index/description/
   * https://leetcode.com/problems/find-the-middle-index-in-array/description/
 */

function pivotIndex(nums) {
  if (!nums.length) return -1;

  const sum = nums.reduce((prev, n) => prev + n, 0); 
  let left = 0; 
  
  // whole array sums to 0 (left 0 sum)
  if (sum - nums[0] === 0) return 0;


  let pivotIndex = 1; 

  while (pivotIndex < nums.length) {
      const pivot = nums[pivotIndex];
      left += nums[pivotIndex - 1]; 
      let right = sum - left - pivot; 
      if (left === right) {
          return pivotIndex;
      }
      pivotIndex++;
  }

  return -1; 
};