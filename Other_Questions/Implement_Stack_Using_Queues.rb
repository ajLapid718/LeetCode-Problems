# Implement the following operations of a stack using queues.

# push(x) -- Push element x onto stack.
# pop() -- Removes the element on top of the stack.
# top() -- Get the top element.
# empty() -- Return whether the stack is empty.

# Notes:
# You must use only standard operations of a queue -- which means only push to back, peek/pop from front, size, and is empty operations are valid.
# Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.
# You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).

# My solution with a runtime of 52ms
class MyStack
    # Initialize your data structure here.
    def initialize()
        @store = []
    end

    # Push element x onto stack.
    def push(x)
        @store << x
    end

    # Removes the element on top of the stack and returns that element.
    def pop()
        @store.pop
    end

    # Get the top element.
    def top()
        @store.last
    end
    # Returns whether the stack is empty.
    def empty()
        @store.size.zero?
    end
end

# Top solution with a runtime of 48ms
class MyStack
    # Initialize your data structure here.
    attr_reader :count # slightly improves runtime

    def initialize
        @q1 = []
        @q2 = []
        @count = 0
    end

    # Push element x onto stack.
    def push(x)
        @q1 << x
        @count += 1
    end

    # Removes the element on top of the stack and returns that element.
    def pop
      while @q1.length > 1
        @q2.push(@q1.shift)
      end

      result = @q1.shift
      @q1 = @q2
      @q2 = []
      @count -= 1

      return result
    end

    # Get the top element.
    def top
      while @q1.length > 1
        @q2.push(@q1.shift)
      end

      result = @q1.first
      @q2.push(@q1.shift)
      @q1 = @q2
      @q2 = []

      return result
    end

    # Returns whether the stack is empty.
    def empty
        @count == 0
    end
end
