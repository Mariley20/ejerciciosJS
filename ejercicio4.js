quiz4 (9)
function quiz4 (r) {
  //for (var x = 0; x < r; x++) {  
  //}  
  var x = 0;
  var circulo = [];
  var espacios = [];
  while (x <= r) {   
    var y = Math.sqrt ( r * r - x*x);
    x++;
    var j = 0;
    var str = "";
    while ( j <= y) {
      str += "**";
      j++;
    }
    var e = "";
    for (var i = 0; i <= r - y; i++) {
       e += "  ";
    }
    //console.log (x +  ', '+  y);
    //console.log (str);
    circulo.push(str);
    espacios.push (e);
  }
  for (var i = espacios.length -1; i >=0 ; i--) {
    console.log (espacios[i] + circulo[i] + circulo[i] );
  }
  for (var i = 0; i < circulo.length; i++) {
    console.log (espacios[i] + circulo[i] + circulo[i] );
  }
}

/*function quiz4 (r) {
  //for (var x = 0; x < r; x++) {  
  //}  
  var x = 0;
  var circulo = [];
  var espacios = [];
  while (x <= r) {   
    var y = Math.sqrt ( r * r - x*x);
    x++;
    var j = 0;
    var str = "";
    while ( j <= y) {
      str += "**";
      j++;
    }
    var e = "";
    for (var i = 0; i <= r - y; i++) {
       e += "  ";
    }
    //console.log (x +  ', '+  y);
    //console.log (str);
    circulo.push(str);
    espacios.push (e);
  }
  for (var i = espacios.length -1; i >=0 ; i--) {
    console.log (espacios[i] + '*');
  }
  */
  /*for (var i = circulo.length -1; i >=0 ; i--) {
    console.log (circulo[i]);
  }
  for (var i = 0; i < circulo.length; i++) {
    console.log (circulo[i]);
  }
}
//
function quiz4 (r) {
  //for (var x = 0; x < r; x++) {  
  //}
  
  var x = 0;
  while (x <= r) {   
    var y = Math.sqrt ( r * r - x*x);
    x++;
    var j = 0;
    var str = "";
    while ( j <= y) {
      str += "**";
      j++;
    } 
    //console.log (x +  ', '+  y);
    console.log (str);
  }
}*/

/*function quiz4 (r) {
  //for (var x = 0; x < r; x++) {  
  //}  
  var x = 0;
  var circulo = [];
  while (x <= r) {   
    var y = Math.sqrt ( r * r - x*x);
    x += 0.2;
    var j = 0;
    var str = "";
    while ( j <= y) {
      str += "**";
      j += 0.2;
    } 
    //console.log (x +  ', '+  y);
    //console.log (str);
    circulo.push(str);
  }
  for (var i = circulo.length -1; i >=0 ; i--) {
    console.log (circulo[i]);
  }
  for (var i = 0; i < circulo.length; i++) {
    console.log (circulo[i]);
  }
  var ass = circulo.reverse();
  console.log(ass);
}*/