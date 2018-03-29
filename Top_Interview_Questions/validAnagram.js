/*

Given two strings s and t, write a function to determine if t is an anagram of s.

 For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters?
How would you adapt your solution to such case?

*/

// My solution with a runtime of 108ms

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let obj = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    obj[letter] = obj[letter] + 1 || 1;
  }

  for (let j = 0; j < t.length; j++) {
    let letter = t[j];
    obj2[letter] = obj2[letter] + 1 || 1;
  }

  for (let k = 0; k < s.length; k++) {
    let letter = s[k];
    if (obj[letter] !== obj2[letter]) {
      return false;
    }
  }

  return true;
}

// Top solution with a runtime of 60ms

function isAnagram(s,t) {
  const chars = new Array(128).fill(0); // Instantiate a new array with 128 placeholder zeros (97 to 122 are integers representing a through z in unicode);

  if (s.length !== t.length) { // Anagrams, by definition, must be the same length;
    return false; // If we know they are the same length, then aftewards we have to verify if the frequencies of shared letters match as well;
  } // Examples: 1) "aab" & "baa" (same length + two a's in each word as well as one b in each word === anagram) ;
              // 2) "aab" & "bba" (same length + each word has one b...however, the first word has two a's whereas the second word has only one a !== anagram);

  for (let i = 0; i < s.length; i++) { // Iterate through the letters of the first argument passed in;
    let letterInUnicode = s.charCodeAt(i); // String.prototype.charCodeAt(index); Convert the letter at the current index to unicode integer;
    chars[letterInUnicode] += 1; // Increment the value of the element at the corresponding index;
  } // This allows us to see the frequency of each letter for the first word...the bar is now set and established;

  for (let i = 0; i < t.length; i++) { // Iterate through the letters of the second argument passed in;
    let letterInUnicode = t.charCodeAt(i); // See line 59;
    if (chars[letterInUnicode] === 0) { // 1) If we access an index holding an element that is zero, then this current letter is a new letter, meaning the first word did not contain this letter;
      return false; // 2) This also handles the scenario where the second word has more (amount) of a certain letter than the first word has for the same letter; "aab" && "aaa"; because if we hit the letter again we'll decrement to -1, indicating imbalanced frequencies;
    } // The point is, seeing a value of 0 at a particular index indicates that the two words are not anagrams;
    chars[letterInUnicode] -= 1; // Decrement to update the frequency; both arrays should end up with 128 zeros if the words are anagrams;
  }

  return true; // There was never a point where we accessed an index holding the value of 0; the words are anagrams;
}
