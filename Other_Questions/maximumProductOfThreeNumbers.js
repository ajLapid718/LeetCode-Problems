/*

Given an integer array, find three numbers whose product is maximum and output the maximum product.

Example 1:
Input: [1,2,3]
Output: 6

Example 2:
Input: [1,2,3,4]
Output: 24

Note:

- The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
- Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.

*/

// My Solution;
// Time Complexity: O(3n), which simplifies to O(n);
// Space Complexity: O(1);
// NOTE: My initial solution passeed all 83 test cases provided by LeetCode, but it would not pass if all of the elements in the array were negative values;
// With the way I was originally approaching the problem, I would need to handle the following variables differently: "negPrimary" and "negSecondary";
// Specifically, I would need to store the least negative values (values that are closer to the value of zero) instead of the most negative values;
// If all of the elements in the input array are negative, then we'd need to multiply the three least negative values together;
// For example: [-4,-3,-2,-1];
// My solution would perform and return: -1 * -3 * -4 === -12;
// The ideal soultion would perform and return: -1 * -2 * -3 === -6;
// Therefore, if all of the values in the input array were negative, we'd have to see if the current number (currNum) is greater than negPrimary (same applies to negSecondary);
// Such a change would also require modifying the state of negPrimary and negSecondary from Infinity to -Infinity so that we could successfully grab the least negative values;
// In this commit, I reflect these improvements;
// Things to keep in mind:
// If we have all positive values, we need to multiply the three greatest positive values;
// If we have two positive values and the rest of the values are negative, we need to multiply the two positive values and the least negative value;
// If we have one positive value and the rest of the values are negative, we need to multiply the positive value and the two greatest negative values (remember, a negative x a negative is a positive value);
// If we have all negative values, then we need to multiply the three least negative values;
// If we have two negative values and the rest of the values are positive, then we need to multiply the two negative values and the greatest positive value;
// If we have one negative value and the rest of the values are positive, then we need to multiply the three greatest positive values;
// We can avoid exact duplicates (same value and same index) by verifying an element's value and an element's index;
function maximumProduct(nums) {
  if (nums.length === 3) return nums[0] * nums[1] * nums[2];

  let primaryMax = -Infinity;
  let secondaryMax = -Infinity;
  let tertiaryMax = -Infinity;

  let primaryMaxIdx;
  let secondaryMaxIdx;

  let negPrimary = Infinity;
  let negSecondary = Infinity;

  let negPrimaryIdx;

  let allNegative = true;

  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    if (currNum >= 0) allNegative = false;

    if (currNum > primaryMax) {
      primaryMax = currNum;
      primaryMaxIdx = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    if (i === primaryMaxIdx) continue;

    if (allNegative) {
      negPrimary = -Infinity;
      if (currNum < 0 && currNum > negPrimary) {
        negPrimary = currNum;
        negPrimaryIdx = i;
      }
    }
    else {
      if (currNum < 0 && currNum < negPrimary) {
        negPrimary = currNum;
        negPrimaryIdx = i;
      }
    }

    if (currNum > secondaryMax && currNum <= primaryMax) {
      secondaryMax = currNum;
      secondaryMaxIdx = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    if (i === primaryMaxIdx || i === secondaryMaxIdx || i === negPrimaryIdx) continue;

    if (allNegative) {
      negSecondary = -Infinity;
      if (currNum < 0 && currNum > negSecondary) {
        negSecondary = currNum;
      }
    }
    else {
      if (currNum < 0 && currNum < negSecondary) {
        negSecondary = currNum;
      }
    }

    if (currNum > tertiaryMax && currNum <= secondaryMax) {
      tertiaryMax = currNum;
    }
  }

  if (negPrimary === Infinity || negSecondary === Infinity || secondaryMax * tertiaryMax > negPrimary * negSecondary) {
    return primaryMax * secondaryMax * tertiaryMax;
  }
  else {
    return primaryMax * negPrimary * negSecondary;
  }
}

// Top solution provided by LeetCode, which accomplishes the objective in one pass;
// Time Complexity: O(n);
// Space Complexity: O(1);
function maximumProduct(nums) {
  let best1 = -Infinity;
  let best2 = -Infinity;
  let best3 = -Infinity;

  let bestn1 = Infinity;
  let bestn2 = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];

    if (currNum > best1) {
      best3 = best2;
      best2 = best1;
      best1 = currNum;
    }
    else if (currNum > best2) {
      best3 = best2;
      best2 = currNum;
    }
    else if (currNum > best3) {
      best3 = currNum;
    }

    if (currNum < bestn1) {
      bestn2 = bestn1;
      bestn1 = currNum;
    }
    else if (currNum < bestn2) {
      bestn2 = currNum;
    }
  }

  if (best1 * best2 * best3 > best1 * bestn1 * bestn2) {
    return best1 * best2 * best3;
  }
  else {
    return best1 * bestn1 * bestn2;
  }
}
