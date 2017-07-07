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
			var e = 1;
		for(var j = 1; j < n-1; j++){	

				m[i][j] = e;
				e++;
			}
	}
	console.log(m);
}
matrix(5)