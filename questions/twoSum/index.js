/** Two Sum **
 *
 * Find two numbers in the given array that add up to `target`
 * and return the indices of those two numbers in the array
 *
 * @example
 * twoSum([1, 2, 4, 9], 13) -> [2, 3]
 * twoSum([10, 20], 30) -> [0, 1]
 * twoSum([3, 2, 4], 6) -> [1, 2]
 *
 */

// junior level solution, absolute brute force solution
// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; ++i) {
//     for (let j = 0; j < nums.length; ++j) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// remove last iteration
// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length - 1; ++i) {
//     for (let j = 0; j < nums.length; ++j) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// dont go backwards, mid-level solution, O(n^2) time | O(1) space
// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length - 1; ++i) {
//     for (let j = i + 1; j < nums.length; ++j) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// top tech solution,, O(n) time | O(n) space
const twoSum = (nums, target) => {
  const mapDifferenceToIndex = new Map();

  for (let i = 0; i < nums.length; ++i) {
    if (mapDifferenceToIndex.has(nums[i])) {
      return [mapDifferenceToIndex.get(nums[i]), i];
    }
    const difference = target - nums[i];
    mapDifferenceToIndex.set(difference, i);
  }
};

module.exports = twoSum;

// const nums = [0, 1, 2, 4]
// const target = 13

// for (let i = 0; i < nums.length - 1; ++i) {
//     console.log(`loop ${i}`)
//     for (let j = i + 1; j < nums.length; ++j) {
//         console.log(nums[i], nums[j])
//     }
// }

// const nums = [1, 2, 4, 9]
// const target = 13

// // create an empty 'map' (map number we are looking for to current index)
// const map = new Map()

// // for each element in the array,
// // if the current element exists in the map,
// // return the map's value and the current index       return [2, 3]
// // store the number we are looking for in 'difference'
// // set 'difference' to the current index in 'map'     map: {12: 0, 11: 1, 9: 2}
// for (let i = 0; i < nums.length; ++i) {
//     console.log(nums[i])
//     map.set(nums[i], true)

//     if (nums[i] === 9) {
//         console.log(map.get(4)) // O(n) time
//     }
// }
