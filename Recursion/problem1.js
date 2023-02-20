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

// ITERATIVE SOLUTION
const sumFunc = (n) => {
  let sum = 0;

  if (!n) {
    return null;
  }

  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumFunc(10));

// RECURSIVE SOLUTION
const sumFunc2 = (n) => {
  if (n === 0) {
    return 0;
  } else {
    return n + sumFunc2(n - 1);
  }
};

console.log(sumFunc2(10));
