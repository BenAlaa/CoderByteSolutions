function LongestWord(sen) { 
  return sen.match(/w+/g).reduce((item, next) => item.length >= next.length ? item : next);  
}
   
// keep this function call here 
LongestWord(readline());