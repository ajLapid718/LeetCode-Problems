/*

Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:

Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Note: In the string, each word is separated by single space and there will not be any extra space in the string.

*/

// My solution;
function reverseWords(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i].split("");
    words[i] = word.reverse().join("");
  }

  return words.join(" ");
}

// A more optimal solution submitted by another user;
let reverseWords = function(s) {
    let arr = s.split(' ');

    for (let i = 0; i < arr.length; i++) {
        arr[i] = reverse(arr[i]);
    }

    return arr.join(' ');
};

let reverse = function(s) {
    let res = '';

    for (let i = s.length - 1; i >= 0; i--) {
        res += s[i];
    }

    return res;
}
