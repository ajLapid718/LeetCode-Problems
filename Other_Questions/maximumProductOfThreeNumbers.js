// My Solution;
// Time Complexity: O(3n), which simplifies to O(n);
// Space Complexity: O(1);
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

  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    if (currNum > primaryMax) {
      primaryMax = currNum;
      primaryMaxIdx = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    if (i === primaryMaxIdx) continue;

    if (currNum > secondaryMax && currNum <= primaryMax) {
      secondaryMax = currNum;
      secondaryMaxIdx = i;
    }

    if (currNum < 0 && currNum < negPrimary) {
      negPrimary = currNum;
      negPrimaryIdx = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    if (i === primaryMaxIdx || i === secondaryMaxIdx || i === negPrimaryIdx) continue;

    if (currNum < 0 && currNum < negSecondary) {
      negSecondary = currNum;
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
