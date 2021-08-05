function PalindromeTwo(str) { 
  str=str.replace(/[^a-z]/ig, "").toLowerCase();
  return str.split("").reverse().join("")===str;
}
 
// keep this function call here 
PalindromeTwo(readline());















function PalindromeTwo(str) { 

  str = str.replace(/\W/g, '').toLowerCase();  
  let reverse = str.split('').reverse().join('');
  
  if (str === reverse) {
      return true;
  }
  return false; 
         
}
   
// keep this function call here 
PalindromeTwo(readline());
















function PalindromeTwo(str) { 

  str = str.replace(/\W/g, '').toLowerCase()
  var reversed = Array.from(str).reverse().join('')
  
  return (str === reversed) ? true : false
}
   
// keep this function call here 
PalindromeTwo(readline());