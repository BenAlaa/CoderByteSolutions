function checkEven(num){
	if( num === 0 ){
		return true;
	}else if( num % 2 === 0 ){
		return true;
	}else{
		return false;
	}
}

function SimpleEvens(num){
	var str = num.toString().split("");
	var str1 = str.filter(checkEven);

	return str.length === str1.length? true: false;
}


   
// keep this function call here 
SimpleEvens(readline());