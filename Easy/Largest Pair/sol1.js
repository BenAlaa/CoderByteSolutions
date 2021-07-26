function LargestPair(num) { 

  // code goes here  
  var s=''+num;
  var nums=[];
  for(var i=1;i<s.length;i++){
      nums.push(Number(s[i-1]+s[i]));
  }
  return Math.max(...nums);
         
}
   
// keep this function call here 
LargestPair(readline());