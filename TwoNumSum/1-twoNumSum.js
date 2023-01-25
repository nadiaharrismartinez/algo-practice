/*
Edge:
- If no pair found -> Return []
- No more than one pair
- Can't reuse any integers
- Negative numbers

Approach:

-- Non log(n) Approach --

let result = []
let sum = 0

function
for loop

nested for loop
  sum = arr[i] + arr[j]
  if (sum === targetSum)
    result = [arr[i], arr[j]]
return result

-- log(N) Approach --


*/

function twoNumberSum(array, targetSum) {
  let result = [];
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        result = [array[i], array[j]];
      }
    }
  }
  return result;
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
