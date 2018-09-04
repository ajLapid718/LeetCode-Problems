/*

Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

You need to help them find out their common interest with the least list index sum.
If there is a choice tie between answers, output all of them with no order requirement.
You could assume there always exists an answer.

Example 1:

Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".

Example 2:

Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["KFC", "Shogun", "Burger King"]
Output: ["Shogun"]
Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).

Note:
The length of both lists will be in the range of [1, 1000].
The length of strings in both lists will be in the range of [1, 30].
The index is starting from 0 to the list length minus 1.
No duplicates in both lists.

*/

// Time Complexity: O(n);
// Space Complexity: O(n) where n is the amount of restaurants in the smaller list;

function findRestaurant(listOne, listTwo) {
  let matches = [];
  let obj = {};
  let minIndexSum = Infinity;

  let smallerList;
  let largerList;

  if (listOne.length < listTwo.length) {
    smallerList = listOne;
    largerList = listTwo;
  }
  else {
    smallerList = listTwo;
    largerList = listOne;
  }

  for (let i = 0; i < smallerList.length; i++) {
    let restaurant = smallerList[i];
    obj[restaurant] = i;
  }

  for (let i = 0; i < largerList.length; i++) {
    if (minIndexSum - i < 0) break;
    let restaurant = largerList[i];
    if (obj.hasOwnProperty(restaurant) === true) {
      let tempSum = i + obj[restaurant];
      if (tempSum <= minIndexSum) {
        matches.push(restaurant);
        minIndexSum = tempSum;
      }
    }
  }

  return matches;
}
