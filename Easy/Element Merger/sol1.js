function ElementMerger(arr) { 
  return arr.length === 1 ? arr[0] : ElementMerger(arr.map((e,i) => Math.abs(e - arr[i+1])).slice(0,-1));
}
 
// keep this function call here 
ElementMerger(readline());