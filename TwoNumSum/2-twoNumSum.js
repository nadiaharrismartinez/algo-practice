// OPTIMIZED SPACE & TIME COMPLEXITY SOLUTION

/*
APPROACH:
- hash table {}
- x + y = targetSum (x = currNum)
- If y is in hashtable, then return [x, y]
- If not, place y in hashtable with "true" val
*/

function twoNumberSum(array, targetSum) {
  const hash = {};

  for (let i = 0; i < array.length; i++) {
    let x = array[i];
    let y = targetSum - x;

    if (y in hash) {
      return [x, y];
    } else {
      hash[x] = true;
    }
  }
  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
