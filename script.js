var numbers = [1,2,3,4,5];


function sum (n){
	var summation = 0;
	
	// do the actual sum
	
	sumation = n.reduce(function (o,n){ return o+n ;});
	return sumation;
}

console.log( sum( numbers ) );
