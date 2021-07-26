function LetterCapitalize(str) {
  return str.replace(/bw/g, ch => ch.toUpperCase());
}
   
// keep this function call here 
LetterCapitalize(readline());