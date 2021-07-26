function ThreeNumbers(str) { 

  let chop = str.split(' ');
  let returnVal = true;
  
  chop.forEach((val)=>{
      
      if(/\d\d\d/.test(val)){
          returnVal =  false;
      }
      
      newVal = val.replace(/\D/g,'');
      if(newVal.length !==3){
          returnVal =  false;
      }
      
      let newSet = new Set(newVal.split(''));
          if(newSet.size !==3){
              returnVal = false;
          }
      });
      
  return returnVal;
  
}
 
// keep this function call here 
ThreeNumbers(readline());