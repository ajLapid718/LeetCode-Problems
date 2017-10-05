# Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

# push(x) -- Push element x onto stack.
# pop() -- Removes the element on top of the stack.
# top() -- Get the top element.
# getMin() -- Retrieve the minimum element in the stack.

# Example:
# MinStack minStack = new MinStack();
# minStack.push(-2);
# minStack.push(0);
# minStack.push(-3);
# minStack.getMin();   --> Returns -3.
# minStack.pop();
# minStack.top();      --> Returns 0.
# minStack.getMin();   --> Returns -2.

# Your MinStack object will be instantiated and called as such:
# obj = MinStack.new()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.get_min()

class MinStack
    def initialize
        @store = []
    end

    def push(x)
        @store.push(x)
    end

    def pop
        @store.pop
    end

    def top
        @store.last
    end

    def get_min
        @store.min
    end
end

# Solution from another user with a faster runtime

class MinStack
    attr_accessor :stack, :min_stack

    def initialize
        @stack = []
        @min_stack = []
    end

    def push(x)
        stack.push(x)
        if min_stack.empty? || x <= min_stack.last
          min_stack.push(x)
        end
    end

    def pop
        if stack.last == min_stack.last
          min_stack.pop
        end
        stack.pop
    end

    def top
        stack.last
    end

    def get_min
        min_stack.last
    end
end
