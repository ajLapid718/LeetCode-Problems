/*

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps.
In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2

Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: 3
Output: 3

Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

*/

// Recursive approach with memoization;
function climbStairs(n, memo = {}) {
  if (memo.hasOwnProperty(n) === true) {
    return memo[n];
  }

  if (n === 1) {
    return 1;
  }
  else if (n === 2) {
    return 2;
  }
  else {
    memo[n] = climbStairs(n-2, memo) + climbStairs(n-1, memo);
    return climbStairs(n-2, memo) + climbStairs(n-1, memo);
  }
}

// Dynamic Programming/Bottom Up approach;
function climbStairs(n) {
  if (n === 1) return 1;

  let prev = 1;
  let curr = 2;

  for (let i = 3; i <= n; i++) {
    let folo = prev + curr;
    prev = curr;
    curr = folo;
  }

  return curr;
}
