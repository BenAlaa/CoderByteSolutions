function SumMultiplier(arr) { 
  var sumArrayDouble = arr.reduce((a,b)=> a+b) * 2; 
  var sorted = arr.sort((a,b)=> b - a); 
  
  return sorted[0] * sorted[1] > sumArrayDouble
}
 
// keep this function call here 
SumMultiplier(readline());