function StockPicker(arr) { 
  var maxProf = 0;
  var profits = arr.map(function (currPrice, index) {
     return arr.slice(index, arr.length).sort(function(a, b) {return b-a;})[0] - currPrice;
  });
  maxProf = profits.sort(function(a,b) {return b-a;})[0];
  return (maxProf > 0) ? maxProf : -1;
}
StockPicker(readline());

















function StockPicker(arr) { 
  let profits = arr.map((num,index) => {
    let max = 0;
    for(let k = arr.length-1; k > index; k--){
      if(arr[k] - num > max){
        max = arr[k] - num;
      }
    }
    return [max]
    });
    let m = Math.max(...profits);
    return (m) ? m : -1;
}
   
// keep this function call here 
StockPicker(readline());
























function StockPicker(arr) {
  var maxProfit = 0;
  var profit;

  arr.forEach(function(price1, i) {
    arr.forEach(function(price2, j) {
      profit = price2 - price1;
      if (j > i && profit > maxProfit) {
        maxProfit = profit;
      }
    });
  });
  
  return maxProfit > 0 ? maxProfit : -1;
}
   
// keep this function call here 
StockPicker(readline());



























function StockPicker(arr) { 
  var profit=-1;
  var buyPrice=arr[0];
  for(var i=1; i<arr.length; i++){
      if(arr[i]<buyPrice){
          buyPrice=arr[i];
      }
      else if(arr[i]-buyPrice>profit){
          profit=arr[i]-buyPrice;
      }
  }
  
// code goes here  
return profit; 
}
 
// keep this function call here 
StockPicker(readline());



























function StockPicker(arr) { 
  var maxProfit;
  
  for (var i = 0; i < arr.length; i++) {
      var buyPrice = arr[i];
      for (var j = i+1; j < arr.length; j++) {
          var sellPrice = arr[j];
          var profit = sellPrice - buyPrice;
          if (maxProfit === undefined || profit > maxProfit) {
              maxProfit = profit;
          } 
      }
  }
  return maxProfit;
}
 
// keep this function call here 
StockPicker(readline());