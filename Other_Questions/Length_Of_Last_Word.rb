# Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

# If the last word does not exist, return 0.

# Note: A word is defined as a character sequence consists of non-space characters only.

# For example,
# Given s = "Hello World",
# return 5

# My solution with a runtime of 58ms

def length_of_last_word(s)
  return 0 if s.strip.empty?
  s.split(" ").last.length
end

# Top solution with a runtime of 49ms and uses counters to traverse the string

def length_of_last_word(s)
  tail = s.length - 1

  until s[tail] != " "
      tail -= 1
  end

  target_length = 0

  while (s[tail] != " ") && (tail >= 0)
      target_length += 1
      tail -= 1
  end

  return target_length
end
