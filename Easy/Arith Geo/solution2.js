function ArithGeo(arr) {
  function isArith(arr) {
    var x = arr.length;
    for (var i = 1; i < x-1; i++) {
      if (arr[i]-arr[i-1] !== arr[i+1]-arr[i]) {
        return false;
      }
    }
    return true;
  }
  function isGeo(arr) {
    var x = arr.length;
    for (var i = 1; i < x-1; i++) {
      if (arr[i+1]/arr[i] !== arr[i]/arr[i-1]) {
        return false;
      }
    }
    return true;
  }
  if (isArith(arr)) {
    return "Arithmetic";
  } else if (isGeo(arr)) {
    return "Geometric";
  } else {
    return -1;
  }
 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArithGeo(readline());