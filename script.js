function stringChop(str, size) {
	let arr = [];
	let res = "";
	
	for( let i = 0 ; i < str.length ; i ++ ) {

		res += str[i];

		if(!str) {
			return [];
		}

		if( res.length === Number(size) ) {
			arr.push(res);
			res = "";
		}
		
	}
	
	if( res !== "" ) {
		arr.push(res);
	}
	
	
	return arr;
}


// // Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
