Quick Sort

Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

Pivot Helper

In order to implemnet quick sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
Given an array, this helper function should designate an element as the pivot
It should then rearrange elements in the array so that all values less than the pivot are moved to the right of the pivot
The order fo elements on either side of the pivot doesn't matter
The helper should do this in place, that is, it should not create a new array
When complete, the helper should return the index of the pivot

Picking a pivot

The runtime of quick sort depends in part on how one selects the pivot
Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
For simplicity, we'll always choose the pivot to be the first element (we'll talk about consequences of this later)

Pivot Strategy
    It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
    Grab the pivot from the start of the array
    Store the current pivot index in a variable (this will keep track of where the pivot should end up)
    Loop through the array from the start until the end
        If the pivo is greater than the current element, increment the pivot index variable and then swap the current element with the element at th pivot index
    Swap th starting element (the pivot) with the pivot index
    Return pivot index

Strategy
    Call the pivot helper on the array
    When the helper returns to you the updated pivot index, recursively call the pivot help on the subarray to the left fo that index, and the subarray to the rigth of that index    
    Your base case ocours when you consider a subarray with less than 2 elements

Big O
    Time Complexity (Best case) - O(n log n)
    Time Complexity (Avarage case) - O(n log n)
    Time Complexity (Worst case) - O(n²)
    Space Complexity - O(log n)