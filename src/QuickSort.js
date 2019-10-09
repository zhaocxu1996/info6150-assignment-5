// Reference: mainly from the lecture slides of INFO 6205, prof Robin's Java code
class QuickSort{
    constructor(){
      //empty body
    }
  
    quickSort(arr) {
      //if arr only contains one or less element, return itself
      if (arr.length <= 1) { 
        return arr;
      } else {
        //get an element that put the elements less than it to left array, larger than it to right array
        let partition = arr.pop();
        let left = [];
        let right = [];
        let length = arr.length;
        for (let i = 0; i < length; i++) {
          if (arr[i] <= partition) {
            left.push(arr[i]);
          } else {
            right.push(arr[i]);
          }
        }
        return this.combine(this.quickSort(left), partition, this.quickSort(right));
      }
    }
    //combine left array, partition and right array together
    combine(left, partition, right) {
      let len = left.length + 1 + right.length;
      let result = new Array(len);
      let counter = 0;
      while (counter < left.length) {
        result[counter] = left[counter];
        counter++;
      }
      result[counter++] = partition;
      let j = 0;
      while (j < right.length) {
        result[counter] = right[j];
        counter++;
        j++;
      }
      return result;
    }
  
    test() {
      let arr = [9,8,7,6,5,4,3,2,1];
      console.log(this.quickSort(arr));
    }
  }
  
  let quickSort = new QuickSort();
  quickSort.test();