# ALGORITHMS & DATA STRUCTURES

Information Sources:
Bro Code - [ALGS & DS](https://youtu.be/CBYHwZcbD-s)

prerequesites
big O notation
NOTE: learn log n and n log n

big O notation is to describe which code is faster than the other, relying on none other than amount of operations
as it cant differ across machines compared to time, here are the following types of output

depending on what we coun't the number of operations can be as low as 2n or as high as 5n + 2
but regardless of the exact number, the number of operations grows roughly proportionally with n
if n duobles, the number of operations will also roughly double

it could go linear
f(n) could be linear (f(n) = n)
O(n) in notation aka time defined by n growing

or sharp ( quadratic )
f(n) could be quadratic (f(n) = n2)
O(n2) is when there is an O(n) operation within an O(n) operation for example a for loop that takes n

or stay in a same amount of time, relative to the growing n
f(n) could be constant (f(n) = 1)

or f(n) could be entirely different

simplify big o algs

O(2n) -> O(n)
O(500) -> O(1)
O(13n2) -> O(n2)
O(n + 10) -> O(n)
O(1000n + 50) -> O(n)
O(n2 + 5n + 8) -> O(n2)

what does better mean?
faster in time?
less memory intense?
more readable?

HOW TO FIND A COMPLEXITY? BIG O SHORTHANDS
there are some rules they might not always work but can be a great starting point
1: arithmetics operations are constant.
2: variable assignment is constant
3: accessing elements in an array by index or object by key is constant
4: in a loop the complexity is the length of the loop times the complextiy of whatever happens within the loop

so if you know that something isn't N tied, then it is constant O(1), but if N influences the amount of time code has to iterate,
then it is O(n or n2)

problem solving approach
problem solving patterns
recursion
searching algorithms
bubble sort
selection sort
insertion sort
merge sort
quick sort
radix sort

data structure

singly linkd lists
doubly linked lists
stacks & queues
binary search trees
tree traversal
binary heaps
hash tables
graphs
graph traversal
dijkstras algorithm
