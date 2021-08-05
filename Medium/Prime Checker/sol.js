function isPrime(num){
  for( var i = 2 ; i < num ; i++ ){
      if( num % i === 0){
          return false;
      }
  }
  return true;
}

function permutations(num){
var arr = num.toString().split(''),
  len = arr.length, 
  perms = [],
  rest,
  picked,
  restPerms,
  next;

  if (len === 0)
      return [num];

  for (var i=0; i<len; i++)
  {
      rest = Object.create(arr);
      picked = rest.splice(i, 1);

      restPerms = permutations(rest.join(''));

     for (var j=0, jLen = restPerms.length; j< jLen; j++)
     {
         next = picked.concat(restPerms[j]);
         perms.push(next.join(''));
     }
  }
 return perms;
}



function PrimeChecker(num) { 

  var numbers = permutations(num);
  return numbers.filter(function(each){
      return isPrime(Number(each));
  }).length >= 1? 1: 0; 
       
}
 
// keep this function call here 
PrimeChecker(readline());



































function PrimeChecker(num) { 
  if(num <= 1){
    return 0;
  }
  var arr =[];
  var number = num.toString();
  var str = num.toString().split("");
  var recur = function(array, current){
    var temp = current || [];
    if(temp.length === number.length){
      if(arr.indexOf(temp.join("")) < 0){
        arr.push(temp.join(""));
      }
      return;
    }
    for(var i = 0; i < array.length; i++){
      temp.push(array[i]);
      var t = array[i];
      array.splice(i,1);
      recur(array, temp);
      array.splice(i,0,t);
      temp.pop();
    }
  };
  recur(str);
  for(var i = 0; i < arr.length; i++){
    if(checkPrime(parseInt(arr[i]))){
      return 1;
    }
  }
  return 0;
}

function checkPrime(number){
    if(number <= 1){
        return false;
    }
    var sqt = Math.sqrt(number);
    // console.log(sqt);
    for(var i = 2; i <= sqt; i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PrimeChecker(readline());



























function isPrime(n){
  for(var i=2; i<=n/2; i++){
    if (n%i == 0){ return false;}
  }
  return true; 
}

function getCombinations(chars) {
  var result = [];
  
  var f = function(prefix, chars) {
    for (var i = 0; i < chars.length; i++) {
      result.push(prefix + chars[i]);
      f(prefix + chars[i], chars.slice(i + 1));
    }
  }
  
  f('', chars);
  return result;
}


function PrimeChecker(n) {
  n = n.toString();
  output = 0; 
  
  res = getCombinations(n)
        .map( e => parseInt(e))
  
  res.forEach( e => { 
      if (isPrime(e)==true) {
         console.log(e)
        output+=1; 
      }
  });
  return output > 0 ? 1 : 0; 
}
 
// keep this function call here 
PrimeChecker(readline());