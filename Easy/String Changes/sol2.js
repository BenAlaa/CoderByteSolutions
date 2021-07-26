function StringChanges(str) { 

  // code goes here
  var ansArr = [];
  var prev = "";
  var skip = false;
  
  for (var char of str){
    if (skip) {
      skip=false;
      continue;
    }
    else if (char==="M") {
      ansArr.push(prev);
    }
    else if (char==="N") {
      skip=true;
    }
    else {
      ansArr.push(char);
      prev=char;
    }
  }
  
  
  return ansArr.join(""); 

}
   
// keep this function call here 
console.log(StringChanges(readline()));
