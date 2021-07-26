function OffLineMinimum(strArr) { 
  var smallests = [];
    
  for (var i = 0; i < strArr.length; i++) {
    var char = strArr[i];
    if (char === 'E') {
      var subset = strArr.slice(0,i);
      var smallest = subset.sort()[0];
      smallests.push(smallest)
            
      var indexToReplace = strArr.indexOf(smallest)
      strArr[indexToReplace] = 'I'
    }
  }
    return smallests.join(',')
}
// keep this function call here 
OffLineMinimum(readline());