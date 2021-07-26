function ClosestEnemy(arr) { 
  var enemies = []
  for(var i = 0; i < arr.length; i++){
      if(arr[i] === 1){
          var pos = i
      }
      else if(arr[i] === 2){
          enemies.push(i) 
      }
  }
  if(enemies.length === 0){
      return 0
  }
  var distance = []
  for(var j = 0; j < enemies.length; j++){
      distance.push(Math.abs(pos - enemies[j])) 
  }
return Math.min(...distance) 
      
}
 
// keep this function call here 
ClosestEnemy(readline());