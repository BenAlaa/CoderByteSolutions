function Calculator(str) { 

  // code goes here  
  var output=str[0];
  for(var i=1;i<str.length;i++){
      if(str[i]=='('&&(str[i-1]==')'||!isNaN(str[i-1]))){
          output+='*';
      }
      output+=str[i];
  }
  return eval(output)
  
  return str;
         
}
   
// keep this function call here 
Calculator(readline());







































var Calculator;
Calculator = Calculator || {};
Calculator.Stack = function(){
  this.data = [];
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.get = get;
  function push(el){
    this.data.push(el);
   } 
   function pop(){
     return this.data.pop();
   } 
   function peek(){
     return this.data[this.data.length-1];
    } 
    function length(){
      return this.data.length;
    } 
    function get(){
      return this.data;   
    } 
};
Calculator.Parser = function(str){
  var expr = str;
  var ptr = 0;
  var stack = new Calculator.Stack();
  var opStack = new Calculator.Stack();
  function peekNextChar(){
    var ch;
    var idx = ptr;
    if(idx<=expr.length){
      ch=expr.charAt(idx);
     } 
     return ch;
   } 
  function getNextChar(){
    var ch;
    var idx = ptr;
    if(idx<=expr.length){
      ch = expr.charAt(idx);
     ptr++;
     } 
     return ch;
   }
   function getNumber(ch){
     var num=ch;
     while(isNumber(peekNextChar())){
       
       num=num+getNextChar();
      } 
      return num;
    } 
  function isNumber(ch){
    return (ch>='0') && (ch<='9');
   }
   function isOperator(ch){
    return ('*-+/').indexOf(ch);
   } 
   function parseUnary(num){
     return '-'+num;
    } 
    function operatorPriority(ch){
      var priority;
      if(ch==='+'||ch==='-'){
        priority = 1;
      }
      else if(ch==='*'||ch==='/'){
        priority = 2;
      }
      return priority;
     
    } 
   function operatorCheck(ch){
     var chPriority = operatorPriority(ch);
     var stackPriority = operatorPriority(opStack.peek());
       while(stackPriority>=chPriority && opStack.length()>0){
         stack.push(opStack.pop());
         stackPriority = operatorPriority(opStack.peek());
       } 
     opStack.push(ch);
  } 
  function parse(){
    var ch=getNextChar();
    while(ptr<=expr.length){
      if(peekNextChar()==='(' && isOperator(ch)===-1){
        if(isNumber(ch)){
          stack.push(getNumber(ch));
         }
        operatorCheck('*');
        ch = getNextChar();
      }
      if(ch==='-' && ptr===1){
        stack.push(parseUnary(getNumber(getNextChar())));
        ch=getNextChar();
        }
      if(ch===')'){
        while(opStack.length()>0 && opStack.peek()!=='('){
          stack.push(opStack.pop());
         } 
         opStack.pop();
          
       } 
      if(isNumber(ch)){
        ch=getNumber(ch);
        stack.push(ch);
       }
      if(isOperator(ch)!==-1){
        operatorCheck(ch);
     } 
      if(ch==='('){
        opStack.push(ch);
        if(peekNextChar()==='-'){
          getNextChar();
          ch=parseUnary(getNumber(getNextChar()));
          stack.push(ch);
         } 
       } 
      ch=getNextChar();
     }
     ch=opStack.length();
     while(ch>0&&opStack.peek()!=='('){
       stack.push(opStack.pop());
       ch--;
       }
   return stack.get();
};
  return {
     parse:parse
   };
};
Calculator.Evaluator = function(str){
   var parser = new Calculator.Parser(str);
   var postFix = parser.parse();
   var result = new Calculator.Stack();
   function addition(){
     var lExp = parseInt(result.pop());
     var rExp = parseInt(result.pop());
     var res = lExp+rExp;
     result.push(res);
    } 
    function multiply(){
      var lExp = parseInt(result.pop());
      var rExp = parseInt(result.pop());
      var res = lExp*rExp;
      result.push(res);
    } 
    function divide(){
       var lExp = parseInt(result.pop());
       var rExp = parseInt(result.pop());
       var res = rExp/lExp;
       result.push(res);
    } 
    function subtract(){
      var lExp = parseInt(result.pop());
      var rExp = parseInt(result.pop());
      var res = rExp-lExp;
      result.push(res);
    } 
   function evaluate(){
     var idx=0;
     var ch;
     while(idx<postFix.length){
       ch=postFix[idx];
       switch(ch){
         case '+':
          addition();
          break;
         case '-':
          subtract();
          break;
         case '*':
          multiply();
          break;
         case '/':
          divide();
          break;
         default:
          result.push(ch);
          break;
       }
       ++idx;
     } 
     return result.get();
    } 
   return{
     evaluate:evaluate
    };
  };
function Calculator(str) { 
var evaluator = new Calculator.Evaluator(str);
return evaluator.evaluate().join('');
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Calculator(readline());
























































function Calculator(str) { 
  return eval(str.replace(/()()|(d()|()d)/g, function (m) {
    return m.split('').join('*');
  }));
}
Calculator(readline());








































function Calculator(str) { 

  // code goes here  
  return eval(str.replace(/([0-9])(/g, '$1*(').replace(/)([0-9])/g, ')*$1').replace(/)(/g, ')*(')) 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Calculator(readline());