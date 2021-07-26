function ArrayMatching(strArr) { 
  var a = strArr[0].match(/d+/g).map(Number);
  var b = strArr[1].match(/d+/g).map(Number);
  
  var longest = a.length >= b.length ? a : b;
  var other = longest === a ? b : a;
  
  return longest.map((e,i) => other[i] ? e + other[i] : e).join('-');
}
 
// keep this function call here 
ArrayMatching(readline());
