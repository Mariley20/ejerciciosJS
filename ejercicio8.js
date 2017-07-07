function serieFibonacci(n){
	var s ="";
	for(var i = 0; i < n; i++){
		var fibonacci = fibonac(i)
		s += fibonacci +", ";
	}
	console.log(s)
}


function fibonac(n){
	if(n == 0){
		return 0;
	}else if(n == 1){
		return 1;
	}else{
		return fibonac(n-1) + fibonac(n-2);
	}
}

serieFibonacci(8);
