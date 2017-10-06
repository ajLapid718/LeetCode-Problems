# Implement the following operations of a queue using stacks.

# push(x) -- Push element x to the back of queue.
# pop() -- Removes the element from in front of queue.
# peek() -- Get the front element.
# empty() -- Return whether the queue is empty.

# Notes:
# You must use only standard operations of a stack -- which means only push to top, peek/pop from top, size, and is empty operations are valid.
# Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
# You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).

# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue.new()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()

class MyQueue
    # Initialize your data structure here.
    def initialize()
        @store = []
    end

    # Push element x to the back of queue.
    def push(x)
        @store.unshift(x)
    end

    # Removes the element from in front of queue and returns that element.
    def pop()
        @store.pop
    end

    # Get the front element.
    def peek()
       @store.last
    end

    # Returns whether the queue is empty.
    def empty()
        @store.size.zero?
    end
end
