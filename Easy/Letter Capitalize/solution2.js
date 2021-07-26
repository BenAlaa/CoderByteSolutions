function LetterCapitalize(str) { 
  let result = ""
  str.split(" ").forEach(word => {
      result += (word[0].toUpperCase() + word.substr(1, word.length - 1) + " ")
  })
  // code goes here  
  return result; 
         
}
   
// keep this function call here 
LetterCapitalize(readline());