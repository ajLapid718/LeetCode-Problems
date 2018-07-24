/*

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:

Input: "race a car"
Output: false

*/

// My solution;
function isPalindrome(s) {
  let resStr = "";
  let strLower = s.toLowerCase();

  for (let idx = 0; idx < strLower.length; idx++) {
    let char = strLower[idx];
    if (isNumeric(char) || isLetter(char)) {
      resStr += char;
    }
  }

  let i = 0;
  let j = resStr.length - 1;

  while (i < j) {
    let frontChar = resStr[i];
    let backChar = resStr[j];
    if (frontChar !== backChar) return false;
    i++;
    j--;
  }

  return true;
}

function isNumeric(char) {
  let code = char.charCodeAt();
  return code >= 48 && code <= 57;
}

function isLetter(char) {
  let code = char.charCodeAt();
  return code >= 97 && code <= 122;
}

// Top Solution Provided By LeetCode;
function isPalindrome(s) {
  s = s.replace(/( |[^a-zA-Z0-9])/g, '').toLowerCase()
  var i = 0
  var j = s.length - 1

  while (i < j){
    if (s[i] === s[j]) {
      i++
      j--
    } else {
      return false
    }
  }

  return true
};
