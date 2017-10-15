# Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
# For example, given the array [-2,1,-3,4,-1,2,1,-5,4], the contiguous subarray [4,-1,2,1] has the largest sum = 6.

# My solution beat 100% of solutions runtime-wise so I'm pretty happy about that; I still have to learn the divide & conquer approach though

def max_sub_array(nums)
  current_sum = nums.first
  maximum = nums.first

  nums[1..-1].each do |num|
      current_sum = 0 if current_sum.negative?
      current_sum += num
      maximum = current_sum if current_sum > maximum
  end

  maximum
end
