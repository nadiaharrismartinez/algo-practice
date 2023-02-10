/*
Edge:
- 1 coin
- no coins
- arg of any size


Brute Force Approach:
- Sort Array
- If first num !== 1
  - return 1

- counter = 1
- pointer = arr[1]

- for loop (i)
  - if (i + 1 < P)
    - Yes
      - return i + 1
    - No
      - pointer += counter
      - pointer++


coins = [1, 1, 2, 3, 5, 7, 22]
                            ^                  
change = 19

*/

function nonConstructibleChange(coins) {
  let sCoins = coins.sort((a, b) => a - b);
  console.log(sCoins);
  let change = 0;

  if (sCoins[0] !== 1) {
    return 1;
  }

  for (let i = 0; i < sCoins.length; i++) {
    if (sCoins[i] > change + 1) {
      break;
    } else {
      change += sCoins[i];
    }
  }
  return change + 1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
