/*

2. Calculate factorial of n. Reminder n! = 1 * 2 * ... * n

Edge:
- negative nums
- 0
- null, etc.

Approach:

let factorial = 0
for loop
    i <= n
    factorial *= i

return factorial


or 

Recursive Approach:

base case
    n === 0
        return 0
    n * func(n - 1)

*/

// ITERATIVE SOLUTION
const getFactorial = (n) => {
  let factorial = 1;

  if (n === 0) {
    return 0;
  }

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
};

// TEST
console.log(getFactorial(10));

// RECURSIVE SOLUTION
const getFactorial2 = (n) => {
  if (n <= 1) {
    return 1;
  } else {
    return n * getFactorial2(n - 1);
  }
};

// TEST
console.log(getFactorial2(-10));
