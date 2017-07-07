var n = 5;

for(var i = 0; i < n; i++){
  var numeros = "";
  for(var j = 1 ; j <= n-i; j++){
    numeros += j; 
  }
  console.log(numeros)
}