function ThreeSum(arr) { 
  for(var i = 0; i < arr.length; i++){
      for(var j = i + 1; j < arr.length; j++){
          for(var k = j + 1; k < arr.length; k++){
              if (arr[i] + arr[j] + arr[k] === arr[0]){
                  return true //arr[i] + ', ' + arr[j] + ', ' + arr[k]
              }
          }
      }
  }
  return false;
}
   
// keep this function call here 
ThreeSum(readline());