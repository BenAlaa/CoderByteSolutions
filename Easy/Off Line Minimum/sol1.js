function OffLineMinimum(strArr) { 

  // store all numbers as we loop through array
  var nums = [];
  
  // store only the minimum numbers
  var outputs = [];
  
  // loop through strArr
  for (var i = 0; i < strArr.length; i++) {
    
    // if a number is encountered store it in nums
    if (strArr[i] !== 'E') { 
      nums.push(parseInt(strArr[i]));
    }  
    
    // if an E is encountered remove the smallest number
    // from nums and store it in the outputs array
    else {
      var smallest = Math.min.apply(null, nums);
      nums.splice(nums.indexOf(smallest), 1);
      outputs.push(smallest);
    }

  }
  
  // return numbers in string form
  return outputs.join(',');
         
}
// keep this function call here 
OffLineMinimum(readline());