var n = 10;

var a = []; // a[]
//var z = n;
for(var i = 0; i<n; i++){

	a[i] = [];  // a[][]

	var k=0;

	for(var j = i+1 ; j<=n; j++){

		a[i][k] = j;

		k++;
	}

	if(k!=n){
		var z = n;
		for(var l = 0; l < i; l++){
			z--;
			a[i][k] = z;
			k++;
		}
	}
}

//console.log(final);
console.log(a);
//console.log(crearMatriz(5));
function crearMatriz(n){
	var a = [];
	for(var i = 0; i < n; i++){
	a[i] = [];  // a[][]
		for(var j = 0 ; j < n; j++){
			a[i][j] = 0;
		}
	}
	return a;
}

function matrix(n){
	var m = crearMatriz(n);
	for(var i = 0; i < n; i++){
		for(var j = 0; j < n; j++){
			m[i][j] = j+1;
		}
	}
}
