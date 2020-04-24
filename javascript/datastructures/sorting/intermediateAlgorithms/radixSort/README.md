Radix Sort

Making sort without comparisons

Radix sort is a special sorting algorithm that works on list of integer positive numbers
It never makes comparisosn between elements
It exploits the fact that information about the size of a number is encoded in the number of digits
More digits means a bigger number

Helpers Strategy
    In order to implement radix sort, it's helpful to build a few helper functions first:
        getDigit(num, place): returns the digit in num at the given place value
        digitCount(num): return the number of digits in num
        mostDigits(nums): Given an array of numbers, returns the number of digits in the largest numbers in the list

Strategy
    Define a function that accepts list of numbers
    Figure out how many digits the largest number has
    Loop from n = 0 up to this largest number of digits
    For each iteration of the loop:
        Create buckets for each digit (0 to 9)
        Place each number in the corresponding bucket based on its nth digit
    Replace our existing array with values in our buckets, starting with 0 and going up to 9
    Return list at the end

Big O - n - length of array | k - number of digits (average)
    Time Complexity (Best) - O(nk)    
    Time Complexity (Avarage) - O(nk)    
    Time Complexity (Worst) - O(nk)    
    Space Complexity (Best) - O(n + k)    