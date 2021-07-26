function OneDecremented(num) { 
  var numStr = num.toString().split('');
  var counter = 0;
  
  for (var i = 1; i < numStr.length; i++) {
      if (numStr[i-1] - numStr[i] === 1) {
          counter ++;
      }
  }
  return counter;
}
 
// keep this function call here 
OneDecremented(readline());