function isPrime(n){
  if(n===2){return true;} 
  var max = Math.ceil(Math.sqrt(n));
  for(var i=2;i<=max;i++){
    if(n%i===0){
      return false;
    } 
  } 
  return true;
} 
function PrimeMover(num) { 
var i=1;
  do{
    i++;
    if(isPrime(i)){
      num--;
    }
  }while(num>0);
  
  return i; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeMover(readline());




























function PrimeMover(num) { 
  var primes=[];
  var i=1;
  while (primes.length<=num) {
      var prime=true;
      for (j=2; j<i; j++) {
          if (Math.floor(i/j)===i/j) prime=false;
      }
      if (prime) primes.push(i);
      i++;
  }
  return primes.pop(); 
         
}
   
// keep this function call here 
PrimeMover(readline());

























