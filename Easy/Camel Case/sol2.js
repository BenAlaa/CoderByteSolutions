function CamelCase(str) {
	let strArr = str.split(/[^a-zA-Z]/);
	strArr = strArr.map((val, ind) => {
		val = val.toLowerCase();
		if (ind) {
			valArr = val.split('');
			valArr[0] = valArr[0].toUpperCase();
			return valArr.join('');
		}
		return val;
	})

	return strArr.join('');
}
 
// keep this function call here 
CamelCase(readline());