function LetterChanges(str) { 
    
  a = str.replace(/[a-z]/gi,replacer);
  b = a.replace(/[aeiou]/gi,replacer2)
// code goes here  
return b; 

}

function replacer (match){
  return String.fromCharCode(match.charCodeAt(0) + 1);

} 
function replacer2 (match){
  return match.toUpperCase();

}
// keep this function call here 
LetterChanges(readline());
