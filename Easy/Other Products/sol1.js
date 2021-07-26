function OtherProducts(arr) { 
  var prod= [];
  for(var i=0; i<arr.length; i++){
      prod[i]=arr.reduce(function(a,b){return a*b})/arr[i];
  }
// code goes here  
return prod.join().replace(/\,/g, "-"); 
       
}
 
// keep this function call here 
OtherProducts(readline());