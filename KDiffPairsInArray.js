/**
 * Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.
 * A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:
 *  0 <= i, j < nums.length
 *  i != j
 *  |nums[i] - nums[j]| == k
 * Notice that |val| denotes the absolute value of val.
 * 
 * [3,1,4,1,5], k = 2 => 2-diff pairs in the array, (1, 3) and (3, 5)
 * [1,2,3,4,5], k = 1 => four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
 * [1,3,1,5,4], k = 0 => one 0-diff pair in the array, (1, 1)
 * 
 * 
 * https://leetcode.com/problems/k-diff-pairs-in-an-array/description/
 */

// create hash, iterate through it and check only +k parts 
function findPairs(nums, k) {
  const numbersHash = nums.reduce((prev, cur) => {
      if (prev[cur]) {
          prev[cur] = prev[cur] + 1;
      } else {
          prev[cur] = 1; 
      }

      return prev; 
  }, {}); 

  if (k === 0) {
      return Object.keys(numbersHash).filter(n => numbersHash[n] > 1).length; 
  } else {
      let res = 0; 
      Object.keys(numbersHash).forEach(n => {
          const pair = Number(n) + k;
          if (numbersHash[pair]) {
              res++;
          }
      })
      return res;
  }
};

// solution with hash table for storing all numbers and their indexies 
// in this case we just check is there pair for our number and delete it after matching (because we need unique pairs)
function findPairs(nums, k) {
  const map = {};
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i; 
  }

  for (let i = 0; i < nums.length; i++) {
    const target = nums[i] + k

    if(map[target] !== undefined && map[target] !== i){
        total++
        delete map[target]
    }
  }

  return total
};