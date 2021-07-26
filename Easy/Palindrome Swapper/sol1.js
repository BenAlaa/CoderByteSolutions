function PalindromeSwapper(str) { 
  if (str.toLowerCase() === str.toLowerCase().split('').reverse().join('')) {
    return str;
  }
  
  for (var i = 0; i < str.length - 1; i++) {
    var arr = str.toLowerCase().split('');
    var letter1 = arr[i];
    var letter2 = arr[i+1];
    arr.splice(i, 2, letter2, letter1);
    var newStr = arr.join('');
    console.log(newStr)
    if (newStr === newStr.split('').reverse().join('')) {
      return newStr;
    }
  }
  
  return -1;
}

   
// keep this function call here 
PalindromeSwapper(readline());