function NonrepeatingCharacter(str) { 
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === 1) {
      return str[i];
    }
  }
  // code goes here  
  return str; 
         
}
   
// keep this function call here 
NonrepeatingCharacter(readline());