function MostFreeTime(strArr) { 
  let newArr = strArr.map(val => val.match(/(d+:d+A*P*M)/g))  
  
  for (let i=0; i<newArr.length; i++) {                           //convert to military time
      for (let j=0; j<newArr[i].length; j++) {
          if (newArr[i][j].match(/(PM)/g) && !newArr[i][j].match(/(12)/g) ) {
              newArr[i][j] = (Number(newArr[i][j].slice(0,2)) + 12) + newArr[i][j].slice(2);
          }
      }
  }
  newArr = newArr.sort(function(a,b) {return a[0].slice(0,2)-b[0].slice(0,2)})
    
  let biggestMin=0;                                               //convert to minutes and find diff
  for (let s=0; s<newArr.length-1; s++) {
      let hour1 = Number(newArr[s+1][0].slice(0,2) * 60)  + Number(newArr[s+1][0].slice(3,5));
      let hour2 = Number(newArr[s][1].slice(0,2) * 60) + Number(newArr[s][1].slice(3,5));
      let temp = hour1 - hour2; 
      if (temp > biggestMin) {biggestMin = temp} 
  }   
  let hour = Math.floor(biggestMin / 60)                          //convert mins back to hour:min
  let min = biggestMin % 60  
  return (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0"+min : min)
  }
  MostFreeTime(readline());























  function MostFreeTime(strArr) { 
  
    function getTime(string) {
      var hour   = parseInt(string.match(/^[0-9]{1,2}/g)[0]);
      var min    = parseInt(string.match(/:[0-9]{2}/g)[0].replace(/:/g,''));
      var period = string.match(/(AM|PM)$/g)[0];
      if(period == "PM" && hour != 12) {
        hour += 12;
      } else if(period == "AM" && hour == 12) {
        hour -= 12;
      }
      return hour*60+min;
    };
    
    function formattedTime(time) {
      var hours = Math.floor(time/60);
      var mins  = time%60;
      if(hours < 10 && mins < 10) {
        return "0" + hours + ":0" + mins;
      } else if(hours < 10) {
        return "0" + hours + ":" + mins;
      } else if(mins < 10) {
        return hours + ":0" + mins;
      } else {
        return hours + ":" + mins;
      }
    };
    
    function getTimeInMins(string) {
      var times = string.match(/[0-9]{1,2}:[0-9]{2}(AM|PM)/g);
      var times = times.map(getTime);
      return times;
    };
    
    var mins = strArr.map(getTimeInMins);
    mins.sort(function(a,b) {return a[0] > b[0]});
    var longestFreeTime = 0;
    for(var i = 0; i < mins.length-1; i++) {
      var freeTime = mins[i+1][0] - mins[i][1];
      if(longestFreeTime < freeTime)
        longestFreeTime = freeTime;
    }
    
    return formattedTime(longestFreeTime);
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  MostFreeTime(readline());


































  function MostFreeTime(strArr) { 
    var minArr = []
    var longest = 0
    function timeCalc(time) {
        var min = 0
        if(time.match(/pm/i)) {
            min += 720
        }
        if(time.split(':')[0] !== '12') {
           min += time.split(':')[0] * 60
        }    
        min += Number(time.split(':')[1].match(/[0-9][0-9]/)[0])
        return min
    }
    for(var i = 0; i < strArr.length; i++) {
        var time1 = strArr[i].split('-')[0]
        var time2 = strArr[i].split('-')[1]
        minArr.push([timeCalc(time1), timeCalc(time2)])
    }    
    minArr.sort(function(a, b) {
        return a[0] - b[0]
    })
    for(var j = 0; j < minArr.length - 1; j++) {
        if(longest < minArr[j + 1][0] - minArr[j][1]) {
            longest = minArr[j + 1][0] - minArr[j][1]
        }
    }
    var hours = 0
    while(longest >= 60) {
        longest -= 60;
        hours ++
    }
    if(hours.toString().length === 1) {
        hours = "0" + hours
    }
    if(longest.toString().length === 1) {
        return hours + ":0" + longest
    } else {
        return hours + ":" + longest
    }
}
   
// keep this function call here 
MostFreeTime(readline());