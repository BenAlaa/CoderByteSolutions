function StringExpression(str) { 

  // code goes here  
  let dictionary = [ 
    ['zero', '0'], 
    ['one', '1'], 
    ['two', '2'],
    ['three', '3'],
    ['four', '4'],
    ['five', '5'],
    ['six', '6'],
    ['seven', '7'],
    ['eight', '8'],
    ['nine', '9'],
    ['minus', '-'],
    ['plus', '+']
  ];
  dictionary.forEach(val => {
    let regEx = new RegExp (val[0], 'g');
    str = str.replace(regEx, val[1]);
  });

  let resString = eval(str).toString();

  dictionary.slice(0,10).forEach(val => {
    let regEx = new RegExp (val[1], 'g');
    resString = resString.replace(regEx, val[0]);
  });

  return resString.replace('-', 'negative');
}
   
// keep this function call here 
console.log(StringExpression(readline()));







































function StringExpression(str) { 

  // code goes here  
  let wordToSym = {
    zero: "0",
    one : "1",
    two : "2",
    three : "3",
    four : "4",
    five : "5",
    six : "6",
    seven : "7",
    eight : "8",
    nine : "9",
    plus : "+",
    minus : "-"
  } 

  let symToWord = {
    "0" : "zero",
    "1" : "one",
    "2" : "two",
    "3" : "three",
    "4" : "four",
    "5" : "five",
    "6" : "six",
    "7" : "seven",
    "8" : "eight",
    "9" : "nine",
    "-" : "negative"
  } 

  for (word in wordToSym) {
    str = str.replace(new RegExp(word, "g"), wordToSym[word]);
    //console.log(str);
  }

  let result = (eval(str) + "").split("");
  let returnVal = "";
  for (let sym of result) {
    returnVal += symToWord[sym];
  }
  return returnVal;

}
   
// keep this function call here 
console.log(StringExpression(readline()));









































const dict = {
  'zero': '0',
  'one': '1',
  'two': '2',
  'three': '3',
  'four': '4',
  'five': '5',
  'six': '6',
  'seven': '7',
  'eight': '8',
  'nine': '9',
  'plus': '\+',
  'minus': '\-',
}

function StringExpression(str) {
  let calculatedString = str;
  
  for (let key of Object.keys(dict)) {
      const pattern = new RegExp(key,"g");
      calculatedString = calculatedString.replace(pattern, dict[key]);
  }

  const res = eval(calculatedString).toString().split('');
  const resArr = [];

  for (let i=0, resLen=res.length; i<resLen; i++) {
      resArr.push(i === 0 && res[i] === '-' 
          ? 'negative' 
          : Object.keys(dict).find(key => dict[key] === res[i]));
  }

  return resArr.join('');
}
 
// keep this function call here 
console.log(StringExpression(readline()))