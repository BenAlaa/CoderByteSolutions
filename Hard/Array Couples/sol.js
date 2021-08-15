function ArrayCouples(arr) { 
  const pairs = {};

  for (let i = 0; i < arr.length - 1; i += 2) {
    const int1 = arr[i];
    const int2 = arr[i + 1];

    if (pairs[int1 + '_' + int2]) {
      pairs[int1 + '_' + int2]++;
    } else {
      pairs[int1 + '_' + int2] = 1;
    }
  }

  let unmatched = [];

  for (let i = 0; i < arr.length - 1; i += 2) {
    const int1 = arr[i];
    const int2 = arr[i + 1];

    if (!pairs[int2 + '_' + int1]) {
      unmatched.push(int1, int2);
    } else if (int1 === int2) {
      if (pairs[int2 + '_' + int1] < 2) {
        unmatched.push(int1, int2);
      } else {
      pairs[int2 + '_' + int1]-=2;
      }
    } else {
      pairs[int2 + '_' + int1]--;
    }
  }
  
  return unmatched.length ? unmatched.join(",") : "yes"; 
}
   
// keep this function call here 
console.log(ArrayCouples(readline()));








































function ArrayCouples(arr) { 
  const unmatchedPairs = [];
     for (let i = 0; i < arr.length; i += 2) {
         if (!pairInArray(arr, [arr[i + 1], arr[i]], i)) {
             unmatchedPairs.push([arr[i], arr[i + 1]]);
         }
     }
     return unmatchedPairs.length === 0 ? 'yes' : unmatchedPairs.join(',');
 
     function pairInArray(arr, pair, excludeIndex) {
         for (let i = 0; i < arr.length; i += 2) {
             if (
                 excludeIndex !== i &&
                 arr[i] === pair[0] &&
                 arr[i + 1] === pair[1]
             ) {
                 return true;
             }
         }
         return false;
     }
          
 
 }
    
 // keep this function call here 
 console.log(ArrayCouples(readline()));









































 function ArrayCouples(arr) {

  const lookup = {}
  const checkReverse = (num1, num2) => {
    if (lookup[num2] === num1) return true
    return false
  }

  for (let i = 0; i < arr.length; i += 2) {
    const num1 = arr[i]
    const num2 = arr[i + 1]
    if (checkReverse(num1, num2)) {
      delete lookup[num2]
    } else {
      lookup[num1] = num2
    }
  }

  const res = Object.keys(lookup).reduce((acc, key) => {
    acc.push(+key, +lookup[key])
    return acc
  }, []).join(",")
  return res.length ? res : "yes"
}

// keep this function call here 
console.log(ArrayCouples(readline()));