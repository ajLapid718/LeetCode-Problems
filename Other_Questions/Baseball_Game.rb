# You're now a baseball game point recorder.

# Given a list of strings, each string can be one of the 4 following types:

# Integer (one round's score): Directly represents the number of points you get in this round.
# "+" (one round's score): Represents that the points you get in this round are the sum of the last two valid round's points.
# "D" (one round's score): Represents that the points you get in this round are the doubled data of the last valid round's points.
# "C" (an operation, which isn't a round's score): Represents the last valid round's points you get were invalid and should be removed.

# Each round's operation is permanent and could have an impact on the round before and the round after.

# You need to return the sum of the points you could get in all the rounds.

# Example 1:
# Input: ["5","2","C","D","+"]
# Output: 30
# Explanation:
# Round 1: You could get 5 points. The sum is: 5.
# Round 2: You could get 2 points. The sum is: 7.
# Operation 1: The round 2's data was invalid. The sum is: 5.
# Round 3: You could get 10 points (the round 2's data has been removed). The sum is: 15.
# Round 4: You could get 5 + 10 = 15 points. The sum is: 30.

# Example 2:
# Input: ["5","-2","4","C","D","9","+","+"]
# Output: 27
# Explanation:
# Round 1: You could get 5 points. The sum is: 5.
# Round 2: You could get -2 points. The sum is: 3.
# Round 3: You could get 4 points. The sum is: 7.
# Operation 1: The round 3's data is invalid. The sum is: 3.
# Round 4: You could get -4 points (the round 3's data has been removed). The sum is: -1.
# Round 5: You could get 9 points. The sum is: 8.
# Round 6: You could get -4 + 9 = 5 points. The sum is 13.
# Round 7: You could get 9 + 5 = 14 points. The sum is 27.

# Note:
# The size of the input list will be between 1 and 1000.
# Every integer represented in the list will be between -30000 and 30000.

# My solution's runtime: 65ms
def cal_points(ops)
	stack = []

	ops.each do |op|
		if op == "+"
			stack << stack.last(2).reduce(:+)
		elsif op == "D"
			stack << (stack.last * 2)
		elsif op == "C"
			stack.pop
		else
			stack << op.to_i
		end
	end

	stack.reduce(:+)
end

# Top solution with a runtime of 53ms
def cal_points(ops)
    stack = []
    total = 0

    ops.each do |op|
        if op =='C'
            total -= (stack.last || 0)
            stack.pop if stack.length > 0
        elsif op =='D'
            total += ((stack[-1] || 0) * 2)
            stack.push(((stack[-1] || 0) * 2))
        elsif op == '+'
            total += ((stack[-2] || 0) + (stack[-1] || 0))
            stack.push((stack[-2] || 0) + (stack[-1] || 0))
        else
            stack << op.to_i
            total += op.to_i
        end
    end

    total
end
