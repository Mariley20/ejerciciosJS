function pintarLinea(n){
	var s = "";
	for(var i = 0 ; i < n; i++){
		s += "*";
	}
	return s;
}
function lineas(t, n){
	for(var i = 0; i <= t; i++){
		console.log(pintarLinea(n));
		n = n/3;
	}
}
lineas(4, 81);