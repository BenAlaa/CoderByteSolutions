function SecondGreatLow(arr) { 
  var num = [];
    var res = [];
    var str='';
    arr.forEach(function(el) {
      if(num.indexOf(el) ==-1){
        num.push(el);
      }
    });
    res = num.sort(function(a, b) {
      return a-b;
    });
    str = res[1] + ' ' + res[res.length-2];
    // code goes here  
    return str; 
           
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  SecondGreatLow(readline());