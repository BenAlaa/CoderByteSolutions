function SwapII(str) { 
  for(var i=0; i<str.length; i++){
      if(str.charAt(i).toLowerCase()===str.charAt(i)){
          str= str.slice(0,i)+ str.charAt(i).toUpperCase()+ str.slice(i+1);            
      }
      else{
          str= str.slice(0,i)+ str.charAt(i).toLowerCase()+ str.slice(i+1);
      }
  }
  var re= /(\d)([a-z]+)(\d)/gi;
  
// code goes here  
return str.replace(re, "$3$2$1"); 
       
}
 
// keep this function call here 
SwapII(readline());

















function SwapII(str) { 
  var chars = str.split('')
      
  var caseChanged = chars.map( function(element) {
    if ((/[a-z]/).test(element)) {
      return element.toUpperCase();
    } else if ((/[A-Z]/).test(element)) {
      return element.toLowerCase()
    } else {
      return element
    }
  })
  
  var numIndices = [];
  for (var j = 0; j < chars.length; j++) {
    if (chars[j] % 1 === 0) {
      numIndices.push(j)
    }
  } 
  for (var k = 0; k < numIndices.length-1; k++) {
    var firstIndex= numIndices[k];
    var secondIndex = numIndices[k+1]
    var temp = caseChanged[firstIndex]
    
    var swapCheck = chars.slice(firstIndex, secondIndex+1)
    if (!swapCheck.includes(' ')) {
      caseChanged[firstIndex] = caseChanged[secondIndex]
      caseChanged[secondIndex] = temp
    }
  }   
  
  return caseChanged.join('')     
}
 
// keep this function call here 
SwapII(readline());




















function SwapII(str) { 

  // code goes here  
  return str.replace(/[a-zA-Z]/g, function(c){
    if(/[a-z]/.test(c)){return c.toUpperCase();} 
    else{return c.toLowerCase();}
  }).replace(/(d+)([a-zA-Z]+)(d+)/g, '$3$2$1');
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapII(readline());