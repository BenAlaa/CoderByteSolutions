function ApproachingFibonacci(arr) { 

  // Seed
  let fibs = [1, 1];
  
  // Sum of array values
  let sum = arr.reduce((sum, val) => sum + val, 0);
  
  // Generate enough Fibonacci numbers
  while (fibs[fibs.length - 1] < sum) {
      generateNextFib(fibs);
  }
  
  return fibs[fibs.length - 1] - sum;
  
  
  function generateNextFib(fibs) {
      fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  }
}
 
// keep this function call here 
ApproachingFibonacci(readline());





































function ApproachingFibonacci(arr) {
  var arrSum = arr.reduce(function(val1, val2) {
      return val1 + val2;
  });
  var floor = 1;
  while (fibonacci(floor) < arrSum) {
      floor++;;
  };
  return fibonacci(floor) - arrSum;

}

function fibonacci (num) {
  if (num === 1) {
      return 0;
  } else if (num === 2) {
      return 1;
  } else { return fibonacci(num - 2) + fibonacci(num - 1)}
}
 
// keep this function call here 
ApproachingFibonacci(readline());







































var fib = [0, 1];
var getFib = min=> {
    while (fib[fib.length - 1] < min)
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fib[fib.findIndex(f=> f >= min)];
}
function ApproachingFibonacci(arr) {
    var sum = arr.reduce((c, a) => c + a, 0);
    return getFib(sum) - sum;

}

   
// keep this function call here 
ApproachingFibonacci(readline());