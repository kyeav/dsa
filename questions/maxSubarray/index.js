/** Maximum Subarray
 *
 * Given an integer array `nums`, find the subarray which has the
 * largest sum and return the sum.
 *
 * @examples
 * maxSubArray([5, 4, -1, 7, 8]) = 23
 * maxSubArray([-2, 1, -3, 4, -1, 2, -5, 0]) = 5
 * maxSubArray([2, 4, 3, -1, -4, -9]) = 9
 */

const maxSubArray = (nums) => {
  // set 'maxSum' to first array element
  let maxSum = nums[0];
  // set 'sum' to 0
  let sum = 0;
  // loop over every element in the array
  for (let i = 0; i < nums.length; ++i) {
    // if 'sum' is negative
    if (sum < 0) {
      // reset 'sum' to 0
      sum = 0;
    }
    // add the current number onto sum
    sum += nums[i];
    // if 'maxSum' is less than 'sum'
    if (maxSum < sum) {
      // 'maxSum' equals 'sum'
      maxSum = sum;
    }
    // OR maxSum = Math.max(maxSum, sum)
  }
  // return maxSum
  return maxSum;
};

//DO NOT EDIT BELOW THIS LINE
module.exports = maxSubArray;

// find every subarray inside of an array
// for (let i = 0; i < nums.length; ++i) {
//   console.log(`iteration ${i}`)
//   for (let j = i + 1; j <= nums.length; ++j) {
//     const subarray = (nums.slice(i, j))
//     const sum = subarray.reduce((acc, curr) => acc + curr)
//     console.log(subarray, sum)
//   }
// }

// O(n^3) time | O(n) space
// const maxSubArray = (nums) => {
//   let maxSum = nums[0]

//   for (let i = 0; i < nums.length; ++i) { // O(n) * O(n^2) --> O(n^3)
//     for (let j = i + 1; j <= nums.length; ++j) { // O(n) * O(n) --> O(n^2)
//       const subarray = (nums.slice(i, j)) // O(n)
//       const sum = subarray.reduce((acc, curr) => acc + curr) // O(n)
//       maxSum = Math.max(maxSum, sum)
//       console.log(subarray, sum)
//     }
//   }

//   return maxSum
// }

// O(n^2) time | O(1) space
// const maxSubArray = (nums) => {
//   let maxSum = nums[0]

//   for (let i = 0; i < nums.length; ++i) { // O(n) time
//     let sum = 0
//     for (let j = i; j < nums.length; ++j) { // O(n) time
//       sum += nums[j]
//       maxSum = Math.max(maxSum, sum)
//     }
//   }

//   return maxSum
// }

// linear solution, time complexity: O(n), space complexity: O(1)
// set 'maxSum' to first array element
// set 'sum' to 0
// loop over every element in the array --> O(n) time
//  if 'sum' is negative
//    reset 'sum' to 0
//  add the current number onto sum
//  if 'maxSum' is less than 'sum'
//    'maxSum' equals 'sum'
// return maxSum
