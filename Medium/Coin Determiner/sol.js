function CoinDeterminer(num) { 
	var coin=[1,5,7,9,11], len=coin.length ,T=[]
	for(var x=0;x<len;x++){
		for(var p=0;p<num+1;p++){
			x===0?(T[x]===undefined?T[x]=[0]:T[x].push(p)):(T[x]=[0])
		}
	}
	for(var i=1;i<len;i++){
		for(var j=0;j<=num;j++){
			j>=coin[i]?T[i][j]=Math.min(T[i-1][j],1+T[i][j-coin[i]]):T[i][j]=(T[i-1][j])
		}
	}
	return Math.min(...T.map(e=>e[e.length-1]))
}
   
// keep this function call here 
CoinDeterminer(readline());














function CoinDeterminer(num) { 
  var count = 0;
  
  while(num>10){
      if(num % 11 > 1 && num % 11 < 5){
          num -= 9;
          count++;
      } else {
          num -= 11;
          count++;
      }
  }
  
  while(num>8){
      if(num % 9 > 1 && num % 9 < 5){
          num -= 7;
          count++;
      } else {
          num -= 9;
          count++;
      }
  }
  
  while(num>6){
      num -= 7;
      count++;
  }
  
  while(num>4){
      num -= 5;
      count++;
  }
  
  while(num>0){
      num -= 1;
      count++;
  }
  
  return count;
}
 
// keep this function call here 
CoinDeterminer(readline());        



















function CoinDeterminer(num) { 
  let coins = [1, 5, 7, 9, 11],
      sum = 0,
      count = 0,
      rand,
      winners = [];
      
  for(let i = 0;i < 10000; i++) {
      if (count > 20) {
          sum=0;
          count=0
      }
      
      count++;
      rand = Math.floor(Math.random() * coins.length);
      sum += Number(coins[rand]);
      
      if (sum === num) {
          winners.push(count);
      }
  }

  return winners
      .sort(function (a, b) {
          return a - b;
      })
      .shift();
}
 
// keep this function call here 
CoinDeterminer(readline());