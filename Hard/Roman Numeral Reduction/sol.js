const rnToInt = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}

const intToRN = [
  [1000, "M"],
  [500, "D"],
  [100, "C"],
  [50, "L"],
  [10, "X"],
  [5, "V"],
  [1, "I"]
]

function biggestRNLte(n) {
  for (const [intVal, rn] of intToRN) {
    if (intVal <= n) {
      return [rn, intVal]
    }
  }
  throw new Error('No RN <= ' + n)
}

function parseRN(str) {
  return Array.from(str)
    .map((digit) => 
      rnToInt[digit]
    ).reduce((total, current) => 
      total + current
    , 0)
}

function writeRN(n) {
  let result = ""
  while (n > 0) {
    const [nextRN, nextInt] = biggestRNLte(n)
    result += nextRN
    n -= nextInt
  }
  return result
}

function RomanNumeralReduction(str) { 
  return writeRN(parseRN(str)); 
}

console.log(RomanNumeralReduction(readline()));







































function RomanNumeralReduction(str) { 

  const ROMAN_NUMERALS = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1
  };
  
  // First, turn given input into decimal value
  let sum = 0;
  str.split('').forEach(letter => {
      sum += ROMAN_NUMERALS[letter];
  });
  
  // Second, turn decimal value back into roman numerals
  let output = '';
  Object.entries(ROMAN_NUMERALS).forEach(value => {
      let num = Math.floor(sum / value[1]);
      sum -= num * value[1];
      output += value[0].repeat(num);
  });
  
  return output;
}
 
// keep this function call here 
RomanNumeralReduction(readline());






































const ROMAN_VALUES = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
const ROMAN_LETTERS = Object.keys(ROMAN_VALUES).reverse();

function RomanNumeralReduction(str) { 

    return number2Roman(roman2Number(str)); 

    function roman2Number(r) {
        let v = 0;
        for (let c of r.split('')) {
            v += ROMAN_VALUES[c];
        }
        return v;
    }

    function number2Roman(n) {
        let letterIndex = 0;
        let r = '';
        while (n) {
            while (ROMAN_VALUES[ROMAN_LETTERS[letterIndex]] > n) {
                letterIndex ++;
            }

            const letter = ROMAN_LETTERS[letterIndex];
            while (ROMAN_VALUES[letter] <= n) {
                r = r + letter;
                n = n -= ROMAN_VALUES[letter];
            }
        }
        return r;
    }
  }

   
// keep this function call here 
RomanNumeralReduction(readline());