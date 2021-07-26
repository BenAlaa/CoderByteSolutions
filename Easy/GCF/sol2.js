function GCF(arr) { 

  var bigNum = arr[0] > arr[1] ? arr[0] : arr[1];
  var smallNum = arr[0] < arr[1] ? arr[0] : arr[1];
  var num = bigNum/smallNum;
  var result = 0;
  for(var i=1; i<=smallNum; i++){
      if(bigNum%i === 0 && smallNum%i === 0){
          result = i;
      }
  }
  return result;
}
   
// keep this function call here 
GCF(readline());