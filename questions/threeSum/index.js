/** Three Sum
 *
 * Given an array of integers 'nums', return an array of all the
 * three numbers that add up to 0.
 *
 * Note: There cannot be any duplicate triplets in the results array.
 *
 * @examples
 * threeSum([-1, 0, 1, 2, -1, -4]) = [[-1, -1, 2], [-1, 0, 1]]
 * threeSum([-2, -2, 0, 0, 1, 1, 2, 2]) = [[ -2, 0, 2 ], [ -2, 1, 1 ]]
 * threeSum([0, 0, 0, 0]) = [[0, 0, 0]]
 */

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const results = [];

  for (i = 0; i < nums.length - 2; ++i) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (sum > 0) {
        r--;
      }
      if (sum < 0) {
        l++;
      }
      if (sum === 0) {
        results.push([nums[i], nums[l], nums[r]]);
        l++
        while (nums[l] === nums[l - 1] && l < r) {
            l++
        }
      }
    }
  }

  return results;
}

//DO NOT EDIT BELOW THIS LINE
module.exports = threeSum;

// brute force solution, n^3 time

// sorting and pointer solution, n^2 time
// edge case 1: if i === i -1 skip the iteration
// edge case 2: left pointer can't start at the same number
