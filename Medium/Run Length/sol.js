function RunLength(str) { 

  var i = 0;

  // final compressed string
  var rle = "";
  
  // loop through entire string building 
  // the new compressed version
  while (i < str.length) {
    
    // get this current character
    var c = str[i];
    
    // the index of the next character
    var j = i + 1;
    
    // compressed version of the current character
    // and its count which starts at 1
    var compressed = [1, c];
    
    // if the next character is the same, add 1 to the count
    // e.g. eeed => [1, e] becomes [2, e] becomes [3, e] then stops
    while (j < str.length) { 
      if (str[j] === c) { compressed[0] += 1; } 
      else { break; }
      j++;
    }
    
    // add this compressed part of the string to the final
    // compressed version of the string
    rle += compressed.join('');

    // start the loop at the next character now
    i = j;
         
  }
  
  return rle;
         
}

// keep this function call here 
RunLength(readline());






















function RunLength(str) {
  var runLength = 1;
  var returnString = '';
  
  for (var i = 0; i < str.length; i++) {
      if (str[i] !== str[i+1]) {
          returnString += runLength + str[i];
          runLength = 1
      } else {
          runLength++
      }
  }
  return returnString;
}
 
// keep this function call here 
RunLength(readline());






















function RunLength(str) { 
  var res = str.match(/([a-zA-Z])1{0,}/gi).map(function(a){
    return a.length + a[0]}).join('');
  
      
  // code goes here  
  return res; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
RunLength(readline());