function ArrayAdditionI(arr){
  var max=arr.sort(function(a, b){return a-b}).pop();
  if(sum(arr)==max) return true;
  return removeOneLayer(arr,max);
}
function removeOneLayer(temp,max){
  if(temp.length<=0) return false;
  for(var i=0;i<temp.length;i++){
      var temp2=temp.slice(0);
      temp2.splice(i,1);
      if(sum(temp2)==max) return true;
      removeOneLayer(temp2,max);
  }
  return false;
}
function sum(arr){
  return eval(arr.join('+'));
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArrayAdditionI(readline());