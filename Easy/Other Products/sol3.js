function OtherProducts(arr) { 
  var product = arr.reduce((a,b)=> a * b) 
  
  var otherProducts = arr.map( function(num) {
      return product / num;
  })
  return otherProducts.join('-')     
}
 
// keep this function call here 
OtherProducts(readline());