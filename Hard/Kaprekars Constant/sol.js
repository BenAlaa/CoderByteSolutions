function KaprekarsConstant(num) { 

  num = num.toString().split('');
  while (num.length < 4) {
    num.push(0);
  }
  var sum = parseInt(num.join(''));
  var temp = 0;
  var count = 0;
  
  while (sum !== 6174) {
    for (var i = 0; i < num.length; i ++) {
      for (var j = i+1; j < num.length; j ++) {
        if (num[i] < num[j]) {
          temp = num[i];
          num[i] = num[j];
          num[j] = temp;
        } 
      }
    }
    sum = parseInt(num.join('')) - parseInt(num.reverse().join(''));
    num = sum.toString().split('');
    while (num.length < 4) {
    	num.push(0);
  	}
    count ++;
  }
  return count;
         
}
   
// keep this function call here 
KaprekarsConstant(readline());





































function leadingZeros(str) {
  while (str.length < 4) {
      str = '0' + str;
  }
  return str;
}

function KaprekarsConstant(num) { 
num += '';
let rodeo = 0;
while (num !== '6174') {
      let ascending = num.
                      split('').
                      map(Number).
                      sort((a,b) => a - b).
                      map(String).
                      join('');
      let descending = num.
                      split('').
                      map(Number).
                      sort((a,b) => b - a).
                      map(String).
                      join('');
  num = leadingZeros(String(descending - ascending));
  rodeo++;
}
return rodeo; 
}
 
// keep this function call here 
KaprekarsConstant(readline());





































function KaprekarsConstant(num1) { 

  if (num1 === 6174) {
        return 1;
    }
    
    var tot = 0;
    
    while (num1 !== 6174) {
        num1 = kasp(num1);
        tot++;
    }
    return tot;
         
}

function kasp(num) {
    var num1, num2;
    
    num = formatNum(num);
    var arr1 = num.toString().split("").map(Number).sort(function(a, b){return a-b})
    var arr2 = num.toString().split("").map(Number).sort(function(a, b){return b-a});
    
    num1 = arr1.join("");
    num2 = arr2.join("");
    
    if (num1 > num2) {
        num = num1 - num2;
    }
    else {
        num = num2 - num1;
    }
    
    num = formatNum(num);
    return num;
}

function formatNum(myNum) {
    
    if (myNum.toString().length === 4) {
        return myNum;
    }
    else {
        if(myNum<10) myNum="000"+myNum;
        else if(myNum<100) myNum="00"+myNum;
        else if(myNum<1000) myNum="0"+myNum;
        return myNum;
    }
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
KaprekarsConstant(readline());















































function descendingNumber (num) {
  return Number(num.toString().split("").sort(function(a, b){
    return Number(b) - Number(a);
  }).join(""));
}
descendingNumber(1218)
function ascendingNumber (num) {
  return Number(num.toString().split("").sort(function(a, b){
    return Number(a) - Number(b);
  }).join(""));
}
function makeFourDigitNumber(num) {
  num = num.toString();
  while (num.length < 4) {
    num += "0";
  }
  return Number(num);
}
function KaprekarsConstant(num) { 
  var count = 0;
  //if num increasing - num decreasing = 6174 return the count
  function recurseNum(num) {
    count++;
    var subtraction = descendingNumber(num) - ascendingNumber(num);
    console.log(subtraction);
    if (subtraction < 1000) {
      subtraction = makeFourDigitNumber(subtraction);
    }
    if (subtraction === 6174) {
      return count;
    }
    else {
      recurseNum(subtraction);
    }
  }
  recurseNum(num);
  return count;
}
   
// keep this function call here 
KaprekarsConstant(readline());