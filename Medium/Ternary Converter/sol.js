function TernaryConverter(num) { 
  return Number(num.toString(3));
}
 
// keep this function call here 
TernaryConverter(readline());















function TernaryConverter(num) { 
  let n = [0];
  while(num > 0){
    n[0] += 1;
    for(let pos = 0,max = n.length; pos < max; pos++){
      if(n[pos] > 2){
          n[pos] = 0;
          if(n[pos+1] === undefined){
            n.push(1);
          }else{
            n[pos+1] += 1;
          }
      }
    }
    num = num - 1;
  }
  return n.reverse().join('');
}
   
// keep this function call here 
TernaryConverter(readline());





















function TernaryConverter(num) {
  let tern = '';
  
  while (num > 0) {
      tern += String(num % 3);
      num = Math.floor(num / 3);
  }
  return tern.split('').reverse().join('');
}

TernaryConverter(readline());