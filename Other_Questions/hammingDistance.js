/*

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.

*/

// We want to convert "x" from its base-ten representation to its binary representation;
// We also want to convert "y" from its base-ten representation to its binary representation;
// Then, we want to compare both values and see where the corresponding bits are different from each other;
// We need to keep a count of how many times this occurs and eventually return that count, which is considered the Hamming Distance between the two input integers;

// What happens if, when comparing the binary-form of "x" to the binary-form of "y", one value has more digits than the other?;

// To convert an integer from base-ten to base-two, we need to iteratively divide by 2 and check the remainder at hand each step of the way
// If the remainder is 0, we shift in a 0;
// If the remainder is 1, we shift in a 1;
// Repeat this until we reach 0;

// For an appropriate comparison, grab the amount of digits, or the length, of each number in binary;
// Pad the "shorter" value with as many zeros as necessary to reach an equal length with the other value;
// Then loop through both values and increment the counter based on whether or not a difference exists within the digit-to-digit or column-to-column comparison;

// My Solution;
function hammingDistance(x, y) {
  let counter = 0;

  let binX = convertToBinary(x);
  let binY = convertToBinary(y);

  let lenX = binX.length;
  let lenY = binY.length;

  let lenDiff = Math.abs(lenX - lenY);

  if (lenX < lenY) {
    binX = "0".repeat(lenDiff) + binX;
  }

  if (lenY < lenX) {
    binY = "0".repeat(lenDiff) + binY;
  }

  for (let i = 0; i < binX.length; i++) {
    let digitFromX = binX[i];
    let digitFromY = binY[i];
    if (digitFromX !== digitFromY) counter++;
  }

  return counter;
}

function convertToBinary(num) {
  let numInBinary = "";

  while (num) {
    let remainder = num % 2;
    numInBinary = remainder + numInBinary;
    num = Math.floor(num / 2);
  }

  return numInBinary;
}

// The top solution provided by LeetCode which incorporates bitwise operations;

// If a number is odd, then its last bit in binary is odd (1);
// If a number is even, then its last bit in binary is even (0);
// XOR if two different numbers will give you 1;
// Shift over to next numbers;
// Divide "x" by 2;

function hammingDistance(x, y) {
  let result = 0;

  while (x > 0 || y > 0) {
    result += (x % 2) ^ (y % 2);
    x >>= 1;
    y >>= 1;
  }

  return result;
}
