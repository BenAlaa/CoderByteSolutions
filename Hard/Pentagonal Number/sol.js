function PentagonalNumber(num) { 
  var previousDots = 1;
  
  if (num === 0) {
      return 0;
  }
  
  for (i=1; i<num; i++) {
      previousDots = i * 5 + previousDots;
  }
  
  num = previousDots;
    // code goes here  
    return num; 
           
  }
     
  // keep this function call here 
  PentagonalNumber(readline());













































  function PentagonalNumber(num) { 

    // code goes here  
    var out = 1;
    
    do{
        out+=((num-1)*5)
       
        num--;
    }while(num>1)
    
    return out; 
           
  }
     
  // keep this function call here 
  PentagonalNumber(readline());





































  function PentagonalNumber(num) { 
    if (num === 1) {
        return 1;
    } else if (num === 0) {
        return 0;
    }
    let perim = (num - 1) * 5
    return perim + PentagonalNumber(num - 1);
  }
     
  // keep this function call here 
  PentagonalNumber(readline());







































  function PentagonalNumber(num) {
    return num === 1 ? 1 : PentagonalNumber(num - 1) + (5 * (num - 1));
  }
     
  // keep this function call here 
  PentagonalNumber(readline());