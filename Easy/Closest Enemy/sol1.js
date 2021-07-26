function ClosestEnemy(arr) { 
  var indexOf1 = arr.indexOf(1);
  var arrRight = arr.slice(indexOf1);
  var arrLeft = arr.slice(0, indexOf1 + 1);
  arrLeft.reverse();
  var firstTwoRight = arrRight.indexOf(2);
  var firstTwoLeft = arrLeft.indexOf(2);
  if (firstTwoRight === -1 && firstTwoLeft === -1) {
      return 0
  } 
  if (firstTwoRight === -1) {
      return firstTwoLeft;
  }
  if (firstTwoLeft === -1) {
    return firstTwoRight;
  }
  if (firstTwoRight < firstTwoLeft) {
      return firstTwoRight;
  } else {
      return firstTwoLeft;
  }

}
   
// keep this function call here 
ClosestEnemy(readline());