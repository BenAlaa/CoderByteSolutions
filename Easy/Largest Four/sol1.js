function LargestFour(arr) { 
  let sorted =  arr.sort((a,b) => a - b).reverse().splice(0,4).reduce((c,d) => c+=d);
  return sorted;
}
   
// keep this function call here 
LargestFour(readline());