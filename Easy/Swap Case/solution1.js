function SwapCase(str) { 
  var swappedCase = ''
  for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (/[a-z]/.test(char)) {
          swappedCase += char.toUpperCase();
      } else if (/[A-Z]/.test(char)) {
          swappedCase += char.toLowerCase();
      } else {
          swappedCase += char
      }
  }
    return swappedCase
  
}
   
// keep this function call here 
SwapCase(readline());