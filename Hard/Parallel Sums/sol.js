function ParallelSums(arr) {
  var arrSum = arr.reduce(function(var1, var2) {
      return var1 + var2;
  });
  var targetSum = arrSum / 2;
  var len = arr.length;

  var holdArr = [];

  for (var i = Math.pow(2, len); i < Math.pow(2, len + 1); i++) {
      var numToString = i.toString(2).slice(1);
      var numArray = numToString.split('');
      var count = numArray.filter(function(val) {
          return val === '1';
      }).length;

      if (count === len / 2) {
          holdArr.push(numToString);
      }
  }
  var holdArrlen = holdArr.length;
  for (var i = 0; i < holdArr.length; i++) {
      var sum = 0;
      var numStr = holdArr[i];
      for (var j = 0; j < len; j++) {
          var yesOrNo = parseInt(numStr.charAt(j), 10);
          sum += yesOrNo * arr[j];
      }
      if (sum === targetSum) {
          var ansArr1 = [];
          var ansArr2 = [];
          for (var k = 0; k < len; k++) {
              if (parseInt(numStr.charAt(k), 10)) {
                  ansArr2.push(arr[k]);
              } else {
                  ansArr1.push(arr[k]);
              }
          }
          ansArr1.sort(function(a, b) {return a - b});
          ansArr2.sort(function(a, b) {return a - b});

          return ansArr1[0] < ansArr2[0] ? ansArr1.concat(ansArr2).join(',') : ansArr2.concat(ansArr1).join(',')

          break;
      }

  }
  return -1;
}


// keep this function call here 
ParallelSums(readline());







































function sum(arr) {
  return arr.reduce((memo, next) => memo + next);
}

function checkSums(arr1, arr2) {
  return sum(arr1) === sum(arr2) ? true : false;
}

function buildSets(set1, set2) {
  if (set1.length === set2.length) {
    return checkSums(set1, set2) === true ? [set1, set2] : false;
  }
  for (let i = 0; i < set2.length; i++) {
    const winningSetsOrFalse = buildSets(set1.concat(set2[i]), set2.slice(0, i).concat(set2.slice(i + 1)));
    if (winningSetsOrFalse !== false) {
      return winningSetsOrFalse;
    }
  }
  return false;
}

function ParallelSums(arr) { 
  const sets = buildSets([arr[0]], arr.slice(1));
  if (sets !== false) {
    const set1 = sets[0].sort((a, b) => a - b);
    const set2 = sets[1].sort((a, b) => a - b);
    return set1[0] < set2[0] ? set1.concat(set2).join(',') : set2.concat(set1).join(',');
  }
  return -1;
}
   
// keep this function call here 
ParallelSums(readline());










































function arrSum(arr) {
  return arr.reduce((sum, item) => sum + item, 0);
}

function ParallelSums(arr) {
  const halfSum = arrSum(arr) / 2;
  const arrLen = arr.length;
  const halfArrLen = arrLen / 2;
  const allCombos = Math.pow(2, arrLen);

  for (let i=0; i<allCombos; i++) {
      const comboPattern = (i).toString(2).padStart(arrLen, '0');
      if (comboPattern.split('').filter(i => i === '1').length !== halfArrLen) {
          continue;
      }

      const indexes = [];
      for (let j=0; j<arrLen; j++) {
          if (comboPattern[j] === '1') {
              indexes.push(j);
          }
      }

      const firstArr = arr.filter((i, index) => indexes.indexOf(index) !== -1)
          .sort((a,b) => a-b);

      if (arrSum(firstArr) === halfSum) {
          const secondArr = arr.filter((i, index) => indexes.indexOf(index) === -1)
              .sort((a,b) => a-b);

          if (arrSum(secondArr) === halfSum) {
              return (firstArr[0] < secondArr[0]
                      ? firstArr.concat(secondArr)
                      : secondArr.concat(firstArr)
                  ).join(',');
          }
      }
  }

  return -1;
}
 
// keep this function call here 
console.log(ParallelSums(readline()));