/*

Given a string s and a string t, check if s is subsequence of t.

You may assume that there is only lower case English letters in both s and t.
t is potentially a very long (length ~= 500,000) string, and s is a short string (<=100).

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
(ie, "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
s = "abc", t = "ahbgdc"

Return true.

Example 2:
s = "axc", t = "ahbgdc"

Return false.

*/

// My solution;
function isSubsequence(s,t) {
  if (!s.length && !t.length) return true;
  if (!t.length) return false;

  let currIdx = 0;
  let otherIdx = 0;

  while (currIdx < s.length) {
    let currLetter = s[currIdx];
    let otherLetter = t[otherIdx];

    if (currLetter === otherLetter) {
      currIdx++;
      otherIdx++;
    }
    else if (otherIdx === t.length) {
      return false;
    }
    else {
      otherIdx++;
    }
  }

  return true;
}

// One of the top solutions provided by LeetCode;
function isSubsequence(s,t) {
  let i = 0;

  for (let char of s) {
    while (i < t.length && char !== t[i]) {
      i++;
    }

    if (i >= t.length) return false;
    i++;
  }

  return true;
}
