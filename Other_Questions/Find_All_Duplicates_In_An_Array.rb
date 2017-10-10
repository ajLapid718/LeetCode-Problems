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
    val = (num.abs) - 1
    if nums[val] < 0
      duplicates << (val + 1)
    else
      nums[val] *= -1
    end
  end

  duplicates
end

# Top solution with a runtime of 182ms

def find_duplicates(nums)
  res = []

  nums.each do |x|
    x = x.abs
    if nums[x-1] < 0
        res.push(x)
    else
      nums[x-1] *= -1
    end
  end

  return res
end
