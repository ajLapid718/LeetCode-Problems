# Given an array of integers, every element appears twice except for one. Find that single one.

# Note:
# Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

# My solution using a hash table
def single_number(nums)
  has_a_twin = {}

  nums.each do |num|
    if has_a_twin.has_key?(num)
    	has_a_twin[num] = true
    else
    	has_a_twin[num] = false
    end
  end

  return has_a_twin.key(false)
end

# Top solution, which uses the XOR operator
def single_number(nums)
  nums.reduce(:^)
end
