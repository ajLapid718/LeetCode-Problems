/*

Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.

Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.

*/

function frequencySort(s) {
  let obj = {};
  let buckets = [null];
  let resArr = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    obj[char] = obj[char] + 1 || 1;
    buckets[i+1] = null;
  }

  for (let key in obj) {
    let val = obj[key];

    if (buckets[val] === null) {
      buckets[val] = [];
    }

    if (buckets[val] !== null) {
      let i = 0;
      while (i < val) {
        buckets[val].push(key);
        i++;
      }
    }
  }

  for (let i = 0; i < buckets.length; i++) {
    let bucket = buckets[i];
    if (bucket) resArr.push(...bucket);
  }

  return resArr.reverse().join('');
}
