function OverlappingRanges(arr) {
  let a, b, c, d, x;
  [a, b, c, d, x] = arr;
  
  let lowerBound = Math.max(a, c);
  let upperBound = Math.min(b, d);

  return (upperBound - lowerBound + 1) >= x;
}
   
// keep this function call here 
OverlappingRanges(readline());