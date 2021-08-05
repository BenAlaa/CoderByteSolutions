function ThreeFiveMultiples(num) {
  var sum = 0;
  for (var i = 0; i < num; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
          sum += i;
      }
  }
  return sum;
}
 
// keep this function call here 
ThreeFiveMultiples(readline());





















function ThreeFiveMultiples(num) { 
  var arr = Array.apply(0,Array(num)).map(
    function(x, y){return y;}).filter(function(x){
    return x%3===0||x%5===0;}).reduce(function(x, y){
    return x+y;});
    // code goes here  
    return arr; 
           
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  ThreeFiveMultiples(readline());






























  function ThreeFiveMultiples(num) { 

    let loopMax = Math.max(Math.floor(num/3), Math.floor(num/5));
    let multiples = [];
    let sum = 0;
    
    for (let i=1; i<=loopMax; i++) {
        if (i*3 < num && !multiples.includes(i*3)) {
            multiples.push(i*3);
            sum += i*3;
        }
        
        if (i*5 < num && !multiples.includes(i*5)) {
            multiples.push(i*5);
            sum += i*5;
        }
        
    }
    
    return sum; 
           
  }
     
  // keep this function call here 
  ThreeFiveMultiples(readline());