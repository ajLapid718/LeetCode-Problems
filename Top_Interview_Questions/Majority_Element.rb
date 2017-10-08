# Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
# You may assume that the array is non-empty and the majority element always exist in the array.

# My solution with a runtime of 80ms
def majority_element(nums)
  counter_hash = Hash.new(0)

  nums.each do |num|
    counter_hash[num] += 1
  end

  counter_hash.find { |k,v| v == counter_hash.values.max }.first
end

# Top Solution with a better runtime
def majority_element(nums)
  return nums.first if nums.size == 1
  return nums.sort[nums.size/2]
end
