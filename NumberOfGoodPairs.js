// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.

// Example 1:
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:
// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

// Example 3:
// Input: nums = [1,2,3]
// Output: 0

// Constraints:
// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = (nums) => {
  let output = 0

  nums.forEach((num, index) => {
    if (index < nums.length - 1) output += nums.slice(index + 1).reduce((acc, curVal) => {
      acc += (num === curVal)? 1 : 0
      return acc
    }, 0)
  })

  return output
}

const nums = [1,2,3]
console.log(numIdenticalPairs(nums))