/*

Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/

function topKFrequent(nums, k) {
  let result = [];
  let bucket = [];
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    obj[num] = obj[num] + 1 || 1;
    bucket[i+1] = null;
  }

  for (let key in obj) {
    let val = obj[key];

    if (bucket[val] === null) {
      bucket[val] = [key];
    }
    else {
      bucket[val].push(key);
    }
  }

  for (let j = bucket.length-1; j > 0; j--) {
    if (bucket[j] !== null) {
      result.push(bucket[j]);
    }

    if (result.length >= k) {
      break;
    }
  }

  return result.join(',').split(',').slice(0, k).map(Number);
}
