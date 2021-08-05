function MultipleBrackets(str) { 

  var arr = str.match(/[()[\]]/g)
  if (!arr) return 0
  var hold = arr.length
  var num = []
  for (var i = 0; i < arr.length; i++) {
    if ((arr[i] === '[' && arr[i+1] === ']') || (arr[i] === '(' && arr[i+1] === ')')) {
      num.push(i)
      arr.splice(i,2)
      i = -1
    }
  }
  return num.length !== hold/2 ? 0 : `1 ${num.length}`
         
}
   
// keep this function call here 
MultipleBrackets(readline());



























function MultipleBrackets(str) { 
  if(str.indexOf(')')<str.indexOf('(')) return 0;
  if(str.indexOf(']')<str.indexOf('[')) return 0;
  var tempstr=str;
  tempstr=tempstr.replace(/[^[(]/g,'');
  str=str.replace(/[^])]/g,'');
  if(str.length==tempstr.length){
    return 1+' '+tempstr.length;
  }
  return 0; 
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MultipleBrackets(readline());

























function MultipleBrackets(str) { 
  let arr = [];
  let brackets = ['(', ')', '[', ']', '{', '}']
  let pairs = {
    "(": ")",
    "{": "}",
    "[": "]"
  }
  let counter = 0;
  for (let i = 0; i < str.length; i ++) {
    if (brackets.includes(str[i])) {
      let last = arr.length-1;
      if (pairs[arr[last]] === str[i]) {
        arr.pop();
        counter ++;
      }
      else {
        arr.push(str[i]);
      }
    }
  }
  if (counter && !arr.length) return '1'+' '+counter.toString();
  else return "0";
}
// keep this function call here 
MultipleBrackets(readline());



















function MultipleBrackets(str) {
  var lP = 0,
      rP = 0,
      lB = 0,
      rB = 0,
      x = str.length;
  for (var i = 0; i < x; i++) {
    if (str.charAt(i) === "(") {
      lP += 1;
    }
    if (str.charAt(i) === ")") {
      rP += 1;
    }
    if (str.charAt(i) === "[") {
      lB += 1;
    }
    if (str.charAt(i) === "]") {
      rB += 1;
    }
    if (rP > lP || rB > lB) {
      return 0;
    }
  }
  if (lP !== rP || lB !== rB) {
    return 0;
  } else if (lP === 0 && rB === 0) {
    return 0;
  } else {
    return "1 " + (lP + lB).toString();
  }
  

}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MultipleBrackets(readline());