class StringReverse {

  constructor(){
    //empty body
  }

  reverseString(str) {
    //init an char array to contain the reversed string
    let charArray = new Array(str.length);
    //read string from the end
    let end = str.length-1;
    //set char array from the first index
    let start = 0;
    while (end >= 0) {
      charArray[start] = str.charAt(end);
      start++;
      end--;
    }
    //add all the element in the char array to get the reversed string
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