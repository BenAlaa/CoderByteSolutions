function DistinctCharacters(str) { 

  let mySet = new Set(str.split(''));
	return mySet.size >= 10 ? true :  false
  }
   
// keep this function call here 
DistinctCharacters(readline());