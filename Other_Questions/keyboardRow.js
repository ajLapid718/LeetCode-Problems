/*

Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

Example:

Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]


Note:

You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.

*/

// My Solution;
// Space Complexity: O(1);
// Time Complexity: O(n*m) where n is the amount of words given and m is the amount of letters within an individual word;

function findWords(words) {
  const targetWords = [];

  const keyboard = {
    "q": "topRow",
    "w": "topRow",
    "e": "topRow",
    "r": "topRow",
    "t": "topRow",
    "y": "topRow",
    "u": "topRow",
    "i": "topRow",
    "o": "topRow",
    "p": "topRow",
    "a": "middleRow",
    "s": "middleRow",
    "d": "middleRow",
    "f": "middleRow",
    "g": "middleRow",
    "h": "middleRow",
    "j": "middleRow",
    "k": "middleRow",
    "l": "middleRow",
    "z": "bottomRow",
    "x": "bottomRow",
    "c": "bottomRow",
    "v": "bottomRow",
    "b": "bottomRow",
    "n": "bottomRow",
    "m": "bottomRow"
  }

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i].toLowerCase();
    let rowAtHand = keyboard[currentWord[0]];
    let flag = true;

    for (let j = 0; j < currentWord.length; j++) {
      let currentLetter = currentWord[j];
      if (keyboard[currentLetter] !== rowAtHand) {
        flag = false;
        break;
      }
    }

    if (flag === true) targetWords.push(words[i]);
  }

  return targetWords;
}
