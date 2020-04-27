/*

Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:

Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5

Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

Note:
Then length of the input array is in range [1, 10,000].
The input array may contain duplicates, so ascending order here means <=.

*/

/*

---> Shortest;
---> Unsorted;
---> Continuous;
---> Subarray;
---> All of the above = target;

-> Compare the input array with an auxillary array of sorted (ascending order) numbers;
-> 

INPUT: [2,6,4,8,10,9,15];
SORTED: [2,4,6,8,9,10,15];

-> Initiate a loop that checks input[idx] against sorted[idx];
-> The first mismatch will be the start of the target array, start;
-> The last mismatch will be the end of the target array, end;
-> The output will be: end - start + 1 (the 1 accounts for the necessary offset when dealing with indices and length);
-> If both "start" and "end" flags are not toggled (aka: remain undefined), then return 0 as the array is identical to the input array and is therefore already sorted;

*/

// Time Complexity: O(n log n);
// Space Complexity: O(n);

function findUnsortedSubarray(nums) {
  let start;
  let end;
  
  let sorted = [...nums].sort((a,b) => a - b);
  
  for (let i = 0; i < nums.length; i++) {
    if (start === undefined && end === undefined && nums[i] !== sorted[i]) {
      start = i;
      end = i;
    }
    else if (end !== undefined && nums[i] !== sorted[i]) {
      end = i;
    }
  }
  
  if (start === undefined && end === undefined) {
    return 0;   
  }
  else {
    return end - start + 1;
  }
}