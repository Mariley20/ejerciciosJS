function matrix(n){
	var m = crearMatriz(n);
	for(var i = 0; i < n; i++){
			var e = n - i;
		for(var j = 0; j < n; j++){			
			if(e > 0){
				m[i][j] = e;
			}
			e--;
		}
	}
	console.log(m);
}
matrix(6)