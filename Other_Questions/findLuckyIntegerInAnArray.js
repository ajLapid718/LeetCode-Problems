/*

1394. Find Lucky Integer in an Array
Easy

65

5

Add to List

Share
Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.

Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is no lucky integer return -1. 

Example 1:

Input: arr = [2,2,3,4]
Output: 2
Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
Example 2:

Input: arr = [1,2,2,3,3,3]
Output: 3
Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.
Example 3:

Input: arr = [2,2,2,3,3]
Output: -1
Explanation: There are no lucky numbers in the array.
Example 4:

Input: arr = [5]
Output: -1
Example 5:

Input: arr = [7,7,7,7,7,7,7]
Output: 7
 

Constraints:

1 <= arr.length <= 500
1 <= arr[i] <= 500

*/

/*

Constraints:

- 1 <= arr.length <= 500
- 1 <= arr[i] <= 500

Based on the instructions, it is not guaranteed that the array is sorted.

Given that the maximum size of the array is equivalent to the maximum value the array might contain, and also taking into account the fact that 500 integers in an array does not occupy all that much space, a bucket-sort-esque approach might be suitable here;

We can compose an auxillary array where the index represents a number from the input array, and the value at that index represents the frequency of that number;

We can initialize a "tracker" variable to -1 and return this value if there is no such lucky number in the array;

We can then iterate through the auxillary array and keep track (re-assignment of "tracker" variable) of any situation where the target condition (value === frequency) is true;

*/

// Time Complexity: O(n+k) where n is the amount of elements in the input array and k is the length of the auxillary array (dictated by the largest integer in the input array);
// Space Complexity: O(k) where k is dictated by the largest value in the input array;

function findLucky(arr) {
  let greatestLuckyInteger = -1;
  let buckets = [];
  
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    buckets[num] = buckets[num] + 1 || 1;
  }
  
  for (let i = 0; i < buckets.length; i++) {
    let frequency = buckets[i];
    if (i === frequency) greatestLuckyInteger = i;
  }
  
  return greatestLuckyInteger;
}