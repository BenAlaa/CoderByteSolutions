function ThreeNumbers(str) { 
  var words = str.split(' ');
  return words.every(uniqueThree);
}

function uniqueThree(str) {
  var nums = str.match(/[0-9]+/g);
  if (nums === null || nums.length === 1 || nums.length > 3)
      {return false;}
  else {nums = nums.join('');}
  
  if (nums.length !== 3) {return false; }
  else {
      return nums[1] !== nums[2] && nums[2] !== nums[3] && nums[1] !== nums[3];
  }
}
 
// keep this function call here 
ThreeNumbers(readline());