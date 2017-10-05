# Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
#
# The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

BRACES = {
    "(" => ")",
    "[" => "]",
    "{" => "}"
    }

def is_valid(s)
    stack = []

    s.chars.each do |element|
        if BRACES.has_key?(element)
            stack << element
        else
            if BRACES[stack.last] == element
                stack.pop
            else
                return false
            end
        end
    end

    stack.empty?
end

# Solution from another user with faster runtime

def is_valid(str)
  stack = []

  return false unless str.length % 2 == 0

  str.each_char do |c|
    case c
      when '{', '(', '['
        stack << c
      when '}'
        return false unless stack.pop == '{'
      when ')'
        return false unless stack.pop == '('
      when ']'
        return false unless stack.pop == '['
    end
  end
  stack.empty?
end
