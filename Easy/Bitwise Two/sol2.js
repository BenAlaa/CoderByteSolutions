function BitwiseTwo(strArr) { 

  var one = strArr[0].split('');
  var two = strArr[1].split('');
  
  var len = strArr[0].length;
  
  var result = '';
  
  for(var i=0; i<len; i++){
      if(one[i] === '1' && two[i] === '1'){
          result += 1;
      }else{
          result += 0;
      }
  }
  
  return result;
}
 
// keep this function call here 
BitwiseTwo(readline());