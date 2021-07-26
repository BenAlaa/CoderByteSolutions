
1
function WordCount(str) { 
  var spaces = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      spaces ++;
    }
  }
  return spaces + 1;

  // code goes here  
  return str; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
WordCount(readline());