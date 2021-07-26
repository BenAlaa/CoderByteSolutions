function SerialNumber(str) { 
  var arr = str.split(".").map(x => x.split(""))
  for(var i = 0; i < arr.length; i++){
      arr.splice(i, 1, arr[i].map(x => Number(x)))
      if(arr[i].length !== 3){
          return false
      }
      if(arr[i][2] <= arr[i][0] || arr[i][2] <= arr[i][1]){
          return false
      }
  }
  if(arr[0].reduce((a, b) => (a + b)) % 2 !== 0){
      return false
  }
  if(arr[1].reduce((a, b) => (a + b)) % 2 !== 1){
      return false
  }
  return true
}
 
// keep this function call here 
SerialNumber(readline());