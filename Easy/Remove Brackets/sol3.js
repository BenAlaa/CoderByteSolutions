function RemoveBrackets(str) { 

  let open =0;
  let illegal = 0;
  
  str.split('').map((val)=>{
      if(val ==='(')open++;
      else open --;
      
      if(open<0){
          open = 0;
          illegal++;
      }
  });
  
  return open + illegal;
}
 
// keep this function call here 
RemoveBrackets(readline());