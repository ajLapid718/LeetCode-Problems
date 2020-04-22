/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Note:

All given inputs are in lowercase letters a-z.

*/

// Recursive approach;
function longestCommonPrefix(strs) {    
  if (!strs.length) return "";

  let sortedWords = strs.sort((a,b) => a.length - b.length);  
  let shortestWord = sortedWords[0];

  let lcp = shortestWord;

  function helper(words) {
    if (!words.length) return;
    
    let wordA = words[0];
    let wordB = words[1];

    if (!wordB) {
      wordB = lcp;
    }

    let i = 0;
    let temp = "";

    while (i < wordA.length && i < wordB.length && i < lcp.length) {
      if (wordA[i] === lcp[i] && wordB[i] === lcp[i]) {
        temp += wordA[i];
      }
      i++;
    }

    lcp = temp;
    helper(words.slice(1));
  }

  helper(strs);
  return lcp;
}

// Iterative approach;

function longestCommonPrefix(strs) {    
  if (!strs.length) return "";
  
  let sortedWords = strs.slice().sort((a,b) => a.length - b.length);
  let shortestWord = strs[0];
  
  let lcp = "";
    
  for (let i = 0; i < shortestWord.length; i++) {
    let currentLetter = shortestWord[i];
    if (!sortedWords.every(word => currentLetter === word[i])) break;
    lcp += currentLetter;
  }
  
  return lcp;
}