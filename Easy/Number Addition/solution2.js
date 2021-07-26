function NumberAddition(str) { 

  // use the JavaScript match function which
  // tries to find all matching patterns in the string
  // and it returns an array of all matches found
  // e.g. "75Number9" returns [75, 9] 
  // or set to 0 if no numbers are found
  var nums = str.match(/[0-9]+/gi) || [0];
  
  // use the JavaScript reduce functions which calls a
  // function on each value in the array and returns
  // a final single value
  return nums.reduce(function(previousVal, currentVal) {
    return parseInt(previousVal) + parseInt(currentVal);
  });
         
}
   
// keep this function call here 
NumberAddition(readline());