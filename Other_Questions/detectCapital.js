/*

Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital if it has more than one letter, like "Google".

Otherwise, we define that this word doesn't use capitals in a right way.

*/

// My solution;
function detectCapitalUse(word) {
  return word.toLowerCase() === word || word.toUpperCase() === word || word[0].toUpperCase() + word.slice(1).toLowerCase() === word;
}

// Top solution;
function detectCapitalUse(word) {
  return word.slice(1).toLowerCase() === word.slice(1) || word.toUpperCase() === word;
}
