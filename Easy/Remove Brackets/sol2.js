function RemoveBrackets(str) { 
  var count = 0; 
  for(var i=0; i<str.length; i++){
      if(str[i] === '(') count++;
      else if(str[i] === ')' && count === 0) count++;
      else count--;
  }
  return count; 
}
 
// keep this function call here 
RemoveBrackets(readline());