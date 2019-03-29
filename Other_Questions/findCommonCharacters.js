/*

Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).
For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]

Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]


Note:

1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] is a lowercase letter

*/

// My initial solution;
function commonChars(arr) {
  let store = {};

  let firstWord = arr[0];

  for (let i = 0; i < firstWord.length; i++) {
    let currentLetter = firstWord[i];
    store[currentLetter] = store[currentLetter] + 1 || 1;
  }

  for (let i = 1; i < arr.length; i++) {
    let currentWord = arr[i];
    let tempStore = {};

    for (let j = 0; j < currentWord.length; j++) {
      let currentLetter = currentWord[j];
      tempStore[currentLetter] = tempStore[currentLetter] + 1 || 1;
    }

    for (let letter in store) {
      if (tempStore.hasOwnProperty(letter) === true) {
        store[letter] = Math.min(store[letter], tempStore[letter]);
      }
      else {
        delete store[letter];
      }
    }
  }

  let outputArr = [];

  for (let letter in store) {
    let frequency = store[letter];
    while (frequency) {
      outputArr.push(letter);
      frequency--;
    }
  }

  return outputArr;
}

// Alternatively;
function commonChars(arr) {
  let result = arr[0].split("");

  for (let i = 1; i < arr.length; i++) {
    let currentWord = arr[i];
    result = updateResult(result, currentWord);
  }

  return result;
}

function updateResult(result, currentWord) {
  let currentResult = [];
  let updatedObj = populateLettersFrequencies(result);

  for (let i = 0; i < currentWord.length; i++) {
    let currentLetter = currentWord[i];

    if (updatedObj.hasOwnProperty(currentLetter) === true) {
      currentResult.push(currentLetter);
      updatedObj[currentLetter]--;
      if (updatedObj[currentLetter] === 0) {
        delete updatedObj[currentLetter];
      }
    }
  }

  return currentResult;
}

function populateLettersFrequencies(word) {
  let obj = {};

  for (let i = 0; i < word.length; i++) {
    let currentLetter = word[i];
    obj[currentLetter] = obj[currentLetter] + 1 || 1;
  }

  return obj;
}
