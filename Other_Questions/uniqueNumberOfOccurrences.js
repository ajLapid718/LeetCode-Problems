/*

CONSTRAINTS:

---> the size of the array: 1 <= arr.length <= 1000
---> the values of the array: -1000 <= arr[i] <= 1000

INPUT:

---> an array of integers;

OUTPUT:

---> a boolean;

CORE GOAL:

---> determine if the frequency of each number in the array is UNIQUE;

IN OTHER WORDS/FROM ANOTHER ANGLE:

---> investigate whether or not two numbers occur the same amount of times;

APPROACH:

---> compose an object where the keys are the numbers and the values are the frequency;

---> compose another object where the keys are frequencies and if we try to insert a key that already exists, then we know we have encountered a repeated frequency/reoccurence;

*/

function uniqueOccurrences(arr) {
  let numAndFreq = {};
  let seenFreq = new Set();
  
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    numAndFreq[num] = numAndFreq[num] + 1 || 1;
  }
  
  for (let num in numAndFreq) {
    let freq = numAndFreq[num];
    if (seenFreq.has(freq)) {
      return false;
    }
    else {
      seenFreq.add(freq);
    }
  }
  
  return true;
}

function uniqueOccurrences(arr) {
  let numAndFreq = {};
  
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    numAndFreq[num] = numAndFreq[num] + 1 || 1;
  }
  
  let freqs = Object.values(numAndFreq);
  let seenFreq = new Set(freqs);
  return freqs.length === seenFreq.size; 
}