function ArithGeo(arr) { 

  // code goes here  
  var isArith = function(arr) {
    if (arr.length < 2) return -1;
    var difference = arr[1] - arr[0];
    for (var i = 1; i < arr.length - 1; i++) {
      if (arr[i + 1] - arr[i] !== difference) return false;
    }
    return true;
  };
      
  var isGeo = function(arr) {
    if (arr.length < 2) return -1;
    var multiplier = arr[1] / arr[0];
    for (var i = 1; i < arr.length - 1; i++) {
      if (arr[i + 1] / arr[i] !== multiplier) return false;
    }
    return true;
  };
  
  if (isArith(arr)) return "Arithmetic";
  else if (isGeo(arr)) return "Geometric"; 
  else return -1;  
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArithGeo(readline());