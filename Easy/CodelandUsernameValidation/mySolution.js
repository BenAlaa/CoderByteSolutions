function CodelandUsernameValidation(str) {  
  // code goes here  
  const validPattern = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/g;
  const validLength = str.length >= 4 && str.length <=25;
  return validPattern.test(str) && validLength; 

}
   
// keep this function call here 
console.log(CodelandUsernameValidation(readline()));