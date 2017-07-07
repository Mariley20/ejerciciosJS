function e(n){
  var s = "";
  for (var i = 0; i < n; i++) 
    s += " ";
  return s;
}

function l(n){
  var s = "";
  for (var i = 0; i < n; i++) 
    s += "*";
  return s;
}

 
  
function f( n ){
  if (n == 1)
    return "*";
  else
    return f(n / 3) + e(n / 3) + f(n / 3);
}

var T = 4;
var n = 9;

var matrix = [[], [], [], []];

console.log ( l(n) )
console.log ( l(n / 3) + e( n / 3) + l(n / 3) ) ;
console.log ( f(n) ); 
