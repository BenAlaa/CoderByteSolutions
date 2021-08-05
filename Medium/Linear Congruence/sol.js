function LinearCongruence(str) { 
  //https://www.geeksforgeeks.org/solve-linear-congruences-ax-b-mod-n-for-values-of-x-in-range-0-n-1/
      //A, B, N;
      let A = +str.slice(0,str.indexOf("x"));
      let B = +str.slice(str.indexOf('=') + 1 , str.indexOf('(')).trim();
      let N = +str.slice(str.indexOf('d') + 1, str.indexOf(')')).trim();
      let counter = 0;
      A = A % N;
      B = B % N;
       
      let u = 0, v = 0;
   
      // Function Call to find
      // the value of d and u
      let person = ExtendedEuclidAlgo(A, N);
      let d = person[0];
      u = person[1];
      v = person[2];
   
      // No solution exists
      if (B % d != 0)
      {
          // console.log(-1);
          return counter;
      }
   
      // Else, initialize the value of x0
      let x0 = (u * (B / d)) % N;
      if (x0 < 0)
          x0 += N;
       
      // Print all the answers
      for(let i = 0; i <= d - 1; i++)
      {
          let an = (x0 + i * (N / d)) % N;
          // console.log(an + " ");
          counter ++;
      }
      return counter;
      function ExtendedEuclidAlgo(a, b)
      {
          
          // Base Case
          if (a == 0)
          {
              return [b, 0, 1];
          }
          else
          {
              
              // Store the result of recursive call
              let x1 = 1, y1 = 1;
              let gcdy = ExtendedEuclidAlgo(b % a, a);
              let gcd = gcdy[0];
              x1 = gcdy[1];
              y1 = gcdy[2];
      
              // Update x and y using results of
              // recursive call
              let y = x1;
              let x = y1 - Math.floor(b / a) * x1;
      
              return [gcd, x, y];
          }
      }
  }
     
  // keep this function call here 
  console.log(LinearCongruence(readline()));






































  function LinearCongruence(str) { 

    // code goes here  
    const [, a, b, m] = str.match(/^(\d+)x\D+(\d+)\D+(\d+)\)$/).map(Number);
  
      const answers = [];
  
      for (let i = 0; i < m; i++) {
          if ((a * i) % m === b % m) {
              answers.push(i);
          }
      }
  
      return answers.length;
  
  }
     
  // keep this function call here 
  console.log(LinearCongruence(readline()));





























  function LinearCongruence(str) {
    //grab only the sequences of digits
    let ints = str.match(/(\d+)/g)
    //aX = b mod c
    let a = Number(ints[0]), b = Number(ints[1]), c =Number(ints[2]);
    // gcd a & c
    let gcd = getGCD(a,c)
    // if b%gcd === 0 return gcd or return 0
    return (b % gcd === 0) ? gcd : 0;
  }
     
  function getGCD(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) console.log('num is string', `num1:${num2}`, `num1:${num2}`)
    while(num2) {
      let sub = num2
      num2 = num1 % num2
      num1 = sub
    }
    return num1
  }
  // keep this function call here 
  console.log(LinearCongruence(readline()));

































  function LinearCongruence(str) { 

    // code goes here  
    const [, a, b, m] = str.match(/^(\d+)x\D+(\d+)\D+(\d+)\)$/).map(Number);
  
      const answers = [];
  
      for (let i = 0; i < m; i++) {
          if ((a * i) % m === b % m) {
              answers.push(i);
          }
      }
  
      return answers.length;
  
  }
     
  // keep this function call here 
  console.log(LinearCongruence(readline()));
