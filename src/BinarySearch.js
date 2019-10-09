class BinarySearch {

    constructor(){
      //empty body
    }
    /**
     * 
     * @param {arr} p - array 
     * @param {from} p - start index
     * @param {to} p - end index
     * @param {value} p - target to search 
     */  
    binarySearch(arr, start, end, target) {        
      // Stop Condtion 
      if (start > end) {
        return false; 
      }
      // if start+end is odd, mid equals to the front index of median
      let mid = (start+end)%2==0 ? (start+end)/2 : (start+end-1)/2;     
      // Compare mid with target 
      if (arr[mid] == target) {
        return true; 
      }          
      // If middle element is greater than target, search front of midian 
      // Else, search start from midian
      if(arr[mid] > target) {
        return this.binarySearch(arr, start, mid-1, target); 
      } else {
        return this.binarySearch(arr, mid+1, end, target); 
      }
    } 
  
    test(){
      // Test code 
      let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
      let target1 = 9; 
      console.log(this.binarySearch(arr, 0, arr.length-1,target1));
      let target2 = 10; 
      console.log(this.binarySearch(arr, 0, arr.length-1,target2));
    }
  }
  
  let binarySearch = new BinarySearch();
  binarySearch.test();