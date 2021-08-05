function LookSaySequence(num) {   
  var saidNum = ''
  var numbers = num.toString().match(/([0-9])\1*/g);
  for (var i = 0; i < numbers.length; i++) {
    var len = numbers[i].length;
    var value = numbers[i][0];
    saidNum += len + value
  }
  return Number(saidNum)
}
   
// keep this function call here 
LookSaySequence(readline());






















var Parser = function (arr) {
  this.peekNextChar=peekNextChar;
  this.getNextChar=getNextChar;
  var expression = arr;
  var length = arr.length;
  index = 0;

  function peekNextChar() {
      var idx = index;
      return ((idx < length) ? expression.charAt(idx) : undefined);
  }

  function getNextChar() {
      var ch = undefined,
          idx = index;
      if (idx < length) {
          ch = expression.charAt(idx);
          index += 1;
      }
      return ch;
  }
};
function LookSaySequence(num) { 
var current;
var next;
var cnt=1;
var answer='';
var arr=num.toString();
var parser = new Parser(arr);
current=parser.getNextChar();
do{
    next=parser.peekNextChar();
    if(current===next){
        cnt+=1;
    } 
    else{
        answer=answer+cnt+current;
        cnt=1;
    }
    current=parser.getNextChar();
}while(next!==undefined);
// code goes here  
return answer; 
       
}
 
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LookSaySequence(readline());




























function LookSaySequence(num) { 

  // code goes here  
  let numStr = num.toString();
  let output = "";
  
  let current = numStr[0];
  let count = 1;
  for (let i=1; i<numStr.length; i++) {
      if (numStr[i] === current) {
          count++;
      } else {
          output += count + current;
          current = numStr[i]
          count = 1;
      }
  }
  output += count + current;
  
  return parseInt(output); 
         
}
   
// keep this function call here 
LookSaySequence(readline());