function twoSum(nums, target) {
  let seen = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let complement = target - num;

    if (seen.hasOwnProperty(complement)) {
      return [seen[complement], i]
    }
    else {
      seen[num] = i;
    }
  }
}
