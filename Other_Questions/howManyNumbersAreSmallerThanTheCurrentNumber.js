/*

Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

 

Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]
Example 3:

Input: nums = [7,7,7,7]
Output: [0,0,0,0]
 

Constraints:

2 <= nums.length <= 500
0 <= nums[i] <= 100

*/

/*

Given an array of numbers, and by iterating through them in some manner, the target goal is to return an array, of the same size, containing the amount of numbers in the entire array that are smaller than the current number of the iteration;

A number is considered to be smaller if: otherNumber < currentNumber;
In other words, be mindful to appropriately treat and record numbers when the case is: 

1) otherNumber === currentNumber 
2) otherNumber > currentNumber;

The very first idea that comes to mind is to solve this problem the way I would solve it with pen/paper/eye-balling it/manual brute force. That is, we could iterate through the entire array, and at each step in the iteration, we could perform an operation (determining if other values are less than the current number) that would check all of the numbers to the left and all of the numbers to the right of the current number of the iteration and then push the outcome of that operation to the output array;

That sounds a bit expensive since that would entail us walking through every element in the array (n) for every element in the array (n) such that the algorithmic analysis would approach quadratic time complexity aka O(n^2);

ALTERNATIVELY...

- Let's say we sort the elements of the array in descending order;
- Let's say that every number to the right of the current number is less than the current number;
- That works perfectly if there are no duplicate values. This raises some questions. HOW DO WE ACCOUNT FOR/TREAT/HANDLE DUPLICATE VALUES?;
- A duplicate value should be treated as any other number if the current number is greater than the duplicate value (this is when it is necessary tally all the duplicates);
- A duplicate value should be "ignored" or "disregarded" if the current number is equivalent to the duplicate value (this is the sticking point of the current approach --- we need to figure out a way to offset the pointer);
- We can compose an object where the key:value pairs are ---> number:frequency;
- This object can help inform us of how to offset the pointer if the current number has duplicates to the right of it;
- We can also compose an object where the key:value pairs are ---> number:amount of numbers smaller than the key;
- This object can then be "mapped" into the target output array;

example input: [3,2,2,1];
expected output: [2,0,0,0];

*/

// Time Complexity: O(n log n);
// Space Complexity: O(n);

function smallerNumbersThanCurrent(nums) {
  let numberAndTarget = {};
  let sortedNums = [...nums].sort((a, b) => b - a);

  for (let i = 0; i < sortedNums.length; i++) {
    let currentNum = sortedNums[i];
    let foloNum = sortedNums[i + 1];
    if (currentNum === foloNum) continue;
    numberAndTarget[currentNum] = sortedNums.length - (i + 1);
  }

  return nums.map(currentNum => numberAndTarget[currentNum]);
}

/*

Some constraints to keep in mind:

The size of the input array will be as small as 2 and as large as 500;
The elements within the input array will be as small 0 and as large as 100;

We can implement a tailor-made, "bucket sort"-esque approach this problem.

The idea behind this is that we can bucket, or group together, elements from one array and place them in more advantageous positions in a different array. This array that contains all of these rearranged buckets will then be able to inform us of how many elements exist in each bucket and how many buckets/elements precede and succeed any single bucket.

For any given problem, we only need an auxillary array (the one containing buckets) the value of the largest number in the input array offset by 1 (aka: Max of input array + 1);

We can then leverage the indices of the auxillary array (the one containing buckets) to represent "the number from the input array" and the value at that index will represent "the frequency of that number".

In doing so, with this set up, we can have numbers in ascending order. 

We can then use a combination of a tracker/pointer technique to iterate through the buckets and, any time we encounter a frequency greater than 0, we can then mark the numbers in such a way that indicates: "any number to the left of this number (aka: the sum of all frequencies prior to this number) is how many numbers are smaller than this current number";

Here is what I mean in an example.

Let's say we are given an input array that looks like this: [3,2,2];
The expected output would be an array that looks like this: [2,0,0];

There are two numbers smaller than 3.
There are zero numbers smaller than 2.
There are zero numbers smaller than 2.

The auxillary array would be shaped liked this: [0, 0, 2, 1];

Keep in mind that the index represents "number from input array" and the value represents "frequency of number from input array".

Written form refers to frequency.
Numerical form refers to actual values based on input array.

There are zero 0s.
There are zero 1s.
There are two 2s.
There is one 3.

If we had a tracker that was initialized to 0, and it kept a running count such that any time we encountered a non-zero frequency in the auxillary array, we could record and re-assign "how many numbers are smaller (to the left of) this current number".

*/

// Time Complexity: O(n+k) where n is the amount of elements in nums and k is the amount of buckets in the auxillary array;
// Space Complexity: O(n) where n is the amount of elements in nums (we might have a buckets array that nears the size of the input array);

function smallerNumbersThanCurrent(nums) {
  let numberAndTarget = {};
  let buckets = Array(Math.max(...nums) + 1).fill(0);
  
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    buckets[currentNum]++;
  }
  
  let sumOfNumsLessThanCurrent = 0;
  
  for (let i = 0; i < buckets.length; i++) {
    let frequency = buckets[i];
    if (frequency > 0) {
      numberAndTarget[i] = sumOfNumsLessThanCurrent;
      sumOfNumsLessThanCurrent += frequency;
    }
  }
  
  return nums.map(currentNumber => numberAndTarget[currentNumber]);
}