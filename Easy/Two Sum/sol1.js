function TwoSum(arr) { 
  let target = arr.shift();
  let output = [];
  for(let i = 0 ; i <= arr.length;i++) {
     let first = arr[i];
     let newArr =  arr.slice();
      newArr.splice(i,1);
     if(newArr.indexOf(target - first) !== -1){
         output.push(`${first},${target - first}`);
         arr[i] = "*";
     }
  }
  if(output.length < 1) {
      return -1;
  }
  return output.join(' ');       
} 
   
// keep this function call here 
TwoSum(readline());