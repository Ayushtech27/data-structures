# Big O Notation

- Big O notation is a powerful tool used in computer science to describe the time complexity or space complexity of algotithms.
- It provides a standardized way to compare the efficiency of different algorithms in terms of their worst-case performance.
- It analyses the worst-case situation of algorithm.
- Big O Notation is a way to formalize fuzzy counting.
  -It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.
- We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases.
  . f(n) could be linear (f(n)=n)
  . f(n) could be quadratic (f(n)=n^2)
  . f(n) could be constant (f(n)=1)
  . f(n) could be something entirely different.

- Big O Shorthands:
  . Arithmatic operations are constant.
  . Variable assignment is constant.
  . Accessing elements in an array (by index) or object (by key) is constant.
  . In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.
  . Logarithmic time complexity is great.
  . Certain searching algorithms have logarithmic time complexity.
  . Efficient searching algorithms involve logarithms.
  . Efficient sorting algorithms involve logarithms.
  . Recursion sometimes involve logarithms.

- Sometimes you'll hear term audxiliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs.
  Unless otherwise noted, when we talk about space complexity, technically we'll be talking about auxiliary space complexity.

- Space Complexity in JS - Rules of thumb
  . Most primitives (booleans, numbers, undefined, null) are constant space.
  . Strings require O(n) space (where n is the string length)
  . Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects).

# When to use objects:

- When you don't need order.
- When you need fast access/insertion and removal
  When we say quick:
  . Insertion - O(1)
  . Removal - O(1)
  . Searching - O(N)
  . Access - O(1)
- Big O of Objects Methods:
  . Object.keys - O(N)
  . Object.values - O(N)
  . Object.entries - O(N)
  . hasOwnProperty - O(1)

# When to use arrays:

- When you need order.
- When you need fast access / insertion and removal (sort of....)
- Big O of Arrays:
  . Insertion - It depends....
  . Removal - It depends....
  (push and pop is always faster than shift and unshift)
  . Searching - O(N)
  . Access - O(1)
- Big O of Array Operations
  . push - O(1)
  . pop - O(1)
  . shift - O(N)
  . unshift - O(N)
  . concat - O(N)
  . slice - O(N)
  . splice - O(N)
  . sort - O(N log N)
  . forEach/map/filter/reduce/etc. - O(N)

# Problem Solving:

- Understand the Problem
- Explore Concrete Examples
- Break it Down
- Solve/Simplify
- Look Back and Refactor

# Understand the Problem

1. Can I restate the problem in my own words.
2. What are the inputes that go into the problem.
3. What are the outputs that should come from the solutions to the problem.
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
5. How should I label the important pieces fo data that are a part of the problem.

# Explore Concrete Examples

1. Start with Simple Examples
2. Progress to More Complex Examples
3. Explore Examples with Empty Inputs
4. Explore Example with Invalid Inputs

# Break it down

Explecitly write out the steps you need to take: This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

# Solve/Simplify

- Simplify:
  - Find the core difficulty in what you're trying to do
  - Temporarily ignore the difficulty.
  - Write a simplified solution.
  - Then incorporate that difficulty back in.

# Look back and refactor

- Refactoring Questions:
- Can you check the result?
- Can you derive the result differently?
- Can you use teh result or method for some other problem?
- Can you improve the performance of your solutions?
- How have other people solved this problem.
