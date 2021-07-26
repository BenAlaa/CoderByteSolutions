function ScaleBalancing(strArr) { 

  // code goes here  
  let left = JSON.parse(strArr[0])[0];
  let right = JSON.parse(strArr[0])[1];
  let weights = JSON.parse(strArr[1]);
  
  for(let i = 0; i < weights.length; i++){
      if(left + weights[i] === right || right + weights[i] === left){
          return '' + weights[i];
      }
      for(let j = i + 1; j < weights.length; j++){
          if(left + weights[i] + weights[j] === right
          || right + weights[i] + weights[j] === left
          || left + weights[i] === right + weights[j]
          || right + weights[i] === left + weights[j]
          ){
              return '' + weights[i] + ',' + weights[j];
          }
      }
  }
  
  return 'not possible'
         
}
   
// keep this function call here 
ScaleBalancing(readline());