function MatchingCouples(arr) { 

  // code goes here  
  numBoys = arr[0];
  numGirls = arr[1];
  numOfEach = arr[2] / 2;

  let numCombos = numBoys * numGirls;
  for (let i = 1; i < numOfEach; i++) {
    numCombos *= (numBoys - i) * (numGirls - i) / (i + 1);
  }
  return numCombos;

}
   
// keep this function call here 
console.log(MatchingCouples(readline()));



































function MatchingCouples(arr) {
  const [boys, girls, numPairs] = arr;

  const numEachGender = numPairs / 2;

  const boyCombos = choose(boys, numEachGender);
  const girlCombos = choose(girls, numEachGender);
  const totalCombos = boyCombos * girlCombos * factorial(numEachGender);

  return totalCombos;
}

function factorial(num) {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
}

function choose(num, k) {
  return factorial(num) / (factorial(k) * factorial(num - k));
}
   
// keep this function call here 
MatchingCouples(readline());










































function MatchingCouples(arr) { 

  // code goes here  
  const [numberOfBoys, numberOfGirls, couples] = arr;
  const numberOfEachGender = couples / 2;

  const boyCombos = choose(numberOfBoys, numberOfEachGender);
  const girlCombos = choose(numberOfGirls, numberOfEachGender);
  const totalCombos = boyCombos * girlCombos * (factorial(numberOfEachGender));
  return totalCombos; 

}

function factorial(num) {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
}

function choose(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}
   
// keep this function call here 
console.log(MatchingCouples(readline()));