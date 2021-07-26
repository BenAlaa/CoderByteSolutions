function LetterCapitalize(str) { 
  var words=str.split(' ');
  for(var i=0;i<words.length;i++){
    words[i]=words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  // code goes here  
  return words.join(' '); 
         
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());