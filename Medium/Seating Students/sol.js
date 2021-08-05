function SeatingStudents(arr) { 

  // code goes here  
  
  if(arr.length <1) return -1;
  
  //Number of valid pairs
  var count=0;
  
  //Number of students; first number in the array
  var n=arr[0];
  
  //Now remove the first number from the array so we only have
  arr.splice(0,1);
  
  //For each seat
  for(var i=1; i<n; i++){
      
      //Skip seats that are already assigned
      if(arr.includes(i)) continue;
      
      //If i is even (it's on the right side)
      if(0 === i%2){
          
          //Check the seat below; if it's free, that's a valid pair
          if( (i+2)<=n && !arr.includes(i+2)) count++;
      
          //Otherwise, it's odd and on the left side
      } else {
          
          //Check the seat to the right; if it's free, that's a valid pair
          if( (i+1)<=n && !arr.includes(i+1)) count++;
          
          //Check the seat below; if it's free, that's a valid pair
          if( (i+2)<=n && !arr.includes(i+2)) count++;

      }
  }
  
  //Return the number of results found
  return count; 
       
}
 
// keep this function call here 
SeatingStudents(readline());






































function SeatingStudents(arr) {
             
  var sillaImp = [];
  var sillaPar = [];
  var primerElemento = arr.shift();
  var noDisp = arr;
  for (let i = 1; i < primerElemento + 1; i++) {
    if ((i + 1) % 2 === 0) {
      sillaImp.push(i);
    } else {
      sillaPar.push(i);
    }
  }
  var totalA = buscarPosiblesAsientos(sillaPar, sillaImp, noDisp);
  return totalA;
}

function buscarPosiblesAsientos(par, impar, noDisp) {
    
  for (let i = 0; i < noDisp.length; i++) {
    for (let j = 0; j < par.length; j++) {
      if (noDisp[i] == par[j]) {
        par[j] = 0;
      }
    }
    for (let primerElemento = 0; primerElemento < impar.length; primerElemento++) {
      if (noDisp[i] == impar[primerElemento]) {
        impar[primerElemento] = 0;
      }
    }
  }
  var Aposibles = contar(par, impar);
  
  return Aposibles;
}

function contar(sillaPar, sillaImpar) {
  var cont = 0;
  for (let i = 0; i < sillaPar.length; i++) {
    if (sillaPar[i] !== 0 && sillaImpar[i] !== 0) {
      cont = cont + 1;
    }
    if (sillaPar[i + 1] == sillaPar[i] + 2) {
      cont = cont + 1;
    }
    if (sillaImpar[i + 1] == sillaImpar[i] + 2) {
      cont = cont + 1;
    }
  }
  
  return cont;
}
// primerElementoeep this function call here 
SeatingStudents(readline());








































function SeatingStudents(arr) {
  let K = arr[0];
  let graph = [] ; 

  for (let i = 0; i < K; i++) {
      let tmp = [] ;
      for(let i = 0 ; i < K ; i ++ )
          tmp.push(0) ;
      graph.push(tmp);
  }
  for(let i = 0 ; i < K ; i ++ ){
      if((i%2) === 0) { 
          if(i-2 >= 0)
              graph[i][i-2] = 1 ;
          if(i+2 < K)
              graph[i][i+2] = 1 ; 
          graph[i][i+1] = 1 ;
      }
      else {
          if(i-2 >= 0)
              graph[i][i-2] = 1 ;
          if(i+2 < K)
              graph[i][i+2] = 1 ; 
          graph[i][i-1] = 1 ;
      }    
  }
  for(let i = 1 ; i < arr.length ; i ++ )
      for(let j = 0 ; j < K ; j ++ ){
          graph[arr[i]-1][j] = 0 ; 
          graph[j][arr[i]-1] = 0 ;
      }
  let res =0  ;
  for(let i = 0 ; i < K ; i ++ ){
      for(let j = 0 ; j < K ; j ++ ){
          res += graph[i][j] ;
      }
  }
  return res/2; 
}
// keep this function call here 
SeatingStudents(readline());

































function SeatingStudents(arr) { 

  // code goes here  
  const K = arr.shift();
  let counter = 0;
  for (let i = 1; i < K; i++) {
      if (arr.indexOf(i) === -1) {
          if (i +2 <= K) {
              let n = arr.indexOf(i +2);
              if (n === -1) {
                  counter++;
              }
          }
          if (i % 2 === 1 && (i+1) <= K) {
              n = arr.indexOf(i +1);
              if (n === -1) {
                  counter++;
              }
          }
      }
  }
  return counter;
}
 
// keep this function call here 
SeatingStudents(readline());




























function SeatingStudents(arr) { 

  var k = arr[0]; //number of desks
  var o = arr.slice(1); // occupiedDesks
  var count = 0;
  
  for(var i = 1; i <= k; i++){
      if(!o.includes(i)){
          if(!o.includes(i-2) && i > 2) count += 1
          
          if(!o.includes(i+2) && i < (k-1) ) count += 1
          
          if( !( (i % 2) || o.includes(i-1) ) || ( (i % 2) && !o.includes(i+1) ) ){
            count += 1;
          }
      }
  }
  
  return count/2;

}
   
// keep this function call here 
SeatingStudents(readline());