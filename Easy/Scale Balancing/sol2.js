function ScaleBalancing(strArr) { 
  
  var scales = strArr[0].match(/\d+/g).map(Number).sort(ascending);
  var lighter = scales[0];
  var heavier = scales[1];
  var weights = strArr[1].match(/\d+/g).map(Number);
  
  if (lighter === heavier){
      return ''
  }
  //see if any two wieghts add up to the difference. if so, return them
  for(var i = 0; i < weights.length - 1; i++){
      for (var j = i + 1; j < weights.length; j++){
          if (lighter + weights[i] + weights[j] === heavier){
              return weights[i] + ',' + weights[j];
          }
      }
  }
  for(i = 0; i < weights.length; i++){
      if (lighter + weights[i] === heavier) {
          return weights[i].toString();
      }
  }
  for (i = 0; i < weights.length; i++){
      lighter = scales[0] + weights[i];
      for (j = 0; j < weights.length; j++){
          if(lighter === heavier + weights[j] && i !== j){
              return [weights[i], weights[j]].sort(ascending).join(',');
          }
      }
  }
  //for each weight, add it to the lower weight, then see if any of the remaining weigths evens the scale. if so, return the pair
  // code goes here  
  return 'not possible'; 
         
}

function ascending(a, b){
    return a - b;
}  
// keep this function call here 
ScaleBalancing(readline());