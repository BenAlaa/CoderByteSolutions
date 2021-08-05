function FibonacciChecker(num) { 
  var arr=[];
    var res;
    for(var i=0;;i++){
      arr.push(i<2 ? i:arr[i-2]+arr[i-1]);
      if(arr[i]===num){
        res='yes';
        break;
      } 
      if(arr[i]>num){
        res='no';
        break;
      } 
    } 
    // code goes here  
    return res; 
           
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  FibonacciChecker(readline());





























  function FibonacciChecker(num) { 
    var fib=[0, 1];
    while (fib[fib.length-1]<=num) {
        fib[fib.length]=fib[fib.length-1]+fib[fib.length-2];
    }
    return fib.join(",").indexOf(num)===-1?"no":"yes";
    
 }
    
 // keep this function call here 
 FibonacciChecker(readline());


























 function FibonacciChecker(num) { 

  var sequence = [1, 1]
  var current = 0
  
  if (num === 1) return 'yes'
  
  for (i = 2; current < num; i++) {
    
    var cur = sequence[i - 1] + sequence[i - 2] 
    current = cur
    sequence.push(cur)
    
    if (current === num) return 'yes'
  }  
  
  return 'no'
}
   
// keep this function call here 
FibonacciChecker(readline());