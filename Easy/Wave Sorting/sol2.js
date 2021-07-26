function WaveSorting(arr) { 
  var length = arr.length;
  var obj = {};
  while(arr.length){
      var n = arr.pop();
      if(!obj[n]){
          obj[n] = 1;
      } else {
          obj[n]++;
      }
  }
  var counts = [];
  for(var key in obj){
      counts.push(obj[key]);
  }
  var max = Math.max(...counts);
  
  return max > length/2 ? "false" : "true";
}
 
// keep this function call here 
WaveSorting(readline());