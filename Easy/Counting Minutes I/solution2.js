function CountingMinutesI(str) { 

  var split = str.split('-')

  function toMinutes(time) {

    var hour = parseInt(time.split(':')[0])
    var minutes = parseInt(time.slice(0, time.length - 2).split(':')[1])
    var totalMin = hour*60 + minutes
    
    if (time[time.length - 2] === 'p')
      if (hour !== 12)
        return totalMin + 720
      else
        return totalMin
    else
      if (hour === 12)
        return totalMin + 720
      else
        return totalMin
  }
  
  var time1 = toMinutes(split[0])
  var time2 = toMinutes(split[1])
  
  if ( time1 > time2 )
    return (1440 - time1) + time2
  else
    return time2 - time1
}

   
// keep this function call here 
CountingMinutesI(readline());