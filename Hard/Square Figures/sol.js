function SquareFigures(num) { 

  if (num === 1) {
    return 0;
  }
  else {
    return Math.ceil(Math.pow(10,(num-1)/2));
  }
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SquareFigures(readline());






















function SquareFigures(input){
  var  squares=[[]]
  
  for (var i=0;;i++)
  
  
  { if (squares[squares.length - 1].length==input)
  {break}

    squares.push(String(Math.pow(i,2)))}
    
    return Math.sqrt(Math.max.apply(null,squares))}
   
// keep this function call here 
SquareFigures(readline());



























function SquareFigures(num) {
  if (num === 1) return 0;

  var min_squared = "1";

  var i = 1;
  while (i < num) {
      min_squared += "0";
      i++;
  }

  min_squared = parseInt(min_squared, 10);
  var min_try = Math.ceil(Math.sqrt(min_squared));
  return min_try;
}
 
// keep this function call here 
SquareFigures(readline());
