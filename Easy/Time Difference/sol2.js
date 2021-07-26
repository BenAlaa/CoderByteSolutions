function TimeDifference(strArr) { 
    
  // empty array to hold times formatted into minutes
  var timeArr = [];
  
  for(var i = 0; i < strArr.length; i++){
      
      // cut up time string to make usable for UTC Date method 
      let strTime = strArr[i];
      let strTimeEnd = strTime.slice(-2);
      strTime = strTime.substring(0, strTime.length-2) + " " + strTimeEnd.toUpperCase();
      
      // add arbitrary date string plus time for UTC conversion
      let curr = "6/17/2017 " + strTime;
      let time = new Date(curr).toUTCString();
      
      // remove extra characters not needed - original conversion pre cleanup looks like this: "Sat, 17 Jun 2017 19:20:00 GMT"
      let cutTime = time.substring(17,time.length-7);
      cutTime = cutTime.replace(":", "");
      
      // convert time string to total minutes as a Number and push to timeArr
      let minuteConvert = Number(cutTime.substring(0,2) * 60) + Number(cutTime.substring(2,4));
      timeArr.push(minuteConvert);
  }

  // set leastDiff as infinity to guarantee a value less than it
  var leastDiff = Infinity;
  
  // loop through each index of total minutes and subtract (excluding double times) to get least difference
  for(var j = 0; j <timeArr.length; j++){
      for(var m = 0; m < timeArr.length; m++){
          if(timeArr[j] != timeArr[m]){
              let diff = Math.abs(timeArr[j] - timeArr[m]);
              if(diff < leastDiff){
                  leastDiff = diff;
              }
          }
      }
  }

return leastDiff; 
}
 
// keep this function call here 
TimeDifference(readline());