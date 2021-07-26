function Palindrome(str) { 

  // code goes here  
   var str = str.split(" ").join("").toLowerCase();

  // we wrote this reverse code in a previous solution
  var rev = str.split('').reverse().join('');

  // now it's very easy to check if a string is a palindrome
  return str === rev;
         
         
}
   
// keep this function call here 
Palindrome(readline());