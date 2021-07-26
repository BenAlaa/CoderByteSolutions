function NumberAddition(str) { 

  // code goes here  
  return str.replace(/\D/g,' ').split(' ').filter(x => x).map(x => parseInt(x)).reduce((a, b) => a + b) 
         
}
   
   
// keep this function call here 
NumberAddition(readline());