function MissingDigit(str) { 

  // code goes here  
  let arr=str.split(" "),ans,missingX;
  let flipOp={"*":'/',"+":'-',"-":'+',"/":'*'}
  
  for(let i=0;i<arr.length;i++){
      if(arr[i].match(/d*xd*/g)){
          missingX=arr[i]
                if(i<3){
                    if (arr[1]==="-"&&i===2){ ans=eval(arr[0]+"-"+arr[4])}
                    else {ans = eval(arr[4]+flipOp[arr[1]]+(i===0?arr[2]:arr[0])) }
                }else {
                    ans=eval(arr[0]+arr[1]+arr[2])
                }
      }
  }
    ans=String(ans)
        return  ans[missingX.indexOf('x')]
}
   
// keep this function call here 
MissingDigit(readline());




























function MissingDigit(str) { 
 
  var x = 0;
  
  var temp = str.replace('x', x);
  var arr = temp.split(' = ');
  
  while(eval(arr[0]) !== eval(arr[1])){
      x++;
      temp = str.replace('x', x);
      arr = temp.split(' = ');
  }
  
  return x;
         
}
   
// keep this function call here 
MissingDigit(readline());





























function MissingDigit(str) {
  
  arr = str.split('=');
  
  let evalStr, complete; 
  
  if (arr[0].includes('x')) {
    evalStr = arr[0];
    complete = arr[1];
    } else {
      evalStr = arr[1];
      complete = arr[0];
    }
  
  let x = evalStr.indexOf('x');
  let part1 = evalStr.slice(0, x);
  let part2 = evalStr.slice(x+1, evalStr.length)
  console.log(part1, part2)
  
  for(var i=0; i<10; i++) {
    let replacedX = part1 + i + part2;
    if (eval(replacedX) === eval(complete)){
      return i; 
    }
  }
  
}

   
// keep this function call here 
MissingDigit(readline());



































function MissingDigit(str) {
  var arr = str.split(" ");
  var num1 = arr[0];
  var num2 = arr[2];
  var num3 = arr[4];
  var operator = arr[1];
  var res;
  var operators = ["+", "-", "*", "/"];
  var index = operators.indexOf(operator);
  
  if (isNaN(num3)) {
    res = eval(num1 + operator + num2);
    if (num3 !== res) {
      res = res.toString();
      res = res[Number(num3.indexOf("x"))];
    }
  }
  if (isNaN(num2)) {
    if (/[+*]/.test(operator)) {
      operator = operators[index+1];
      res = eval(num3 + operator + num1);
    } else {
      res = eval(num1 + operator + num3);  
    }
    if (num2 !== res) {
      res = res.toString();
      res = res[Number(num2.indexOf("x"))];
    }
  }
  if (isNaN(num1)) {
    if (/[+*]/.test(operator)) {
      operator = operators[index+1];
    } else {
      operator = operators[index-1];    
    }
    res = eval(num3 + operator + num2);
    if (num1 !== res) {
      res = res.toString();
      res = res[Number(num1.indexOf("x"))];
    }
  }
  return res; 
}
   
// keep this function call here 
MissingDigit(readline());