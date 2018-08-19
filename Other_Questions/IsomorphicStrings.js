/*

Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters.
No two characters may map to the same character but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true

*/

function isIsomorphic(s,t) {
  let obj = {};
  let objTwo = {};

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    let otherLetter = t[i];
    if (obj[letter] === undefined) {
      obj[letter] = otherLetter;
    } else {
      if (obj[letter] !== otherLetter) return false;
    }
  }

  for (let key in obj) {
    let val = obj[key];
    if (objTwo[val] === undefined) {
      objTwo[val] = key;
    } else {
      return false;
    }
  }

  return true;
}
