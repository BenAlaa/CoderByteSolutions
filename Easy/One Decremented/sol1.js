function OneDecremented(num) {
  var strNums = String(num).split('');
  var count = 0;
  for(var i = 0; i < strNums.length-1; i++){
      if(Number(strNums[i]) - Number(strNums[i+1]) === 1){
          count++;
      }
  }

  return count;

}
 
// keep this function call here 
OneDecremented(readline());