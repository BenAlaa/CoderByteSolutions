function Superincreasing(arr) { 
  var count = 0;
  if (arr.length < 3) {
  	return arr[1] > arr[0];
  }
  for (var i = 0; i < arr.length-2; i++) {
    if (arr[i] + arr[i+1] < arr[i+2]) {
      count++;
    }
  }
  return (count === arr.length-2);
  // code goes here
}
// keep this function call here 
Superincreasing(readline());