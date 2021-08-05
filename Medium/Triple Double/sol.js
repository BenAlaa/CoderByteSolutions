function TripleDouble(num1,num2) { 
  var triples=[];
  var doubles=[];
  var match=false;
  num1=num1.toString();
  num2=num2.toString();
  for (i=0; i<num1.length; i++) {
      if (num1.charAt(i)===num1.charAt(i+1) && num1.charAt(i)===num1.charAt(i+2)) triples.push(num1.charAt(i));
  }
  for (j=0; j<num2.length; j++) {
      if (num2.charAt(j)===num2.charAt(j+1) && num2.charAt(j)!==num2.charAt(j-1)) doubles.push(num2.charAt(j));
  }
  for (k=0; k<triples.length; k++) {
      if (doubles.includes(triples[k])) match=true;
  }
  return match?1:0;
}
 
// keep this function call here 
TripleDouble(readline());





















function TripleDouble(num1,num2) { 

  let str1 = num1.toString();
  let str2 = num2.toString();
  
  if (str1.length > str2.length) {
      for (let i=0; i<str2.length; i++) {
          let triple = str2[i].repeat(3);
          let double = str2[i].repeat(2);
          
          if (str1.indexOf(triple) !== -1 && str2.indexOf(double) !== -1) {
              return 1;
          }
      }
  } else {
      for (let i=0; i<str1.length; i++) {
          let triple = str1[i].repeat(3);
          let double = str1[i].repeat(2);
          if (str1.indexOf(triple) !== -1 && str2.indexOf(double) !== -1) {
              return 1;
          }
      }
  }
  return 0; 
         
}
   
// keep this function call here 
TripleDouble(readline());
























function TripleDouble(num1,num2) { 
   
  num1 = num1.toString()
  num2 = num2.toString()

  var tripleReg = /(\d)\1\1/
  var matchA = tripleReg.exec(num1)
  
  if (matchA !== null) {
    
    var matchNum = matchA[1]
    var doubleReg = new RegExp('(' + matchNum + ')\\1')
    
    if (doubleReg.test(num2))
      return 1
  }
  
  return 0
}

   
// keep this function call here 
TripleDouble(readline());