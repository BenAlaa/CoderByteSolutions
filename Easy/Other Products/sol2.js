function OtherProducts(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    return arr.map(function(num, i) {
      return getProduct(arr, i);
    }).join('-'); 
  }
}

function getProduct(array, index) {
  return array.reduce(function(product, num, i) {
    if (i !== index) {
      product *= num;
    }
    return product;
  }, 1);
}
   
// keep this function call here 
OtherProducts(readline());