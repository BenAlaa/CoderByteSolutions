function CountingMinutes(str) { 
  var time=[];
  
    var am = str.match(/am|pm/g);
  
    var hours = str.match(/[0-9]{1,}(?=:)/g).map(function(x){
  
      return parseInt(x, 10)
  
        });
  
    var mins = str.match(/[1-9]{0,}[0-9](?=[ampm])/g).map(function(y){;
  
       return parseInt(y, 10)
  
         });
  
    for(var i=0;i<am.length;i++){
  
      if(am[i] == 'am' && hours[i]===12){
  
        hours[i] -= 12;
  
      }
  
      else if(am[i]=='pm' && hours[i]!==12){
  
        hours[i]+=12;
  
      }
    }
      for(var i=0;i<hours.length;i++){
  
        time.push(hours[i]*60 + mins[i]);
  
      }
  
    
  
    // code goes here 
  return time[0]>time[1]?((24*60)-time[0])+time[1]:time[1]-time[0]  
           
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  CountingMinutes(readline());

  


























  function CountingMinutes(str) { 
    var val=toMinutes(str.split("-")[1])-toMinutes(str.split("-")[0]);
    if (val<0) {
        val=toMinutes("12:00pm")-Math.abs(val);
    }
    return val;
 }
 function toMinutes(str) {
     var hrs=parseFloat(str.split(":")[0]);
     var mins=parseFloat(str.split(":")[1].replace(/\D/g, ""));
     if (str.indexOf("pm")!==-1) {
         hrs+=12;
     }
     return (parseFloat(hrs)*60)+parseFloat(mins);
 }  
 // keep this function call here 
 CountingMinutes(readline());















 function CountingMinutes(str) { 

  let times = str.split('-');
  let time1 = times[0], time2 = times[1];
  
  let minutes1 = minutesFromMidnight(time1);
  let minutes2 = minutesFromMidnight(time2);
  
  if (minutes1 < minutes2) {
      return minutes2 - minutes1;
  }
  return 1440 - (minutes1-minutes2); 
         
}

function minutesFromMidnight(time) {
    let arr = time.split(':');
    let hours = parseInt(arr[0]);
    let minutes = parseInt(arr[1].substr(0,2));
    let period = arr[1].substring(2);
    
    if (period == 'am') {
        minutes = hours*60 + minutes;
    }
    
    if (period == 'pm') {
        minutes = (12+hours)*60 + minutes;
    }
    return minutes;
}   
// keep this function call here 
CountingMinutes(readline());
