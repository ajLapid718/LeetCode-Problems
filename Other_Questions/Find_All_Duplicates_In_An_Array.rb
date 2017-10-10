# Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

# Find all the elements that appear twice in this array.

# Could you do it without extra space and in O(n) runtime?

# Example

# Input:
# [4,3,2,7,8,2,3,1]

# Output:
# [2,3]

# My solution with a runtime of 212ms

def find_duplicates(nums)
  duplicates = []

  nums.each do |num|
    visited = (num.abs - 1)
    if nums[visited] < 0
      duplicates << num.abs
    else
      nums[visited] *= -1
    end
  end

  duplicates
end

# Top solution with a runtime of 182ms (slightly refactored by me for readability purposes)

def find_duplicates(nums)
  duplicates = []

  nums.each do |int|
    visited = (int.abs - 1)
    target = int.abs
    if nums[visited] < 0
      duplicates.push(target)
    else
      nums[visited] *= -1
    end
  end

  return duplicates
end
