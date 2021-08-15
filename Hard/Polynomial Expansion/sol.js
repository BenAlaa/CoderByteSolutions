function PolynomialExpansion(str) {
  let letter = str.match(/[a-z]/g)[0];
  str = str.split('(');
  str.shift();
  let args = str.map(arg => {
      return arg.replace(/\)/g, '');
  });
  let polyA = getPolynom(args[0]);
  let polyB = getPolynom(args[1]);
  let polyR = expansion(polyA, polyB);
  return prettify(polyR, letter);
}

function getPolynom(str) {
  let matches = str.match(/(-?\d*[a-z]?(?:\^-?\d+)?)/g);
  let poly = [];
  for (let i = 0; i < matches.length; i++) {
      if (matches[i].length) {
          let m = matches[i].match(/(-?\d*)([a-z])?(\^-?\d*)?/);
          // format a * (x) * b
          let a = (m[1] !== undefined) ? parseInt(m[1]) : 1, b = 0;
          if (m[3] === undefined) {
              if (m[2] === undefined) {
                  b = 0;
              } else {
                  b = 1;
              }
          } else {
              b = parseInt(m[3].slice(1));
          }
          poly.push([a, b]);
      }
  }
  return poly;
}

function expansion(poly1, poly2) {
  let polyR = [];
  for (let i = 0; i < poly1.length; i++) {
      for (let j = 0; j < poly2.length; j++) {
          let multi = [poly1[i][0] * poly2[j][0], poly1[i][1] + poly2[j][1]];
          let index = polyR.findIndex(factor => factor[1] === multi[1]);
          if (index >= 0) {
              polyR[index][0] += multi[0];
          } else {
              polyR.push(multi);
          }
      }
  }
  return polyR.sort(function(a, b) {
      return b[1] - a[1];
  });
}

function prettify(poly, letter) {
  let polynome = '';
  for (let i = 0; i < poly.length; i++) {
      if (poly[i][0] > 0 && i > 0) {
          polynome += '+';
      }
      if (poly[i][0] === 1 && poly[i][1] === 1) {
          polynome += letter;
      } else if (poly[i][0] === 1 && poly[i][1] !== 0) {
          polynome += letter+'^'+poly[i][1];
      } else if (poly[i][1] === 0) {
          polynome += poly[i][0];
      } else if (poly[i][1] === 1) {
          polynome += poly[i][0]+letter;
      } else {
          polynome += poly[i][0]+letter+'^'+poly[i][1];
      }
  }
  return polynome;
}
 
// keep this function call here 
console.log(PolynomialExpansion(readline()));















































function PolynomialExpansion(str) { 
  // code goes here  
  var result = [];
  var sides = str.match(/(.*?)/g);
  var left = [], right = [];
  var regex = /([+-])?(d+)(w)?^?(-?d+)?/g;
  var variable = str.match(/[A-Za-z]/)[0];
  var m;
  var hasVariable;
  while (m = regex.exec(sides[0])) {
    hasVariable = typeof m[3] !== 'undefined';
    left.push({
      coefficient: parseInt((typeof m[1] === 'undefined'?'+':m[1]) + m[2]),
      variable: hasVariable===false?variable:m[3],
      exponent: 0
    });
    if (hasVariable) {
      if (typeof m[4] === 'undefined') {
        left[left.length-1].exponent = 1;
      } else {
        left[left.length-1].exponent = parseInt(m[4]);
      }
    } else {
      left[left.length-1].exponent = 0;
    }
  }
  while (m = regex.exec(sides[1])) {
    hasVariable = typeof m[3] !== 'undefined';
    right.push({
      coefficient: parseInt((typeof m[1] === 'undefined'?'+':m[1]) + m[2]),
      variable: hasVariable===false?variable:m[3],
      exponent: 0
    });
    if (hasVariable) {
      if (typeof m[4] === 'undefined') {
        right[right.length-1].exponent = 1;
      } else {
        right[right.length-1].exponent = parseInt(m[4]);
      }
    } else {
      right[right.length-1].exponent = 0;
    }
  }
  for (var i = 0; i < left.length; i++) { // multiply each left with each right
    for (var j = 0; j < right.length; j++) {
      result.push({
        coefficient: left[i].coefficient * right[j].coefficient,
        variable: left[i].variable,
        exponent: left[i].exponent + right[j].exponent
      });
    }
  }
  result = sortByExponent(result);
  for (var i = result.length-1; i > 0; i--) { // add those with same exponent
    if (result[i].exponent === result[i-1].exponent) {
      result[i-1].coefficient = result[i].coefficient + result[i-1].coefficient;
      result.splice(i,1);
    }
  }
  str = '';
  for (var i = 0; i < result.length; i++) {
    var temp = result[i].coefficient;
    str = str.concat(temp > 0?'+':'', temp!==1?temp:'', result[i].variable, '^', result[i].exponent);
  }
  str = str.replace(/([A-Za-z])^0/g, '');
  str = str.replace(/([A-Za-z])^1([+-]|$)/g, '$1$2');
  return str[0]==='+'?str.substring(1):str;
}

