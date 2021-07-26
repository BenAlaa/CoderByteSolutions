function SumMultiplier(arr) { 
  let doubleSum = (arr.reduce((a,b) => a+=b)) * 2;
  let product = [];
  arr.forEach((num,i) => {
    arr.forEach((item,k) => {
      product.push(num * item);
    });
  });
  return product.some(num => num > doubleSum)
}
SumMultiplier(readline());