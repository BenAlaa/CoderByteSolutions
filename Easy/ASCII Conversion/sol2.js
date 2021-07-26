function ASCIIConversion(str) { 
  var holder = [];
  var chars = str.split('');
  for (var i = 0; i < chars.length; i++) {
      if (chars[i] === ' ') {
          holder.push(chars[i]);
      } else {
          holder.push(chars[i].charCodeAt(0)).toString();
      }
  }
  
  return holder.join('');
}
 
// keep this function call here 
ASCIIConversion(readline());
