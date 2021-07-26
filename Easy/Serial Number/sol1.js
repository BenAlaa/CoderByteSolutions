function SerialNumber(str) { 
  
  // code goes here  
  return containsThreeSetsOfThreeDigits(str) //&&
  firstSetSumsToEven(str) &&
  secondSetSumsToOdd(str) &&
  greatestDigitsLast(str);
}

function containsThreeSetsOfThreeDigits(str){
    var sets = str.split('.');
    return ( sets.length === 3 && sets.every(element => element.length === 3 && isNumber(element)) );
}


function isNumber(str){
    return !(/[^0-9]/.test(str));
}


function firstSetSumsToEven(str){
    var sets = str.split('.');
    return sum(sets[0]) % 2 === 0
}

function sum(str){
    var digits = str.split('').map(Number);
    return digits.reduce( (acc, el) => acc + el)
}

function secondSetSumsToOdd(str){
    var sets = str.split('.');
    return sum(sets[1]) % 2 === 1
}

function greatestDigitsLast(str){
    var sets = str.split('.');
    return (sets[0][2] > sets[0][1] && sets[0][2] > sets[0][0] &&
    sets[1][2] > sets[1][1] && sets[1][2] > sets[1][0] &&
    sets[2][2] > sets[2][1] && sets[2][2] > sets[2][0]
    );
}


   
// keep this function call here 
SerialNumber(readline());