/*

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

Note: You may assume the string contain only lowercase letters.

*/

function firstUniqChar(s) {
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    obj[letter] = obj[letter] + 1 || 1;
  }

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (obj[letter] === 1) return i;
  }

  return -1;
}
