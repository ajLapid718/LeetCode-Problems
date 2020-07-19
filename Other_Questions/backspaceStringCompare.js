// helper function to determine if an element is a lowercase letter;
function isLowerCase(letter) {
  return letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122;
}

// helper function centered on this core business logic;
// if you encounter a "#", then we have to keep a count of that;
// if we encounter a lowercase letter, with previous backspaces accounted for, then we have to skip (backspace) that letter;
// if we encounter a lowercase letter, with no previous backspaces at all, then we can add that letter to the final string;
function finalizeText(text) {
  let outputStr = "";
  let idx = text.length - 1;
  let backSpaces = 0;

  while (idx >= 0) {
    if (text[idx] === "#") {
      backSpaces++;
      idx--;
      continue;
    }
    else {
      if (text[idx] !== "#" && backSpaces) {
        idx--;
        backSpaces--;
        continue;
      }
      
      if (text[idx] !== "#" && !backSpaces) {
        outputStr = text[idx] + outputStr;
        idx--;
      }
    }
  }
  
  return outputStr;
}

// main();
function backspaceCompare(S, T) {
  return finalizeText(S) === finalizeText(T);
}