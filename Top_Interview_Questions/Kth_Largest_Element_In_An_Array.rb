# Find the kth largest element in an unsorted array.
# Note that it is the kth largest element in the sorted order, not the kth distinct element.

# For example,
# Given [3,2,1,5,6,4] and k = 2, return 5.

# Note:
# You may assume k is always valid, 1 ≤ k ≤ array's length.

# My solution with a runtime of 58ms

def find_kth_largest(nums, k)
  nums.sort![-k]
end

=begin

Adding the bang operator to the invocation of #sort makes the array sort in-place.
Therefore, extra auxillary space is not made for another array.

Instead of taking the length of the array and subtracting it by k, I opted to use bracket notation.

Ruby's #sort for the Array Class uses Quick Sort under the hood.
One way to write out Quick Sort would be:

def quicksort(arr)
  return [] if arr.empty?
  pivot_element = arr.first
  left_of_pivot, right_of_pivot = arr[1..-1].partition { |element| (element <=> pivot_element) <= 0 }
  quicksort(left) + [pivot_element] + quicksort(right)
end

=end
