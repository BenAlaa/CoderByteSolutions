function NextPalindrome(num) {
  num++;
  if(num.toString().split('').reverse().join('') === num.toString()) {
    return num;
  }
return NextPalindrome(num);
}

// keep this function call here 
NextPalindrome(readline());