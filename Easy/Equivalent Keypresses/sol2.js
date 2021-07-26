function loopItr (arr)
{
  var respr = '';
  
  for(var i = 0; i <= arr.length; i++)
  {
    if((i !== 0) && arr[i] == '-B'){
      arr.splice(i - 1, 2).toString();
    }
    
    respr = arr;   
     
  }
  
  var finalarr = respr.filter(el => el !== '-B');
  
  return finalarr;
}


function EquivalentKeypresses(strArr) { 

  // code goes here  
  var firEle = strArr[0].split(',');
  var secEle = strArr[1].split(',');
  
  var finalres = Boolean;
  var fr = loopItr(firEle);
  var gr = loopItr(secEle);

  if(fr.toString() !== '')
  {
    if(fr.toString() == gr.toString())
    {
        finalres = true;
    } else 
    {
        finalres = false;
    }
  } else 
  {
      finalres = true;
  }
  

  return finalres; 

}
   
// keep this function call here 
console.log(EquivalentKeypresses(readline()));