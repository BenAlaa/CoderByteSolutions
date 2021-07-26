function SimpleSymbols(str) { 

  // code goes here  
  
  var str = '=' + str + '=';

  // loop through entire string
  for (var i = 0; i < str.length; i++) {
    
    // check to see if current character is an alphabetic character  
    // by using a simple case-insensitive regex pattern 
    if (str[i].match(/[a-z]/i) !== null) {

      // check to see if a + symbol is to the left and right
      // if not, then we know this string is not valid
      if (str[i-1] !== '+' || str[i+1] !== '+') { 
        return false;
      }

    }
 
  }

  return true;
         
}
   
// keep this function call here 
SimpleSymbols(readline());
