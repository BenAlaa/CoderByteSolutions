function SymmetricTree(arrStr){
  var subArr1,
      subArr2,
      tempArr,
      power = 0,
      number = arrStr.length + 1;
      indice = 1;
  
  arrStr.splice(0, 1);
  
  while (number !== 1){
      number /= 2;
      power += 1;
  }
  
  for (var i=0; i < power-1; i++){
      tempArr = arrStr.splice(0, Math.pow(2, indice));
      subArr1 = tempArr.slice(0, tempArr.length/2);
      subArr2 = tempArr.slice(tempArr.length/2);
      subArr2.reverse();
      for (var j=0; j < subArr1.length; j++){
          if (subArr1[j] !== subArr2[j]){
              return false;
          }
      }
      indice += 1;
  }
  return true;
}
 
// keep this function call here 
SymmetricTree(readline());







































function SymmetricTree(strArr) { 

  var layer =1;
  var num = 1;
  var test= [];
  while(num < strArr.length) {

      var clone = strArr.slice();
      clone = clone.splice(num,Math.pow(2,layer));
      var len = Math.ceil(clone.length /2);
      var leftSide = clone.splice(0, len);
      var rightSide = clone.reverse();

      for (var i=0;i<leftSide.length;i++) {
          if (leftSide[i] !== rightSide[i]) {
              return "false";
          }
      }
      num+=Math.pow(2,layer);
      layer++;
  }
  return "true";
}
 
 
// keep this function call here 
SymmetricTree(readline());






























function SymmetricTree(strArr) { 
  var length = strArr.length; 
  var levels = Math.log2(length + 1); 
  var sum = 1; 
  var count = 0;
  
   for(var i = 1; i< levels; i++){
      sum += Math.pow(2,i);   
       var index = sum - Math.pow(2,i); 
       
       for(var k = index; k< sum; k++){
           if(strArr[k] !== strArr[sum - count -1]){
               return 'false';
           }
           count++; 
       }
       count = 0; 
   }
    
    // code goes here  
    return 'true'; 
           
  }
     
     
  // keep this function call here 
  SymmetricTree(readline());

































  function SymmetricTree(strArr) { 
  
    strArr.shift();
    index = 0;
    row = [];
    rev = [];
    var i = 1;
    
    while (index < strArr.length){
        
        row = strArr.slice(index, index + Math.pow(2,i));
        rev = strArr.slice(index, index + Math.pow(2,i)).reverse();
        for (var j = 0; j < row.length; j++){
            if (row[j] !== rev[j]){
                return false;
            }
        }
        index += Math.pow(2,i);
        i++;
        
    }
    
    // code goes here  
    return true; 
           
  }
     
  // keep this function call here 
  SymmetricTree(readline());








