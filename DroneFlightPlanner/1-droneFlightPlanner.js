// OPTIMIZED APPROACH

/*
EDGE CASES:
- Not to worry about x and y coordinates
- Take in account for 0
- No empty arrays
- If same

BRUTE FORCE APPROACH:

- function
- var kWh = 0

- find the z coord (double for loop)
- Calculate the diff bt currZ & nextZ
  - If negative
    - kWh -= amount of neg
  - If Postitive
    - kWh += amount of pos

- return kWh


10
4
-5
2

6 --> 15  => -9
15 --> 8  => +7
-9
7
*/

function calcDroneMinEnergy(route) {
  let kWh = 0;
  let result = 0;

  for (let i = 0; i < route.length - 1; i++) {
    let currZ = route[i][2]; // a = [0, 2, 10]
    let nextZ = route[i + 1][2];
    let diff = currZ - nextZ;

    // Going Down
    if (currZ > nextZ) {
      kWh += diff;
    } else if (currZ < nextZ) {
      // Going Up
      kWh += diff;
    } else {
      continue;
    }

    // Add in extra
    if (kWh < 0) {
      let extra = 0 - kWh;
      kWh += extra;
      result += extra;
    }
  }
  return result;
}

calcDroneMinEnergy([
  [0, 2, 10],
  [3, 5, 0],
  [9, 20, 6],
  [10, 12, 15],
  [10, 10, 8],
]);
