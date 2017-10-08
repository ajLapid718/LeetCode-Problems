# Given an array of integers, find if the array contains any duplicates.
# Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

# My solution

def contains_duplicate(nums)
  !(nums == nums.uniq)
end

# Alternatively

def contains_duplicate(nums)
  has_a_twin = {}

  nums.each do |num|
    if has_a_twin.has_key?(num)
      has_a_twin[num] = true
      return true
    else
      has_a_twin[num] = false
    end
  end

false
end
