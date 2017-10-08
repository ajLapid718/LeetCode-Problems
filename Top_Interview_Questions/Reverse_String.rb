# Write a function that takes a string as input and returns the string reversed.

# Example:
# Given s = "hello", return "olleh".

def reverse_string(s)
    reversed_str = ""
    counter = -1

    while counter >= (s.length * -1)
        reversed_str << s[counter]
        counter += -1
    end

    reversed_str
end

# Alternatively

def reverse_str(s)
  s.reverse
end
