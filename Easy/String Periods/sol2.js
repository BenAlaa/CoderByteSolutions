function StringPeriods(str) { 
	// we will use only lengths of substrings that divide evenly into str
	const len = str.length;
	const pivot = Math.max(Math.trunc(Math.sqrt(len)), len);
	for (let i = 2; i <= pivot; i++) {
		if (len % i === 0) {
			const block = str.slice(0, len / i);
			if (block.repeat(i) === str) {
				return block;
			}
		}
	}
	return -1;
}
   
// keep this function call here 
StringPeriods(readline());