function ConsonantCount(str) { 
  str = str.match(/[a-zA-Z]/ig).join("").toLowerCase();
  let vowels = "aeiou";
  let count = 0;
  for( let i = 0; i < str.length; i++){
    // if(vowels.includes(str[i]) || str[i] == " ") continue;
    //else count++;
    if(!vowels.includes(str[i]) && str[i] !== " ") count++
  }


  // code goes here  
  return count; 

}
   
// keep this function call here 
console.log(ConsonantCount(readline()));