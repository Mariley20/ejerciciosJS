function f(n) {
	// body...
	if (n == 1){
		return "*";
	}else{
		return f(n/3)+espacios(n/3)+f(n/3);
	}
}
function espacios(n) {
  var s = "";
  for (var i = 0; i < n; i++) s += " ";
  return s;
}

console.log(f(81));