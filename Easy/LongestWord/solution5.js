function LongestWord(sen) { 

  // get individual words
  var words = sen.match(/\w+/g);
  
  // set initial longest word
  var longest = words[0];

  // compare words to longest
   for (var i=0; i<words.length; i++) {
       if (words[i].length > longest.length) {
           longest = words[i];
       }
   }  
   
  return longest; 
       
}
 
// keep this function call here 
LongestWord(readline());