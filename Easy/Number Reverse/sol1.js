function NumberReverse(str) { 

  let re = /(\d.*?\b)/g;
  
  return str.match(re).reverse().join(' ');

}
   
// keep this function call here 
console.log(NumberReverse(readline()));