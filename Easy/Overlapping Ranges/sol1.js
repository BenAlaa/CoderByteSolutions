function OverlappingRanges(arr) {
  var target = arr.pop();
  var MaxLowerBound = Math.max(arr[0], arr[2]);
  var MinUpperBound = Math.min(arr[1], arr[3]);

  var range = MinUpperBound - MaxLowerBound + 1;

  return (range >= target) ? 'true' : 'false';
}
   
// keep this function call here 
OverlappingRanges(readline());