/*

Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid.

Formally, a parentheses string is valid if and only if:

It is the empty string, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.

Example 1:

Input: "())"
Output: 1
Example 2:

Input: "((("
Output: 3
Example 3:

Input: "()"
Output: 0
Example 4:

Input: "()))(("
Output: 4

Note:

S.length <= 1000
S only consists of '(' and ')' characters.

*/

function minAddToMakeValid(str) {
  let forwardBalance = 0;
  let tempBalance = 0;

  // Determine how many additional opening parentheses we need, if any;
  for (let i = 0; i < str.length; i++) {
    let character = str[i];

    if (character === "(") tempBalance--;
    if (character === ")") tempBalance++;

    if (tempBalance > forwardBalance) forwardBalance = tempBalance;
  }

  let backwardBalance = 0;
  tempBalance = 0;

  // Determine how many additional closing parentheses we need, if any;
  for (let i = str.length - 1; i >= 0; i--) {
    let character = str[i];

    if (character === "(") tempBalance++;
    if (character === ")") tempBalance--;

    if (tempBalance > backwardBalance) backwardBalance = tempBalance;
  }

  return forwardBalance + backwardBalance;
}
