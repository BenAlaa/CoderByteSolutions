function Superincreasing(arr) { 

  var sum = 0;
  
  for (var i = 0; i < arr.length; i++) {

    if (arr[i] <= sum) { return "false"; }
    sum += arr[i];

  }
  
  return true;
         
}



   
// keep this function call here 
Superincreasing(readline());