function SerialNumber(str) { 
  var test1 = /[1-9]{3}\.[1-9]{3}\.[1-9]{3}/g.test(str);
  var test2 = (Number(str[0]) + Number(str[1]) + Number(str[2])) % 2 === 0;
  var test3 = (Number(str[4]) + Number(str[5]) + Number(str[6])) % 2 !== 0;
  var test4 = (Number(str[2]) > Number(str[1]) && Number(str[2]) > Number(str[0])) && 
              (Number(str[6]) > Number(str[5]) && Number(str[6]) > Number(str[4])) &&
              (Number(str[10]) > Number(str[9]) && Number(str[10]) > Number(str[8]));
  if (test1 && test2 && test3 && test4){
      return true;
  }           
  return false;
}
 
// keep this function call here 
SerialNumber(readline());