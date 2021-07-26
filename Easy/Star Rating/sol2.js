function StarRating(str) { 

  let stars = Math.round(str * 2)/2;
       
  let pair = stars.toString().split(".")
  
  let output = [];
  
  for (let i = 0; i < pair[0]; i++) {
      output.push('full');
  }
  
  if (pair[1] == '5') {
      output.push('half');
  }
  
  
  while (output.length != 5) {
      output.push('empty');
  }
  
  return output.join(' ');
}
 
// keep this function call here 
StarRating(readline());