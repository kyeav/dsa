/** Stock Trading
 *
 * Given an array of 'prices', find the transaction that will yield the greatest profits.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing
 * a different day in the future to sell that stock.
 *
 * @examples
 * stocks([8, 3, 6, 1, 6, 4, 7]) -> 6
 * stocks([1, 8, 3, 4]) -> 7
 * stocks([2, 9, 18, 9, 2]) ->  16
 */

// use while loop for pointers instead of for loops
const stocks = (prices) => {
  let l = 0;
  let r = 1;
  let maxProfit = 0;

  // for (let r = 1; r < prices.length; r++) {}
  while (r < prices.length) {
    const profit = prices[r] - prices[l];
    if (profit > 0) {
      maxProfit = Math.max(maxProfit, profit);
    } else {
      l = r;
    }
    ++r;
  }

  return maxProfit;
};

//DO NOT EDIT BELOW THIS LINE
module.exports = stocks;

// const stocks = (prices) => {
//     // set left pointer 'l' to 0
//     let l = 0;
//     // set right pointer 'r' to 1
//     let r = 1;
//     // set maxProfit to 0
//     let maxProfit = 0;

//     // loop over every single price
//     for (let i = 1; i < prices.length; ++i) {
//       // calculate profit of the trade
//       const profit = prices[r] - prices[l];
//       // if profit > 0
//       if (profit > 0) {
//         // store it in maxProfit only if profit > maxProfit
//         maxProfit = Math.max(maxProfit, profit);
//       }
//       // else move left pointer to right pointer
//       else {
//         l = r;
//       }
//       // increment r by 1
//       r++;
//     }
//     // return maxProfit
//     return maxProfit;
//   };

// const stocks = (prices) => {
//     let l = 0;
//     let maxProfit = 0;

//     for (let r = 1; r < prices.length; ++r) {
//       const profit = prices[r] - prices[l];
//       if (profit > 0) {
//         maxProfit = Math.max(maxProfit, profit);
//       } else {
//         l = r;
//       }
//     }

//     return maxProfit;
//   };
