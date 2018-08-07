/*

Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]

Note: Please solve it without division and in O(n);

*/

// My solution, which has a quadratic time complexity;

function productExceptSelf(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      let otherNum = arr[j];
      product *= otherNum;
    }
    res.push(product);
  }

  return res;
}

// The top solution provided by LeetCode, which has a linear time complexity;
// We are going to initialize an empty array, populate it with products given the circumstances, and then eventually return this populated array of integers;
// We need to pass through the input array from left to right in order to generate the "forward products";
// If the input array looks like this: [2,7,3,4];
// Then the forward products would be: [1,2,14,42];
// This is so because: [1*1, 1*2, 2*7, 2*7*3];
// Now we need to grab the "backward products";
// By iterating over the input array from right to left, we get: [84,24,56,42];
// This is so because: [12*7, 12*2, 4*14, 1*42];
// When going forwards, we can ignore the value at the tail-end;
// When going backwards, we can ignore the value at the head-end;
// In any case, we are aiming to take the product of the numbers on either side of the partition point;

// Let's walk through another example, where the input array is: [2,4,5,6];
// As a heads-up, the expected output should be: [120,60,48,40];
// This is so because: [4*5*6 (we ignore 2), 2*5*6 (we ignore 4), 2*4*6 (we ignore 5), 2*4*5 (we ignore 6)];
// Let's see how we can arrive to that expected output;
// If we grab the forward products, we'll end up with: [1,2,8,40];
// This is so because: [1*1, 1*2, 2*4, 2*4*5] (We are not concerned with 2*4*5*6 because we are supposed to eventually ignore 6);
// How do we get from: [1,2,8,40] to [120,60,48,40]?;
// Reminder: Our input array is: [2,4,5,6];
// Working backwards in terms of direction; we multiply 40 by 1, leaving it as is (2*4*5) and effectively ignoring the last value;
// Next, we multiply 8*6 to get 48...and we did this because we already had 2*4 and we needed 6 to complete that product (ignoring 5);
// Next, we multiply 30*2 to get 60...and we did this because we already had 5*6 and we needed 2 to complete that product (ignoring 4);
// Lastly, we multiply 120*1 to get 120...and we did this because already had 4*5*6 and we needed 1 to complete that product (ignoring 2);

function productExceptSelf(arr) {
  let res = [];

  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    res[i] = product;
    product *= arr[i];
  }

  product = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    res[i] *= product;
    product *= arr[i];
  }

  return res;
}
