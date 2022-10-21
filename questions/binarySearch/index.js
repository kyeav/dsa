/** Binary Search **
 *
 * Given a sorted array 'nums' and an integer 'target', return
 * the index of the target.
 *
 * Note: Your solutions' time complexity must be faster than O(n).
 *
 * @example
 * binarySearch([1, 2, 4, 9, 12], 9) -> 3
 * binarySearch([-2, -1, 4, 5, 7], -1) -> 1
 * binarySearch([-1, 4, 18, 20], 18) -> 2
 *
 */

const binarySearch = (nums, target) => {
  // set left and right pointers
  let l = 0;
  let r = nums.length - 1;
  // while pointers don't overlap
  while (l <= r) {
    // set mid pointer
    let mid = Math.floor((l + r) / 2);
    // if number at mid is bigger than target
    if (nums[mid] > target) {
      // shift right pointer to the left of mid
      r = mid - 1;
    }
    // if number at mid is smaller than target
    else if (nums[mid] < target) {
      // shift left pointer to the right of mid
      l = mid + 1;
    }
    // else
    else {
      // return mid
      return mid;
    }
  }
};

module.exports = binarySearch;

// binary search time complexity
// n/2^k <= 1
// n <= 2^k
// log(n) <= log(2^k)
// log(n) <= klog(2)
// k >= log(n) * 1/log(2)
// k = log(n)
// time complexity = O(log(n))
