function BracketCombinations(num) { 
  // By Doing sum search i found a formula that can achieve what this problem want
  // called Catalan number (Catalan Formula)
  // where catalan formula is ==> (2n!) / (n+1)! n!

  // first i will calculate the factorial of the num
  let factorial = (n) => {
    let k = 1;
    for(var i = n; i >= 1; i--){
      k *= i;
    }
    return k;
  }
  
  // formula going down
  const result = (factorial(2 * num)) / ((factorial(num + 1)) * (factorial(num)));
  return result; 
}
   
// keep this function call here 
console.log(BracketCombinations(readline()));



















function BracketCombinations(num) { 

  // code goes here  
  const ns= [0,1,2];
  for (let i = 3; i <= num; i++) {
    let sum = ns[i-1] * 2; // () times i-1 combinations, i-1 times ()
    //console.log(sum);
    for (let j = 1; j < i-1; j++) {
      //console.log(j);
      sum += ns[j] * ns[i - j - 1];
    }
    ns.push(sum);
  }
  return ns[num];
}
   
// keep this function call here 
console.log(BracketCombinations(readline()));































function BracketCombinations(num) { 

  // code goes here  
  count = 0;
  n = 2**(2*num);
  for (iperm=0; iperm<n; iperm++){
    sum = 0;
    i = iperm;
    for (dig = 2*num; dig > 0; dig --){
      bit = i % 2;
      i -= bit;
      i /= 2;
      sum = sum + (bit == 0?1:-1);
      if(sum<0){break; };
    };
    count += (sum ==0)?1:0;
  };
  return count; 
}
   
// keep this function call here 
console.log(BracketCombinations(readline()));


























function BracketCombinations(num) {
  let combos = 0;
  
  (function inner(left, right, str) {
    if (left === 0 && right === 0) {
      // combos.push(str);
      combos++;
    }
    
    if (left > 0) {
      inner(left - 1, right + 1, str + '(');
    }
    
    if (right > 0) {
      inner(left, right - 1, str + ')');
    }
  })(num, 0, '');
  return combos;
}
   
// keep this function call here 
BracketCombinations(readline());