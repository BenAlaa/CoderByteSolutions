function ArithGeoII(arr) { 
  var elem1 = arr[0];
  var elem2 = arr[1];
  var arithmetic = elem2 - elem1;
  var geometric = elem2 / elem1;
 
  var isArithmetic = true;
  var isGeometric = true;
  
  for (var i = 0; i < arr.length-1; i++) {
      var first = arr[i];
      var second = arr[i+1];
      
      if (second / first !== geometric) {
          isGeometric = false;
      }
    
      if ((second - first) !== arithmetic) {
          isArithmetic = false;
      } 
      
  }
  
  if (isArithmetic) {
      return 'Arithmetic'
  } else if (isGeometric) {
      return 'Geometric'
  } else {
      return -1
  }
}
 
// keep this function call here 
ArithGeoII(readline());























function ArithGeoII(arr) { 
  var ar = true;
    var geo = true;
    var aDiff = arr[1]-arr[0];
    var gDiff = arr[1]/arr[0];
    for(var i=1;i<arr.length-1;i++){
      if(arr[i+1]-arr[i]!=aDiff){
        ar = false;
        break;
      }
    } 
    if(ar!=true){
      for(var i=0;i<arr.length-1;i++){
        if(arr[i+1]/arr[i]!=gDiff){
          geo = false;
        } 
      } 
    } 
    // code goes here  
    return ar == true ? 'Arithmetic': geo == true ? 'Geometric':-1; 
           
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  ArithGeoII(readline());

  






















  function ArithGeoII(arr) {
    var pattern=false;
    var prevpattern=false;
    var Arithmetic=true;
    var Geometric=true;
    for (i=1; i<arr.length; i++) {
        if (!pattern) true;
        else prevpattern=pattern
        pattern=arr[i]-arr[i-1];
        if (!prevpattern) true;
        else if (Arithmetic){
            if (prevpattern===pattern) {
            Arithmetic=true;
        } else {
            Arithmetic=false;
        }}
    }
    pattern=false;
    prevpattern=false;
    Geometric=true;
    for (i=1; i<arr.length; i++) {
        if (!pattern) true;
        else prevpattern=pattern
        pattern=arr[i]/arr[i-1];
        if (!prevpattern) true;
        else if (Geometric){
            if (prevpattern===pattern) {
            Geometric=true;
        } else {
            Geometric=false;
        }}
    }
    return Arithmetic?"Arithmetic":Geometric?"Geometric":-1; 
  }
  ArithGeoII(readline());
  