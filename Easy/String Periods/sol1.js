function StringPeriods(str) { 

  var current = str[0];
  var substrings = [];
  
  if (str.length === 1) {
      return -1;
  }
  
  for (var i = 1; i < str.length; i++) {
      current += str[i];
      var reg = new RegExp(current, "g");
      var matches = str.match(reg).join('');
      
      if (matches === str) {
          substrings.push(current);
      }
  }
  
  if (substrings.length === 1) {
      return -1;
  } else {
      return substrings[substrings.length - 2];
  }
         
}
   
// keep this function call here 
StringPeriods(readline());