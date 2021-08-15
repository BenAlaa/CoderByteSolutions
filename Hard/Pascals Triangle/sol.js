function PascalsTriangle(arr) {
  let target = arr[arr.length - 1]
  if (target === 1) return -1
  let previous = [1]
  let current = [1, 1]
  while (true) {
    let previous = current
    current = []
    for (let i = 1; i < previous.length; i++) {
      current.push(previous[i] + previous[i - 1])
    }
    current.push(1)
    current.unshift(1)
    if (current.includes(target)) {
      let index = arr.length
      return current[index]
    }
  }

}

// keep this function call here 
console.log(PascalsTriangle(readline()));






































function PascalsTriangle(arr) { 

  // code goes here  
  function fact(n){return n==0?1:n*fact(n-1);}
  function choose(n1,n2){
    return fact(n1)/fact(n2)/fact(n1-n2);
  };
  len = arr.length;
  return arr[len-1]==1?-1:choose(arr[1],len);
}
   
// keep this function call here 
console.log(PascalsTriangle(readline()));
































function PascalsTriangle(arr) { 

  const MAX_TRIANGLE = 40;

  let triangle = [];
  for (let row = 0; row <= MAX_TRIANGLE; row++) {
      let rowArr = [];
      for (let i = 0; i <= row; i++) {
          if (i === 0) {
              rowArr.push(1);
              continue;
          }
          let delta = (i < triangle[row-1].length) ? triangle[row-1][i] : 0;
          rowArr.push(triangle[row-1][i-1] + delta);
      }
      
      if (rowArr.slice(0, arr.length).join('') === arr.join('')) {
          return (arr.length === rowArr.length) ? -1 : rowArr[arr.length];
      }
      
      triangle.push(rowArr);
  }
  
  // Should never happen given good input
  return -1;  
}
 
// keep this function call here 
PascalsTriangle(readline());