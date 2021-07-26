function AdditivePersistence(num) { 
  var count=0;
  while(num>9){
      num=num.toString().split("").reduce(function(a,b){return parseInt(a,10)+parseInt(b,10)});
      count++;
  }
// code goes here  
return count; 
       
}
 
// keep this function call here 
AdditivePersistence(readline());