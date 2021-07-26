function ElementMerger(arr) { 
  if (arr.length === 1) {
      return arr[0];
  }
  var reduced = [];
  for (var i = 0; i < arr.length - 1; i++){
      reduced.push(Math.abs(arr[i] - arr[i + 1]));
  }
  return ElementMerger(reduced)
  
}
   
// keep this function call here 
ElementMerger(readline());