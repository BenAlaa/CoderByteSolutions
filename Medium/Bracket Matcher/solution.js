function BracketMatcher(str) {
  let open = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') open++;
    if (str[i] === ')') open--;
    if (open < 0) return 0;
  }

  return open ? 0 : 1;
}
   
// keep this function call here 
BracketMatcher(readline());











function BracketMatcher(str) { 
  var leftCount = 0;
  var rightCount = 0;
  for (var i = 0; i < str.length; i++) {
      if (str[i] == "(") {
          leftCount++;
      } else if (str[i] == ")") {
          rightCount++;
      }
      if (rightCount > leftCount) {
          return 0;
      }
  }

  if (leftCount == rightCount) {
      return 1;
  } else {
      return 0;
  }
}
 
// keep this function call here 
BracketMatcher(readline());















function BracketMatcher(str) { 
  var len = str.length + 1;
  while (str.length < len) {
    len = str.length;
    str = str.replace(/([^()])|(([^()]*))/g, '');
  }
  return str.length === 0 ? 1 : 0;      
}
BracketMatcher(readline());
























function BracketMatcher(str) { 
  var len = str.length + 1;
  while (str.length < len) {
    len = str.length;
    str = str.replace(/([^()])|(([^()]*))/g, '');
  }
  return str.length === 0 ? 1 : 0;      
}
BracketMatcher(readline());





























function BracketMatcher(str) { 
  var arr = str.split("");
  var num = 0;
  
  for (i = 0; i < arr.length; i++){
    if (arr[i] === "("){
      num = num + 1; 
    }
    if (arr[i] === ")"){
      num = num - 1
    }
    if (num < 0 ){
      return 0;
    }
  }
  if (num === 0){
    return 1;
  } else {
    return 0;
  }   
  }
  
  BracketMatcher(readline());

























  function BracketMatcher(str) {
    var left = 0,
        right = 0,
        x = str.length;
    
    for (var i = 0; i < x; i++) {
      if (str.charAt(i) === "(") {
        left += 1;
      }
      if (str.charAt(i) === ")") {
        right += 1;
      }
      if (right > left) {
        return 0;
      }
    }
    if (right !== left) {
      return 0;
    } else {
      return 1;
    }
    
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  BracketMatcher(readline());