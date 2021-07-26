function NumberStream(str) { 
  var result = 'false';
  /*result will be true if in str, there is a sequence of at least N length where N is the number value
  Do not count 1!
  */
  
  for (var i = 0; i < str.length; i++) {
      var counter = 0;
      for (var x = i; x < str.length; x++) {
          if (str[x] === str[i]) {
              counter++;
          } else {
              break;
          }
      }
      if (counter >= Number(str[i]) && str[i] !== '1') {
          result = 'true';
      }
  }
  
  return result;
}
// keep this function call here 
NumberStream(readline());