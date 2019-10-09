class StringReverse {
    constructor(){
        //empty body
    }
  
    reverseString(str) {
      let charArray = new Array(str.length);
      let end = str.length-1;
      let start = 0;
      while (end >= 0) {
        charArray[start] = str.charAt(end);
        start++;
        end--;
      }
      let result = "";
      for (let i = 0; i < str.length; i++) {
        result += charArray[i];
      }
      console.log(result);
      return result;
    }
}
  
let stringReverse = new StringReverse();
stringReverse.reverseString("String");