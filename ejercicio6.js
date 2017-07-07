function linea(n){
	var linea1 = "";
	var linea2 = "";
	var divisiones = n / 3;
	for(var i = 0; i < n; i++){
		linea1 += "*";
		if(i >= divisiones && i < (n - divisiones)){
				linea2 += " ";
			}else{
				linea2 += "*";
			}
	}
	console.log(linea1);
	console.log(linea2);
}
linea(15);