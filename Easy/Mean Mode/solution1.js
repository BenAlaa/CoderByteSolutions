function MeanMode(arr) { 
  var res={};
  var max = 0;
  var mode = 0;
  var mean = 0;
  var sum = 0;
  for(var i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  mean = parseInt(sum/arr.length);
  arr.forEach(function(el){
    if(res[el]) {
      res[el]++;
    } 
    else{
      res[el] = 1;
    }
    if(res[el]>max){
      max = res[el];
      mode = el;
    } 
  });
  // code goes here  
    return mode==mean ? 1:0; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline());