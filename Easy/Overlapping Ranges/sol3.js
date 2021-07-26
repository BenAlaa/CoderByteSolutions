function OverlappingRanges(arr) { 

  let set1 = [arr[0], arr[1]];
  let set2 = [arr[2], arr[3]];
  let overlap = arr[4];
  let numShared = 0;
  
  for (let i=set1[0]; i<=set1[1]; i++) {
      if (i >= set2[0] && i <= set2[1]) {
          numShared ++;
      }
  }
  
  if (numShared >= overlap) {
      return true;
  }
  return false; 
         
}
   
// keep this function call here 
OverlappingRanges(readline());