function MovingMedian(arr) { 

  let n = arr.shift();
  
  let results = [];
  
  for (let i = 0; i < arr.length; i++) {
      let begin = (i+1-n) > 0 ? (i+1-n) : 0; 
      let slice = arr.slice(begin, i+1);
      results.push(getMedian(slice));
  }
  
  return results.join(',');
       
}

function getMedian(arr) {
  arr.sort((a,b) => a-b);
  if (arr.length % 2 === 1) {
      // odd, return middle
      return (arr[Math.floor(arr.length/2)]);
  } else {
      // even, return mean of middle two elements
      return (arr[arr.length/2] + arr[arr.length/2-1])/2;
  }
}
 
// keep this function call here 
MovingMedian(readline());