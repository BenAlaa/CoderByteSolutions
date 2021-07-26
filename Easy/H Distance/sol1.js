function HDistance(strArr) { 
  var count = 0;
  for (var i = 0; i < strArr[0].length; i++) {    // loop through first element of strArr (or second element doesn't matter since same length)
    if (strArr[0][i] !== strArr[1][i]) {          // if char1 of first element of strArr not equal to char2 of second element strArr
      count++;// increment count
    }
  }
  return count;
}
   
// keep this function call here 
HDistance(readline());