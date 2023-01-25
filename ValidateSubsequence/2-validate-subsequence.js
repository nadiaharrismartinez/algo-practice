// OPTIMIZED SPACE & TIME COMPLEXITY SOLUTION

/*
EDGE CASES:
- Not sorted
- Second arr can be just 1 num
- No empty arrays
- Repeated numbers


APPROACH:
O(log(n)) / O(n) 

- sort array 
  
  - If yes
    - Find idx of seq[i - 1]
      - if(prevIdx < currIdx)
        - Yes
          - keep going
        - No
          - return false
  - if no
    - return false
    
  - return true


ANOTHER APPROACH:

function
  arrIdx = 0
  seqIdx = 0

  while(arrIdx === arr.length && seqIdx === seq.length)
    if(arr{arrIdx} === seq[seqIdx])
      seqIdx++
    else
      arrIdx++
  return seqIdx === seq.length

  
*/

function isValidSubsequence(arr, seq) {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < arr.length && seqIdx < seq.length) {
    if (arr[arrIdx] === seq[seqIdx]) {
      seqIdx++;
      arrIdx++;
    } else {
      arrIdx++;
    }
  }
  return seqIdx === seq.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
