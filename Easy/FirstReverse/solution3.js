function FirstReverse(str) { 
  var tomatoes = [];
  for (i = str.length - 1; i > -1; i--){
    tomatoes.push(str[i]);
  }
  str = tomatoes.join("");
   
    return str; 
           
  }
     
  // keep this function call here 
  FirstReverse(readline());