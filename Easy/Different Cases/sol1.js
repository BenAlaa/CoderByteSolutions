function DifferentCases(str) { 

  let retVal = "";
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let charCode = char.charCodeAt(0);
      if (i === 0 && charCode >= 97 && charCode <= 122) {
          retVal = char.toUpperCase();
      } else  {
          let prevChar = str[i - 1];
          let prevCharCode = prevChar.charCodeAt(0);
          if ((prevCharCode < 97 || prevCharCode > 122) && charCode >= 97 && charCode <= 122) {
              retVal += char.toUpperCase();
          } else if (charCode >= 97 && charCode <= 122) {
              retVal += char;
          }
      }
  }
  return retVal;
       
}
 
// keep this function call here 
DifferentCases(readline());