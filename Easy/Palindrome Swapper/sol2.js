function PalindromeSwapper(str) { 

  // code goes here  
  // if the word itself is a palindrome, then just return the str
  // if not, then write a for loop that slices and then switches adjacent characters
  // use reverse to compare and then if something works, return the palindrome
  
  if (str === str.split('').reverse().join('')){
    return str;
  } else {
    for (var i = 1; i < str.length; i++){
      var pair = str[i-1] + str[i];
      var newPair = pair.split('').reverse().join('');
      var newStr = str.substr(0).replace(pair, newPair);
      if (newStr === newStr.split('').reverse().join('')){
        return newStr;
      }
    }
  }
  return '-1'; 
         
}
   
// keep this function call here 
PalindromeSwapper(readline());