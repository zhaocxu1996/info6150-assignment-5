Completed binary search, quick sort and string reverse on Repl.it.
Reference: mainly from the lecture slides of INFO 6205, prof Robin.
In BinarySearch.js, first set the stop condition, then compare the midian element with target. If middle element is greater than target, search front of midian. Else, search start from midian.
In QuickSort.js, if arr only contains one or less element, return itself. Then, get an element that put the elements less than it to left array, larger than it to right array. Now we have 2 arrays and 1 element, combine them into 1 array.
In StringReverse.js, first init an char array to contain the reversed string. Then read string from the end and set char array from the first index. Finish with adding all the element in the char array to get the reversed string.