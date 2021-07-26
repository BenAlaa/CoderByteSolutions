function FirstReverse(str) { 
  var temp = '';
  for (var i = 0; i<str.length; i++) {
      temp = str[i] + temp;
  }
  // code goes here  
  return temp; 
         
}
   
// keep this function call here 
FirstReverse(readline());