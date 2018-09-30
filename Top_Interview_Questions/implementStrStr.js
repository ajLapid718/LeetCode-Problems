/*

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string.
This is consistent to C's strstr() and Java's indexOf().

*/

// My initial solution;
function strStr(haystack, needle) {
  if (needle.length === 0) return 0;
  if (needle.length > haystack.length) return -1;

  let len = needle.length;

  for (let i = 0; i < haystack.length; i++) {
    let currLetter = haystack[i];
    if (currLetter === needle[0] && haystack[i+len-1] === needle[len-1]) {
      let currSlice = haystack.slice(i, len + i);
      if (currSlice === needle) return i;
    }
  }

  return -1;
}

// My alternative solution;
function strStr(haystack, needle) {
  if (needle.length === 0) return 0;
  if (needle.length > haystack.length) return -1;

  let maxLen = haystack.length - needle.length + 1;

  for (let i = 0; i < maxLen; i++) {
    if (haystack[i] === needle[0]) {
      let flag = true;
      for (let j = i + 1, k = 1; j < i + needle.length; j++, k++) {
        if (haystack[j] !== needle[k]) {
          flag = false;
          break;
        }
      }
      if (flag === true) return i;
    }
  }

  return -1;
}
