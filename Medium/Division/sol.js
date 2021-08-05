function Division(num1,num2) { 

  let factors = [];
  if (num1 === 1 || num2 === 1) {
      return 1;
  }
  
  if (num1 === num2) {
      return Math.min(num1, num2);
  }
  
  for (let i=1; i<=Math.min(num1, num2); i++) {
      if (num1 % i === 0 && num2 % i === 0) {
          factors.push(i);
      }
  }
  
  return Math.max(...factors); 
 
}
   
// keep this function call here 
Division(readline());


















function Division(num1,num2) { 

  var highest = 0, limit = num1 * num2
  
    if (num1 === 1 && num2 === 1) {return 1}
  
    for (i = 0; i < limit; i++) {
      if (num1 % i === 0 && num2 % i === 0)
        highest = i
    }
    return highest
  }
     
  // keep this function call here 
  Division(readline());





















  function Division(num1,num2) { 

    var f1 = [], f2 = [], largest = []
  
    for (var i = 1; i < Math.min(num1,num2)+1; i++) {
      num1 % i === 0 ? f1.push(i) : null
      num2 % i === 0 ? f2.push(i) : null
    } 
    
    for (var j = 0; j < f1.length; j++) {
      for (var k = 0; k < f2.length; k++) {
        f1[j] === f2[k] ? largest.unshift(f1[j]) : null
      }
    }
    
    return largest[0] 
           
  }
     
  // keep this function call here 
  Division(readline());