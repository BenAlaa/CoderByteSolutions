function PrimeTime(num) { 

  for (let i = 2; i<num; i++) {
      if (num % i === 0) {
          return false;
      }
  }  
  return true; 
         
}
   
// keep this function call here 
PrimeTime(readline());















