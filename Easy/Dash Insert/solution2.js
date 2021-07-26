function DashInsert(str) {

  // code goes here  
  var digits = str.split('');
  
  function isOdd(n) {
    return parseInt(n) % 2 === 1;
  }
  
  for (var i = 0; i < digits.length - 1; i++) {
    if ( isOdd(digits[i]) && isOdd(digits[i+1]) ) {
      digits.splice(i + 1, 0, '-');
      i++;
    }
  }
  return digits.join(''); 
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsert(readline());