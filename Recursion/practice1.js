// 1. Calculate the sum of natural number up to n

/*
Edge:
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

const sumFunc = (n) => {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (i < n) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumFunc(10));
