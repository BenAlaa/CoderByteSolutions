function ReversePolishNotation(str) { 

  // code goes here  
  var arr = str.split(" ");
  var newarr=[];
  var op1=0, op2=0;
  var operators = ['+','-','*','/'];
  arr.forEach(function(element){
   if (operators.indexOf(element) == -1){
      newarr.push(element);             
   } else {
     op2= newarr.pop();
     op1= newarr.pop();
     	newarr.push(eval(op1+element+op2));
   }   
  });
  return newarr[0];          
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ReversePolishNotation(readline());
































function ReversePolishNotation(str) { 

  let tokens = str.split(' ');
  
  let stack = [];
  
  tokens.forEach(token => {
      let left, right;
      switch (token) {
          case '+':
              stack.push(stack.pop() + stack.pop());
              break;
          case '-':
              right = stack.pop();
              left = stack.pop();
              stack.push(left - right);
              break;
          case '*':
              right = stack.pop();
              left = stack.pop();
              stack.push(left * right);
              break;
          case '/':
              right = stack.pop();
              left = stack.pop();
              stack.push(left / right);
              break;
          default:
              stack.push(parseInt(token));
              break;
      }
  });

  return stack[0];
       
}
 
// keep this function call here 
ReversePolishNotation(readline());










































function ReversePolishNotation(str) { 
  var heap = new Array();
  var elements = str.split(" ");
  
  for(var ix = 0; ix < elements.length; ix++)
  {
    if(!isNaN(elements[ix]))
    {
       heap.push(elements[ix]);
    }
    else
    {
      switch(elements[ix]){
        case "+":
          heap.push(parseInt(heap.pop()) + parseInt(heap.pop()));
          break;
        case "*":
          heap.push(parseInt(heap.pop()) * parseInt(heap.pop()));
          break;
        case "/":
          var num2 = parseInt(heap.pop());
          var num1 = parseInt(heap.pop());
          heap.push(num1/num2);
          break;
        case "-":
          var num2 = parseInt(heap.pop());
          var num1 = parseInt(heap.pop());
          heap.push(num1-num2);
          break;
      }
    }      
  }
  
  // code goes here  
  return heap.pop(); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ReversePolishNotation(readline());