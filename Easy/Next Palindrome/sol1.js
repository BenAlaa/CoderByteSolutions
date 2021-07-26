function NextPalindrome(num){
  var string = "";
  
  if( num < 10 ){
      return num + 1;
  }else if( (string + num).split("").reverse().join("") == num ){
      return num;
  }else{
      num++;
      return NextPalindrome(num);
  }
}
 
// keep this function call here 
NextPalindrome(readline());