// BRUTE FORCE SOLUTION

/*
EDGE CASES:
- Not sorted
- Second arr can be just 1 num
- No empty arrays
- Repeated numbers

APPROACH:
O(n^2)

- Obj = {
    num: idx
    1: 1,
    6: 4,
    -1: 5,
    10: 7,
}

- function
- for loop iterating seq                  
  - arr.includes - Does seq[i] exist in arr[i]
  - If yes
    - Set Obj: num is at idx                     
    - Find seq[i - 1] in Obj, get val (prevIdx)
    
    - if(prevIdx < currIdx)
      - Yes
        - keep going
      - No
        - return false
  - if no
    - return false
    
  - return true

*/

function isValidSubsequence(array, sequence) {
  // console.log(array, sequence)
  const obj = {};
  let newArr = array.slice();
  console.log('array', array, 'newArr', newArr);

  for (let i = 0; i < sequence.length; i++) {
    let currNum = sequence[i];
    let currArrIdx = array.indexOf(currNum);
    let prevNum = sequence[i - 1];
    let prevArrIdx = obj[prevNum];

    // Checking if exists
    if (newArr.includes(currNum)) {
      //Could change this to .indexOf for o(n) time?
      obj[currNum] = currArrIdx;
      newArr = newArr.slice(1, array.length);
      console.log('splicedArr', newArr);

      if (i > 0) {
        // Checking order
        if (currArrIdx > prevArrIdx) {
          continue;
        } else {
          return false;
        }
      } else {
        continue;
      }
    } else {
      return false;
    }
  }
  // console.log(obj)
  return true;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
