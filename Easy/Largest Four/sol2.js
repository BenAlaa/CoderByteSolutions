function LargestFour(arr) {
  var sortedArr = arr.sort(ascending);
  var lastFour = sortedArr.slice(-4);
  return lastFour.reduce(sum);
}

function ascending(a, b) {
  return a - b;
}

function sum(a, b) {
  return a + b;
}
   
// keep this function call here 
LargestFour(readline());