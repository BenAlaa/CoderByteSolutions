function SimpleSymbols(str) { 
  alphaLower = []
  for (i = 0; i < 26; i ++) {
  	alphaLower.push(String.fromCharCode(97+i))
  }
  alphaUpper = []  
    for (i = 0; i < 26; i ++) {
  	alphaUpper.push(String.fromCharCode(65+i))
  }
  alpha = alphaLower.concat(alphaUpper)
  
  for (i = 1; i < str.length - 1; i ++) {
    if ((alpha.includes(str[i]) && str[i-1] !== "+") ||(alpha.includes(str[i]) && str[i+1] !== "+")) {
      return false 	
    }	
  }
   return true
} 
  // keep this function call here 
SimpleSymbols(readline());