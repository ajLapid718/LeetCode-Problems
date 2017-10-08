# Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

# For example:

# Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

# Follow up:
# Could you do it without any loop/recursion in O(1) runtime?

# My solution using recursion and a helper method

def add_digits(num)
    return num if num < 10
    add_digits(add_helper(num))
end

def add_helper(num)
    num.to_s.chars.map(&:to_i).reduce(:+)
end

# Solution that uses mathematical principles, does not use any loops or recursion, and is O(1) in runtime
def add_digits(num)
  return 0 if num == 0
  (num - 1) % (9) + (1)
end
