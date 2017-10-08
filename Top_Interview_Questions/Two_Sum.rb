# Given an array of integers, return indices of the two numbers such that they add up to a specific target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# Example:
# Given nums = [2, 7, 11, 15], target = 9,

# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1]

# My solution

def two_sum(nums, target)
  numbers_checked = {}

  nums.each do |num|
      other_part_of_pair = target - num
      if numbers_checked.has_key?(other_part_of_pair)
          return [nums.index(other_part_of_pair), nums.rindex(num)]
      else
          numbers_checked[num] = true
      end
  end
end

# Alternatively

def two_sum(nums, target)
  hash = nums.map.with_index { |x,i| [x,i] }.to_h
  nums.each_with_index do |num, idx|
      compliment = target - num
      if hash.key?(compliment)
          if hash[compliment] != idx
              return [idx, hash[compliment]]
          end
      end
  end
end