function sortByExponent(arr) {
  for (var i = 0; i < arr.length-1; i++) {
    var largest = i;
    for (var j = i+1; j < arr.length; j++) {
      if (isSmaller(arr[largest], arr[j])) {
        largest = j;
      }
    }
    if (largest != i) {
      var temp = arr[largest];
      arr[largest] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

function isSmaller(var1, var2) {
  if (var1.exponent !== '' && var2.exponent !== '') {
    return parseInt(var1.exponent) < parseInt(var2.exponent);
  } else {
    if (var1.exponent !== '' || var2.exponent !== '') {
      return var1.exponent==='';
    }
  }
  return true;
}
// to see how to enter arguments in JavaScript scroll down
PolynomialExpansion(readline());

















































unction Regulate(arr, letter){
  for(var i=0; i<arr.length; i++){
     
     
      if(arr[i].indexOf('^')==-1 && arr[i].indexOf(letter)>=0 ){
          arr[i]+='^1';
      } else if (arr[i].indexOf('^')==-1 && arr[i].indexOf(letter)===-1){
          arr[i]+=letter+'^0'
      }
  }
  return arr;
}

function Unregulate(arr, letter){
  for(var i=0; i<arr.length; i++){
      if(/^1$/.test(arr[i])){
        arr[i] = arr[i].substring(0,arr[i].length-2);
      } else if (/^0$/.test(arr[i])){
        arr[i] = arr[i].substring(0,arr[i].length-3);
      }
      //arr[i] = arr[i].replace(/1[A-z]/g,letter)
  }
  return arr;
}

function PolynomialExpansion(str) {
  var arr=str.match(/[0-9A-Za-z+-^]+/gi);
  var letter = str.match(/[A-z]/)[0];
  //console.log(letter)
  var eq1 = arr[0].match(/(D(d{1,})?|d{1,})?w^(Dd{1,}|d{1,})|(D(d{1,})?|d{1,})w?/gi);
  var eq2 = arr[1].match(/(D(d{1,})?|d{1,})?w^(Dd{1,}|d{1,})|(D(d{1,})?|d{1,})w?/gi);
  eq1 = Regulate(eq1,letter);
  eq2 = Regulate(eq2,letter);
  
  
  var ans = [], a=0, b=0;
  for (var i=0; i<eq1.length; i++){
      for (var j=0; j<eq2.length; j++){
          if(eq1[i].indexOf(letter)>=0){
                   a = Number(eq1[i].substring(0,eq1[i].indexOf(letter)))*Number(eq2[j].substring(0,eq2[j].indexOf(letter)));
                   b = Number(eq1[i].substring(eq1[i].indexOf(letter)+2))+Number(eq2[j].substring(eq2[j].indexOf(letter)+2));
                  ans.push(a+letter+"^"+b)
                  
          }
      }
  }
  ans.sort(function(a,b){return Number(b.substring(b.indexOf('^')+1))-Number(a.substring(a.indexOf('^')+1))})
  
  var obj={};
  for (var k=0; k<ans.length;k++){
      if (obj[ans[k].match(/[A-z]^(Dd{1,}|d{1,})?/)[0]]===undefined){
          obj[ans[k].match(/[A-z]^(Dd{1,}|d{1,})?/)[0]]=Number(ans[k].substring(0,ans[k].indexOf(letter)))
      } else{
          obj[ans[k].match(/[A-z]^(Dd{1,}|d{1,})?/)[0]]+=Number(ans[k].substring(0,ans[k].indexOf(letter)))
      }
  }
  
  ans =[];
  for(var n in obj){
      if(obj[n]!==1&&obj[n]!==-1){
          ans.push(obj[n] + n)
      } else if (obj[n]===1){
          ans.push(n)
      } else {
          ans.push('-' + n)
      }
      
  }
  ans = Unregulate(ans,letter).join('+');
  ans = ans.replace(/+-/g,'-')
  
  return ans
}
// keep this function call here 
PolynomialExpansion(readline());





