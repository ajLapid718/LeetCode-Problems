# Given a binary array, find the maximum number of consecutive 1s in this array.

# Example:
# Input: [1,1,0,1,1,1]
# Output: 3
# Explanation: The first two digits or the last three digits are consecutive 1s.
# The maximum number of consecutive 1s is 3.

# Note:
# The input array will only contain 0 and 1.
# The length of input array is a positive integer and will not exceed 10,000

# My solution with a runtime of 112ms
def find_max_consecutive_ones(nums)
	counter = 0
	arr = []

	nums.each do |num|
		if num == 1
			counter += 1
			arr << counter
		else
			counter = 0
		end
	end

	if arr.empty?
		return counter
	else
		return arr.max
	end
end

# Top soluton with a runtime of 98ms
def find_max_consecutive_ones(nums)
  max = 0
  counter = 0
  nums.each do |n|
    if n == 0
      max = counter if counter > max
      counter = 0
    else
      counter += 1
    end
  end
  max > counter ? max : counter
end
