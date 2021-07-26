function SecondGreatLow(arr) { 
  var unique = arr.filter(function(elem, index, self) {
    return self.indexOf(elem) === index;
  });

  var sorted = unique.sort(function(a, b) {
    return a - b;
  });

  if (sorted.length < 2) { 
    return sorted[0] + " " + sorted[0]; 
  } else {
    return sorted[1] + " " + sorted[sorted.length - 2];
  }
         
}
   
// keep this function call here 
SecondGreatLow(readline());