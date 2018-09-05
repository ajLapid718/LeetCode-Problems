/*

Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest.
If two words have the same frequency, then the word with the lower alphabetical order comes first.

Example 1:

Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]

Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.

Example 2:

Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]

Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
    with the number of occurrence being 4, 3, 2 and 1 respectively.

Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Input words contain only lowercase letters.

Follow up:
Try to solve it in O(n log k) time and O(n) extra space.

*/

function topKFrequent(words, k) {
  let res = [];
  let obj = {};

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (obj.hasOwnProperty(word) === true) {
      obj[word][0]++;
    }
    else {
      obj[word] = [1, word]
    }
  }

  let tempArr = Object.values(obj);
  tempArr.sort((a,b) => compareFreqs(b[0], a[0]) || compareAlphabeticalOrder(a[1], b[1]));

  for (let i = 0; i < tempArr.length; i++) {
    let info = tempArr[i];
    res.push(info[1]);
    if (res.length === k) break;
  }

  return res;
}

function compareFreqs(freqOne, freqTwo) {
  if (freqOne > freqTwo) return 1;
  if (freqTwo > freqOne) return -1;
  if (freqOne === freqTwo) return 0;
}

function compareAlphabeticalOrder(wordOne, wordTwo) {
  if (wordOne > wordTwo) return 1; // if wordOne > wordTwo, then wordOne appears later in the alphabet...by returning 1, the comparator function will put wordTwo before wordOne, thereby sorting from a to z alphabetically;
  if (wordTwo > wordOne) return -1; // the opposite of the above comment holds true;
  if (wordOne === wordTwo) return 0;
}
