/* 

1. Calculate the sum of natural number up to n

Edge Cases:
- negative nums
- 0
- null, etc.

Approach:
 
let sum = 0

For loop
    if i < n
    sum += i

return sum

*/

// BRUTE FORCE SOLUTION
const sumFunc = (n) => {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    if (i <= n) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumFunc(10));

// RECURSIVE SOLUTION
const sumFunc3 = (n) => {
  if (n === 0) {
    return 0;
  } else {
    return n + sumFunc3(n - 1);
  }
};

console.log(sumFunc2(10));
console.log(sumFunc3(10));
