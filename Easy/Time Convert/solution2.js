function TimeConvert(num) { 
  var hours = Math.floor(num/60);
    var mins = num % 60;
    // code goes here  
    return String(hours + ":" + mins); 
           
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  TimeConvert(readline());