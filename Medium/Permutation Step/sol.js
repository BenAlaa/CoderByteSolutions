function PermutationStep(num) {
  var arr = num.toString().split("");
  var len = arr.length;
  var a; 
  var b;
  var temp;
  
  for (var i = len-1; i >= 0; i--) {
    a = arr[i];
    b = arr[i-1];
    if (a > b) {
      arr[i] = b;
      arr[i-1] = a;
      temp = arr.splice(i, len-1).sort();
      return arr.concat(temp).join("");
    }
  }
  return -1;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PermutationStep(readline());



















function PermutationStep(num) { 
  var res = [];
    var temp;
    var arr = num.toString().split('');
    for(var i=arr.length-1;i>=0;i--){
      if(arr[i]>arr[i-1]){
        temp = arr[i];
        arr[i]  = arr[i-1];
        arr[i-1] = temp;
        res = arr.slice(i, arr.length+1);
        arr = arr.slice(0,i);
        break;
      }
    }
    // code goes here  
    return res.length>0?arr.concat(res.sort(function(a,b){
      return a-b;})).join(''):-1;
           
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  PermutationStep(readline());























  function PermutationStep(num) { 

    let arr = num.toString().split('');
    let noGreaterPerm = true;
    let swapIndex = -1;
    let i = arr.length-1;
    
    while (swapIndex < 0 && i >= 0) {
        // starting from last digit and working left, compare digits
        if (arr[i] > arr[i-1]) {
            noGreaterPerm = false;
            // if the current digit is greater than the one before it, swap them
            let temp = arr[i-1];
            arr[i-1] = arr[i];
            arr[i] = temp;
            swapIndex = i;
        }
        i--;
    }
    
    //take the digits to the right of the swap, and sort them ascendingly
    let right = arr.slice(swapIndex).sort((a,b) => {return a-b});
    arr.splice(swapIndex, arr.length-swapIndex);
    
    return noGreaterPerm ? -1 : parseInt(arr.concat(right).join('')); 
           
  }
     
  // keep this function call here 
  PermutationStep(readline());