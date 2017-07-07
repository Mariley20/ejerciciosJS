 var A = [
          [1,1,1],
          [2,2,2]
        ];

var B = [ 
        [2,2,2],
        [3,3,3]
      ];

var C = [ [0,0,0], [0,0,0]];
for (var i=0;  i < A.length; i++) {
  for (var j=0; j < A[i].length; j++) {
      C [i][j] = A[i][j] + B[i][j]; 
  }
}

A = [ [1,1,1,1],
    [2,2,2,2],
    [3,3,3,3],
    [4,4,4,4]] ;

console.log ("hola");
var n = A.length;
var m = A[0].length;

for (var i=0;  i < A.length; i++) {
  var tmp = [];
  for (var j = 0; j < A[i].length; j++)
    tmp.push ( A[j][i] );  
  console.log (tmp);  
}
