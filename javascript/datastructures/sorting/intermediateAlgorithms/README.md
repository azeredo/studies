Why?
    The sorting algorithms we've learned so far don't scale well
    Try out boubble sort on an array of 100.000 elements, it will take quite some time
    There is a family of sorting algorithms that can improve time complexity from O(n²) to O(n log n)
    There's a tradeoff between efficiency and simplicity
    The more efficient algorithms are much less simple, and generally take longer to understand

Objectives
    Understand the limitations of the sorting alogtihms we've learned so far
    Implemnet merge sort
    Implement quick sort
    Implement radix sort

#let data = Array.apply(null, {length: 100000}).map(Function.call, Math.random)