/*

We are given two sentences A and B. (A sentence is a string of space separated words. Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words.

You may return the list in any order.



Example 1:

Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]

Example 2:

Input: A = "apple apple", B = "banana"
Output: ["banana"]

Note:

0 <= A.length <= 200
0 <= B.length <= 200
A and B both contain only spaces and lowercase letters.

*/

function uncommonFromSentences(A, B) {
  let uncommonWords = [];
  let obj = {};

  let sentenceOne = A.split(" ");
  let sentenceTwo = B.split(" ");

  for (let i = 0; i < sentenceOne.length; i++) {
    let word = sentenceOne[i];
    obj[word] = obj[word] + 1 || 1;
  }

  for (let i = 0; i < sentenceTwo.length; i++) {
    let word = sentenceTwo[i];
    obj[word] = obj[word] + 1 || 1;
  }

  for (let key in obj) {
    let val = obj[key];
    if (val === 1) uncommonWords.push(key);
  }

  return uncommonWords;
}
