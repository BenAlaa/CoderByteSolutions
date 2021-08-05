function SimplePassword(str) {
  return ( /[A-Z]/.test(str) && /\d/.test(str) &&
  /[^\w\s/]/.test(str) && !/password/i.test(str)
  && str.length > 7 && str.length < 31 );
}
 
// keep this function call here 
SimplePassword(readline());
















function SimplePassword(str) { 
  if(!/[A-Z]/g.test(str)) return false;
  if(!/[0-9]/g.test(str)) return false;
  if(!/[!=]/g.test(str)) return false;
  if(/password/gi.test(str)) return false;
  if(!(str.length > 7 && str.length < 31)) return false;
  return true;
       
}
 
// keep this function call here 
SimplePassword(readline());




























function SimplePassword(str) { 

  // code goes here  
  if(str.toLowerCase().includes('password')){
      return 'false'
  }
  
  str = str.split('');
  let len = str.length;
  
  if( len > 31 || len < 7){
      return 'false'
  }
  
  let cap = false;
  let num = false;
  let punc = false;
  
  for(var i = 0; i < len; i++){
      if(typeof str[i] == 'string' && str[i].toUpperCase()){
          cap = true;
      }
      if(/[~`!#$%\^&*+=\-\[\]\\`;,|{}|\\'':<>\?]/g.test(str[i])){
          punc = true;
      }
      if(typeof parseInt(str[i]) == 'number'){
        //   console.log(str[i])
          num = true;
      }
      
  }
  
//   console.log(cap,num,punc)
  if(cap && num && punc){
      return 'true'
  }
         
}
   
// keep this function call here 
SimplePassword(readline());
























function SimplePassword(str) { 
  let length = str.length;
  if (length < 8) return false;
  if (length > 30) return false;
  if (str.toLowerCase().indexOf("password") > -1) return false;

  let capital = false;
  let punctation = false;
  let number = false;
  let punctuations = [".", ",", ":", "!", "?", "=", "/", "\\", "\"", "-", "+", "*"];
  for (let i = 0; i < length; i ++) {
      if (str[i] === str[i].toUpperCase()) capital = true;
      if (punctuations.indexOf(str[i]) > -1) punctation = true;
      if (/[0-9]/.test(str[i])) number = true;
  }

  if (!capital) return false;
  if (!punctation) return false;
  if (!number) return false;

  return true;          
}
// keep this function call here 
SimplePassword(readline());

































function SimplePassword(str) { 
  if(str.length > 31 || str.length < 7){
    return false
  }
  var reNum = /[0-9]/;
  var reCap = /[A-Z]/;
  var rePunc = /[.,\/#!$%\^&\*;:{}=\-_`~()+]/;
  var puncExists = str.search(rePunc);
  var capExists = str.search(reCap);
  var numExists = str.search(reNum);
  var rePass = /password/;
  var passExists = str.toLowerCase().search(rePass);
  if(numExists !== -1 && capExists !== -1 && puncExists !== -1 && passExists === -1){
    return true;
  }
  return false; 
}
SimplePassword(readline());