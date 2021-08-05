function MaxSubarray(arr) { 
  var max = 0;
  for( var i = 0 ; i < arr.length ; i++ ){
      for( var j = i + 1 ; j <= arr.length ; j++ ){
          var temp = arr.slice(i,j);
          if( theTotal(temp ) > max ){
              max = theTotal(temp);
          }
          
      }
  }
  return max;
}

function theTotal(arr){
  return arr.reduce(function(acc, each ){
      return acc + each ;
  },0);
}
 
// keep this function call here 
MaxSubarray(readline());















function sumArr(arr){
  return arr.reduce((a,b) => a + b)
}

function MaxSubarray(arr) {
  
  let maxSum = arr[0]; 
  
  for (var i=0; i<=arr.length; i++){
    for (var j=0; j<=arr.length; j++){
      console.log(arr.slice(i,j));
      let sub = arr.slice(i,j);
        if (sub.length !==0) {
          let sum = sumArr(sub)
          if ( sum > maxSum ) {
          maxSum = sum;
        }
      }
      
    }
  }
  return maxSum
}

   
// keep this function call here 
MaxSubarray(readline());




























function MaxSubarray(arr) { 
  var max = arr[0];
  for (let i=0; i < arr.length; i++) {
      for (let j=i+1; j < arr.length+1; j++) {
          let currentTot = arr.slice(i, j).reduce((tot, curr) => tot+=curr);
          if (currentTot > max) max = currentTot;
      }
  }
  return max;
}
MaxSubarray(readline());


























function MaxSubarray(arr) { 
  let combinations = permute(arr);
  let sums = combinations.map((item) =>{
    return item.reduce((a,b) => {
      a += b;
      return a;
    })
  });
  let max = Math.max(...sums)
  return max;
}

function permute(array){
  results = []
  function subarray(arr,m = []){
    if(arr.length === 0){
     results = [...m]
    } else {
      for(let i = 0; i < arr.length; i++){
        // debugger;
          let copy = arr.slice(i,arr.length)
          let curr = Array.from(copy);
          m.push(curr)
          copy.pop()
          subarray(copy,m);
        }
      }
    }
  subarray(array)
  return results
} 
   
// keep this function call here 
MaxSubarray(readline());




























function MaxSubarray(arr) {
  var maxSum = 0;
  var sum;
 
  arr.forEach(function(num1, i) {
    arr.forEach(function(num2, j) {
      if (j > i) {
        sum = sumRange(arr, i, j);
        if (sum > maxSum) {
          maxSum = sum;
        }
      }
    });
  });
  
  return Math.max(maxSum, Math.max(...arr));
}

function sumRange(arr, start, end) {
  var subArray = arr.slice(start, end + 1);
  return subArray.reduce(sum, 0);
}

function sum(a, b) {
  return a + b;
}
   
// keep this function call here 
MaxSubarray(readline());