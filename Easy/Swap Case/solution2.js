function SwapCase(str) { 
  var res = '';
    for(var i=0;i<str.length;i++){
      if(str[i]===str[i].toUpperCase()) {
        res+=str[i].toLowerCase();
      } 
      else if(str[i] ===str[i].toLowerCase()) {
        res+=str[i].toUpperCase();
      } 
      else{
        res+=str[i];
      } 
    } 
    // code goes here  
    return res; 
           
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  SwapCase(readline());