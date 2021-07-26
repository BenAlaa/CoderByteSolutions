function ClosestEnemyII(strArr) { 
    
  // get 1 cord
  let oneCord = getCord(strArr, 1);
  // get all 2 cords
  let twoCord = getCord(strArr, 2);
  // get all smallest distances with wrapping
  let smallestDistances = getSmallestDistances(oneCord, twoCord, strArr.length);
  // resutn smallest
  return smallestDistances.length ? smallestDistances.sort(function (a,b) {return a < b;}).pop() : 0;
       
}
function getSmallestDistances (oneCord, twoCord, length) {
  var results = [];
  for (let i = 0; i < twoCord.length; i++) { 
      
      var smallestColDist = Math.min( Math.abs( +oneCord[0][0] - +twoCord[i][0] ), Math.abs( +oneCord[0][0] - (+twoCord[i][0] - length) ) );
      var smallestRowDist = Math.min( Math.abs( +oneCord[0][1] - +twoCord[i][1] ), Math.abs( +oneCord[0][1] - (+twoCord[i][1] - length) ) );
      results.push(smallestColDist + smallestRowDist);
  }
  return results;
  
}
function getCord (strArr, num) {
  var result = [];
  for (let col = 0; col < strArr.length; col++) {
      for (let row = 0; row < strArr.length; row++) {
          if (+strArr[col][row] === num) {
              result.push([+col, +row]);
          }
      }
  }
  return result;
}
// keep this function call here 
ClosestEnemyII(readline());