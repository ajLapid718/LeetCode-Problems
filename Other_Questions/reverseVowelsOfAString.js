/*

Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:

Input: "hello"
Output: "holle"

Example 2:

Input: "leetcode"
Output: "leotcede"

Note:
The vowels does not include the letter "y".

*/

// My solution;
function reverseVowels(s) {
  let letters = s.split('');
  let indices = [];

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (isVowel(letter) === true) indices.push(i);
  }

  let leftIdx = 0;
  let rightIdx = indices.length - 1;

  let counter = 0;

  while (leftIdx < rightIdx) {
    let leftVowelIdx = indices[leftIdx];
    let rightVowelIdx = indices[rightIdx];

    if (counter === leftVowelIdx) {
      swap(letters, leftVowelIdx, rightVowelIdx);
      leftIdx++;
      rightIdx--;
    }

    counter++;
  }

  return letters.join('');
}

function isVowel(letter) {
  switch (letter.toLowerCase()) {
    case "a":
      return true;
    case "e":
      return true;
    case "i":
      return true;
    case "o":
      return true;
    case "u":
      return true;
    default:
      return false;
  }
}

function swap(arr, indexOne, indexTwo) {
  let temp = arr[indexOne];
  arr[indexOne] = arr[indexTwo];
  arr[indexTwo] = temp;
}

// Another solution provided by LeetCode, which incorporates a stack;
function reverseVowels(s) {
  let result = '';
  let vowelStack = [];

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (isVowel(letter) === true) vowelStack.push(letter);
  }

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (isVowel(letter) === true) {
      result += vowelStack.pop();
    }
    else {
      result += letter;
    }
  }

  return result;
}

function isVowel(letter) {
  switch (letter.toLowerCase()) {
    case "a":
      return true;
    case "e":
      return true;
    case "i":
      return true;
    case "o":
      return true;
    case "u":
      return true;
    default:
      return false;
  }
}
