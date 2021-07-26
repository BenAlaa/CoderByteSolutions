function Palindrome(str) { 

  return str.replace(/[\s]/g, "").toLowerCase() == str.replace(/[\s]/g, "").toLowerCase().split("").reverse().join("");
          
 }
    
 // keep this function call here 
 Palindrome(readline());