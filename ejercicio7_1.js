function espacios(n) {
  var s = "";
  for (var i = 0; i < n; i++) 
    s += " ";
  return s;
}

function pintarLinea (n) {
  var s = "";
  for (var i = 0; i < n; i++) 
    s += "*";
  return s;
}
 
function lineas (T, n) {
 
  var i = 0;
  while (i <= T) {
    var s1 = pintarLinea(n);
    var e = espacios(n);
    var s2 = pintarLinea(n);
    console.log (s1 + e + s2);
    n = n / 3;
    i = i + 1;
  }

}