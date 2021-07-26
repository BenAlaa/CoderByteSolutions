function MeanMode(arr) { 
  var mean=0, mode;
  for (i=0; i<arr.length; i++) {
      mean+=arr[i];
  }
  mean/=arr.length;
  mode=arr.sort(function(a, b) {return a-b})
  mode=mode[(arr.length-1)/2] || mode[arr.length/2];
  return mean===mode?1:0;
}
   
// keep this function call here 
MeanMode(readline());