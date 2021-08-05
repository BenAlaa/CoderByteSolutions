function Primes(num) {
  if (num == 2 || num == 3) {
    return true;
  } else if (num < 2) {
    return false;
  } else if (num % 2 == 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt (num); i += 2)  {
    if (num % i == 0) {
      return false
    }
  }
  return true; 

}
   
// keep this function call here 
console.log(Primes(readline()));
































function Primes(num) { 
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}
   
// keep this function call here 
console.log(Primes(readline()));





























function Primes(num) { 
  for ( let i = 2; i < num; i++ )
    if ( num % i === 0 ) return false
  return num > 1
}
   
// keep this function call here 
console.log(Primes(readline()))

