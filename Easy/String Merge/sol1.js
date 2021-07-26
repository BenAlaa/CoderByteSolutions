function StringMerge(str) { 

  var a = str.split("*");
  var b = a[0];
  var c = a[1];
  var answer = "";
  
  for( var i = 0 ; i < b.length ; i++){
      answer += (b[i] + c[i]);
  }
  return answer;
}
 
// keep this function call here 
StringMerge(readline());