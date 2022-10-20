/** Contains Duplicate **
 * 
 * Given an array of integers, return true if any integer appears
 * at least twice in the array, otherwise return false.
 * 
 * @example
 * containsDuplicate([1, 2, 3, 4]) -> false
 * containsDuplicate([1, 2, 2, 5]) -> true
 * containsDuplicate([1, 2, 9, 5, 9]) -> true
 * 
 */

const containsDuplicate = (nums) => {
    const map = new Map() // O(n) space

    for (let i = 0; i < nums.length; ++i) { // O(n) time
        if (map.has(nums[i])) { // O(1) time
            return true
        }
        map.set(nums[i], true)
    }

    return false
}

module.exports = containsDuplicate;

// brute force method, time complexity: O(n^2), space complexity: O(1)
// loop i from 0 to n - 1
//  loop j from ? to ?
//      if elements at index i and j are equal
//          return true
// return false

// const containsDuplicate = (nums) => {
//     for (let i = 0; i < nums.length - 1; ++i) {
//         for (let j = i + 1; j < nums.length; ++j) {
//             if (nums[i] === nums[j]) {
//                 return true
//             }
//         }
//     }
//     return false
// }

// sorting method, time complexity: O(nlog(n)) + O(n) = O(nlog(n))
// sort the given array <-- O(n) space | O(nlog(n)) time
// loop from 0 to n - 1 <-- O(n) time
//  if the current element is equal to its next element
//      return true
// return false

// const containsDuplicate = (nums) => {
//     const sortedArr = nums.sort((a, b) => a -b)
    
//     for (let i = 0; i < sortedArr.length - 1; ++i) {
//         if (sortedArr[i] === sortedArr[i + 1]) {
//             return true
//         }
//     }

//     return false
// }

// optimal solution, time complexity: O(n), space complexity: O(n)
// create an empty 'set' --> O(n) space
// for each element in the array --> O(n) time
//  if the current element exists in the set --> O(1) time
//      return true
//  add the current number in the set
// return false

// const containsDuplicate = (nums) => {
//     const set = new Set()

//     for (let i = 0; i < nums.length; ++i) {
//         if (set.has(nums[i])) {
//             return true
//         }
//         set.add(nums[i])
//     }

//     return false
// }