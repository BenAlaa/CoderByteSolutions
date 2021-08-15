function NimWinner(arr) {
  let ones = 0
  let even = 0
  let odd = 0
  arr.forEach(num => {
    if (num === 1) ones++
    else if (num % 2 === 0) even++
    else odd++
  })
  if (ones % 2 === 0 || (even % 2 === 1 && odd % 2 === 1)) return 2

  return 1

}

// keep this function call here 
console.log(NimWinner(readline()));















































function Nimplayer(arr) { 
  return arr.reduce((acc, curr) => acc ^ curr) !== 0 ? 1 : 2;
}
   
// keep this function call here 
console.log(Nimplayer(readline()));





























function NimWinner(arr) { 

  // https://en.wikipedia.org/wiki/Nim#Mathematical_theory
  const nimSum = arr.reduce((nimSum, num) => nimSum ^ num);
  const winningPlayer = nimSum === 0 ? 2 : 1;
  return winningPlayer;
       
}
 
// keep this function call here 
NimWinner(readline());







































function NimWinner(arr) { 

  // https://en.wikipedia.org/wiki/Nim#Mathematical_theory
  const nimSum = arr.reduce((nimSum, num) => nimSum ^ num);
  const winningPlayer = nimSum === 0 ? 2 : 1;
  return winningPlayer;
       
}
 
// keep this function call here 
NimWinner(readline());