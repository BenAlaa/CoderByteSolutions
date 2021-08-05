function ArrayAddition(arr) { 
  var target = arr.sort(function(a, b){return a-b}).pop();
  return isContains(arr, target);
}

function isContains(arr, target){
  if(arr.length === 0){
    return target === 0;
  }
  var head = arr[0];
  var tail = arr.slice(1);
  return isContains(tail, target - head) || isContains(tail, target);
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArrayAddition(readline());













function ArrayAddition(arr) { 
  var largest = Math.max.apply(Math, arr);
  arr.splice(arr.indexOf(largest), 1);
  var sets = [[]];
  var temp, s;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0, len = sets.length; j < len; j++) {
      temp = sets[j].concat(arr[i]);
      sets.push(temp);
      s = temp.reduce(function(a, b) { 
        return a + b; 
      });
      if (s === largest) { 
        return "true";
      }
    }
  }
  return "false";  
}
   
// keep this function call here 
ArrayAddition(readline());













function ArrayAddition(arr) { 
  const largest = Math.max(...arr), total = Math.pow(2, arr.length);
  arr.splice(arr.indexOf(largest), 1);
  for (let i = 1; i < total; i++) {
    let tempArr = [], biNum = i.toString(2);
    
    while (biNum.length < arr.length) biNum = '0' + biNum;
    
    for (j = 0; j < biNum.length; j++) {
        if (biNum[j] == '1') tempArr.push(arr[j]);
    }
    if ((tempArr.reduce((t, c) => t+=c)) == largest) return 'true';
    tempArr = [];
  }
  return 'false';
}
ArrayAddition(readline());