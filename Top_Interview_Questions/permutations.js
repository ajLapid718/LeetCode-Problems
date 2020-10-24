/*

Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

*/

function permute(nums) {
  let permutations = [];
  
  function formPermutations(arr, memo = []) {
    if (!arr.length) {
      permutations.push(memo);
    }
    
    for (let i = 0; i < arr.length; i++) {
      let currSet = [...arr];
      let extract = currSet.splice(i, 1);
      formPermutations(currSet, memo.concat(extract));
    }
  }
  
  formPermutations(nums);
  return permutations;
}