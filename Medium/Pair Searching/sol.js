function PairSearching(num) { 

  let solution = false, failsafe = 0, tempResult = [];
  let result = returnEveryCombo(num.toString().split(''), num);
  while (!solution && failsafe < 100)   {
      for(let i = 0; i < result.length; i++){
          let currentArr = result[i][0]
          solution =  matchingNeighbors(currentArr);
          if (solution) break;
          tempResult = [...tempResult, ...returnEveryCombo(currentArr, result[i][1])]
      }
      result = tempResult;
    
      failsafe ++;
 }
 return failsafe;
 
  function returnEveryCombo(current, num) {
      let arr = num.toString().split(''), returnArr = [];
      for (let i = 0; i < arr.length; i++) {
          let product = +arr[i] * num;
          let tempArr = [...current, ...product.toString().split('')];
          returnArr.push([tempArr, product])
      }
      return returnArr;
  }


  function matchingNeighbors(arr) {
      if (arr.length < 2) return false;
      for (i = 1; i < arr.length; i++){
          if (arr[i] === arr[i - 1]) {
              return true;
          }
      }
      return false;
  }
}
 
// keep this function call here 
console.log(PairSearching(readline()));






































function PairSearching(num) { 
  // recursion ends, pair found
  if (checkPair(num)) { return 0; }
  let minCount, str = num.toString()
  for (let i = 0; i < str.length; i++) {
    // str[i] * num becomes number, appended as string 
    let newStr = str + str[i] * num
    // if (i === 0) {
    //   console.log("START")
    //   console.log("checkPair(Number(newStr))",checkPair(Number(newStr)))
    //   console.log("str[i]",str[i])
    //   console.log("+str[i]",+str[i])
    // }
    if (checkPair(Number(newStr))) { return 1; }
    if (str[i] > 1) {
      let resCount = 1 + PairSearching(str[i] * num);
      if (i === 0) {
        // console.log("resCount", resCount)
        // console.log("minCount", minCount)
      }
      if (minCount === undefined || resCount < minCount) {
        minCount = resCount;
      }
    }
  }
  return minCount;
}

function checkPair(num) {
  return /(\d)\1/.test(num.toString());
}
   
// keep this function call here 
console.log(PairSearching(readline()));



































function PairSearching(num) {
  let numArray = [num];
  let count = 0;
  let flag = false;

  let searching = (arr) => {
    let res = false;
    let numsArr = [];
    arr.forEach(val1 => {
      let numList = String(val1).split('');
      numList.forEach(val2 => {
        let product = val1 * Number(val2);
        let bigNumList = numList.concat(String(product).split(''));
        if (repeatNum(bigNumList)) {
          res = true;
        } else {
          numsArr.push(product);
        }
      });
    });
    return res || numsArr;
  }

  let repeatNum = (numArr) => {
    for (let i = 0, len = numArr.length; i < len - 1; i++) {
      if (numArr[i] === numArr[i + 1]){
        return true;
      }
    }
    return false;
  }
  
  while (!flag) {
    count++;
    if (searching(numArray) === true) {
      return count;
    } else {
      numArray = searching(numArray);
    }
  }
}
   
// keep this function call here 
PairSearching(readline());


































function PairSearching(num) { 
  // recursion ends, pair found
  if (checkPair(num)) { return 0; }
  let minCount, str = num.toString()
  for (let i = 0; i < str.length; i++) {
    // str[i] * num becomes number, appended as string 
    let newStr = str + str[i] * num
    // if (i === 0) {
    //   console.log("START")
    //   console.log("checkPair(Number(newStr))",checkPair(Number(newStr)))
    //   console.log("str[i]",str[i])
    //   console.log("+str[i]",+str[i])
    // }
    if (checkPair(Number(newStr))) { return 1; }
    if (str[i] > 1) {
      let resCount = 1 + PairSearching(str[i] * num);
      if (i === 0) {
        // console.log("resCount", resCount)
        // console.log("minCount", minCount)
      }
      if (minCount === undefined || resCount < minCount) {
        minCount = resCount;
      }
    }
  }
  return minCount;
}

function checkPair(num) {
  return /(\d)\1/.test(num.toString());
}
   
// keep this function call here 
console.log(PairSearching(readline()));