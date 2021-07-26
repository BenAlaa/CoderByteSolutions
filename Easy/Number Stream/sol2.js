function NumberStream(str) { 
  for (var i = 0; i <str.length; i++) {
    var count = 0;
    var current = parseInt(str[i]);
    for (var j = i; j < str.length; j++) {
      if(parseInt(str[j]) === current) {
        count++;
        if(count === current) {
          return true;
        } 
      } else {
          break;
      }
    }
  }
  return false;  
}
   
// keep this function call here 
NumberStream(readline());