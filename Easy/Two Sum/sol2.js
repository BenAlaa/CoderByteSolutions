function TwoSum(arr) {
  
  var sums = [];
  S = arr[0];
  
  // check each element in array except first which is S 
  for (var i = 1; i < arr.length; i++) { 

    // check each other element in the array
    for (var j = i + 1; j < arr.length; j++) {

      // determine if these two elements sum to S
      if (arr[i] + arr[j] === S) {
        sums.push([arr[i], arr[j]]);
      }

    }
  }

  // return all pairs of integers that sum to S
  return sums.length > 0 ? sums.join(' ') : -1;
}
   
// keep this function call here 
TwoSum(readline());