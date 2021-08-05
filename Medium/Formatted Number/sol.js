function FormattedNumber(strArr) { 
  let decimaltest = strArr.join(",");
  decimaltest = decimaltest.split(".");

  if (decimaltest.length > 2) return false;
  if (decimaltest.length === 2) {
      if (parseInt(decimaltest[1]) != decimaltest[1]) return false;
  }
  let numberString = decimaltest[0].split(",");
  let length = numberString.length;
  for (let i = 0; i < length; i++) {
      if (parseInt(numberString[i]) != numberString[i]) return false;
      if (parseInt(numberString[i]) > 999) return false;
      if (i > 0) {
          if (!/\d\d\d/.test(numberString[i])) return false;
      }

  }
  return true;
}

// keep this function call here 
FormattedNumber(readline());






















function FormattedNumber(strArr) { 
  var num = strArr[0];
  
  num = num.split(".");
  
  if (num.length > 2) {
    return false;
  }
  
  num = num[0].split(",");
  
  return num.every(function(a, i) {
    return i === 0 ? a.length <= 3 : a.length === 3;
  });    
}
   
// keep this function call here 
FormattedNumber(readline());


































function FormattedNumber(strArr) { 
  var input = strArr[0];
  if (input.indexOf('.') === -1) {
      return beforeDecimal(input);
  }
  var before = input.split('.')[0];
  var after = input.split('.')[1];
  if (input.match(/\./g).length > 1) {
      return false;
  } 
  return afterDecimal(after) && beforeDecimal(before);
}

function afterDecimal(num) {
    if (/\d/g.test(num) === false) {
      return false;
    }
    return /\D/g.test(num) ? false : true;
}

function beforeDecimal(num) {
    if (/\,/g.test(num) === false) {
        if (num.length > 3) {
            return false;
        }
        if (/\D/g.test(num)) {
            return false;
        }
    } else {
        num = num.split(',');
        var first = num[0];
        var subsequent = num.slice(1);
        if (first.length > 3) {
            return false;
        }
        
        var correctLengths = subsequent.every(element => element.length === 3);
        
        if (correctLengths === false) {
            return false;
        }
    }
    
    return true;
}
   
// keep this function call here 
FormattedNumber(readline());