function findCombination(digitsArr, signSequence) {
  if (digitsArr.length === 2) {
      if (digitsArr[0] > 0 && digitsArr[1] > 0 && digitsArr[0] - digitsArr[1] === 0) {
          return signSequence.join('') + '-';
      } else if (digitsArr[0] + digitsArr[1] === 0) {
          return signSequence.join('') + '+';
      }

      return 'not possible';
  }

  const minusRes = findCombination(
      [digitsArr[0] - digitsArr[1]].concat(digitsArr.slice(2)),
      [...signSequence].concat(['-'])
  );

  const plusRes = findCombination(
      [digitsArr[0] + digitsArr[1]].concat(digitsArr.slice(2)),
      [...signSequence].concat(['+'])
  );


  if (plusRes.replace(/[^\-]/g, '').length
      > minusRes.replace(/[^\-]/g, '').length) {
      return plusRes;
  } else {
      return minusRes;
  }
}

function PlusMinus(num) {
  const numArr = num.toString().split('').map(i => parseInt(i));

  if (numArr.length === 1) {
      return 'not possible';
  }

  return findCombination(numArr, []);
}
 
// keep this function call here 
console.log(PlusMinus(readline()));





































function PlusMinus(num) { 
  let retVal = "not possible";
  let arr = num.toString().split('').map(n => parseInt(n, 10));
  let results = {};

  RFindPermutations(0, 1, 0, [], arr, results)

  let answer = results['0'];
  if(answer !== undefined){
    //Make the return value from signs
    retVal = "";
    for(let i = 1; i < answer.length; i++){
      if(answer[i] < 0){
        retVal += "-";
      }else{
        retVal += "+";
      }
    }
  }
  return retVal;
}

//Influenced by/ripped off from Zoulfia's solution: https://coderbyte.com/results/Zoulfia:Plus%20Minus:JavaScript
function RFindPermutations(idx, sign, mySum, permutation, arr, results){
  mySum += arr[idx] * sign;
  permutation.push(arr[idx] * sign);
  if(idx < arr.length - 1){
    RFindPermutations(idx + 1, 1, mySum, permutation.slice(), arr, results);
    RFindPermutations(idx + 1, -1, mySum, permutation.slice(), arr, results);
  }else{
    results[mySum.toString()] = permutation;
  }
  
}

// keep this function call here 
console.log(PlusMinus(readline()));



































function PlusMinus(num) {
  let array = num.toString().split('')
  let answers = []
  search(1, +array[0], [])

  function search(i, sum, path) {
    if (i === array.length) {
      if (sum === 0) answers.push(path)
    } else {
      let newSum = sum + +array[i]
      let newPath = path.slice()
      newPath.push('+')
      search(i + 1, newSum, newPath)
      let newSum2 = sum - +array[i]
      let newPath2 = path.slice()
      newPath2.push('-')
      search(i + 1, newSum2, newPath2)
    }
  }
  if (answers.length > 0) {
    let minusCount = 0
    let finalAnswer = []
    for (let i = 0; i < answers.length; i++) {
      let currentCount = 0
      for (let j = 0; j < answers[0].length; j++) {
        if (answers[i][j] === '-') {
          currentCount++
          if (currentCount > minusCount) {
            minusCount = currentCount
            finalAnswer = answers[i]
          }
        }
      }
    }
    return finalAnswer.join('')

  }
  return 'not possible'
}

// keep this function call here 
console.log(PlusMinus(readline()));
































const helper = (arr, i, currentSum) => {
  const value = arr[i];
  if (i === arr.length) {
    if (currentSum === 0) {
      return '';
    }
    return null;
  }
  const plusSum = currentSum + value;
  let plusResult = helper(arr, i+1, plusSum);
  plusResult = plusResult !== null ? '+' + plusResult : '';
  const minusSum = currentSum - value;
  let minusResult = helper(arr, i+1, minusSum);
  minusResult = minusResult !== null ? '-' + minusResult : '';
  if (!minusResult && !plusResult) {
    return null;
  } else if (plusResult && !minusResult) {
    return plusResult;
  } else if (minusResult && !plusResult) {
    return minusResult;
  } else {
    return (minusResult.split("-").length - 1) > (plusResult.split("-").length - 1) ? minusResult: plusResult;
  }
}

function PlusMinus(num) { 
  if (num) {
    const arr = num.toString().split('').map((n) => parseInt(n, 10));
    const result = helper(arr, 1, arr[0]);
    if (result) {
      return result;
    }
  }
  return 'not possible';
}
   
// keep this function call here 
// @ts-ignore
console.log(PlusMinus(readline()));
