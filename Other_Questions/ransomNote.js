/*

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true

*/

function canConstruct(ransomNote, magazine) {
  let arr = [0];

  for (let i = 0; i < ransomNote.length; i++) {
    let letter = ransomNote[i];
    let asciiOfLetter = letter.charCodeAt();
    let alphabetPos = asciiOfLetter - 96;

    if (arr[alphabetPos]) {
      arr[alphabetPos]++;
    }
    else {
      arr[alphabetPos] = 1;
    }
  }

  for (let i = 0; i < magazine.length; i++) {
    let letter = magazine[i];
    let asciiOfLetter = letter.charCodeAt();
    let alphabetPos = asciiOfLetter - 96;

    if (arr[alphabetPos]) {
      arr[alphabetPos]--;
    }
    else {
      arr[alphabetPos] = 0;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num > 0) return false;
  }

  return true;
}
