function OffLineMinimum(strArr) { 
  var nums=[], rtn=[];
  for (let i=0; i<strArr.length; i++) {
      if (strArr[i]==="E") {
          rtn.push(nums.sort(function(a,b) {return b-a}).pop());
      } else {
          nums.push(strArr[i]);
      }
  }
  return rtn.join(",");
}

// keep this function call here 
OffLineMinimum(readline());