/*

Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]

Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]

Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/

function merge(intervals) {
  if (intervals.length <= 1) return intervals;

  let sortedTimes = intervals.sort((a,b) => a.start - b.start);
  let mergedIntervals = [sortedTimes[0]];

  for (let i = 1; i < sortedTimes.length; i++) {
    let previousInterval = mergedIntervals[mergedIntervals.length - 1];
    let currentInterval = sortedTimes[i];

    if (currentInterval.start <= previousInterval.end) {
      let upperBoundTime = Math.max(previousInterval.end, currentInterval.end);
      mergedIntervals[mergedIntervals.length - 1].end = upperBoundTime;
    }
    else {
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
}
