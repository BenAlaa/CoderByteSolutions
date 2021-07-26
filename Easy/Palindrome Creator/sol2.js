function PalindromeCreator(str) {  

  function isPalin(str) {
     return str === str.split("").reverse("").join("")  
  }
  if (isPalin(str)) {return "palindrome"}
   
  let current, compareStr="", newCurrent, newCompare="";
  
  for (let i=0; i<str.length; i++){
      current = str[i];
      compareStr = str.slice(0,i) + str.slice(i+1);
          if (isPalin(compareStr) && compareStr.length>=3) {  
              return current;
          }   
  }
  for (let i=0; i<str.length; i++){
      current = str[i];
      compareStr = str.substring(0,i) + str.substring(i+1);
          for (let j=0; j<compareStr.length; j++){
              newCurrent = compareStr[j];
              newCompare = compareStr.slice(0,j) + compareStr.slice(j+1);
                  if (isPalin(newCompare) && newCompare.length>=3) {
                      return current + newCurrent
                  }
             }
      }
  return "not possible"
  }
  // keep this function call here 
  PalindromeCreator(readline());