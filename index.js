 var a = 5;
 var b = 10;

 console.log("before swap a = ", a , "b = ", b)


 var c = 5;
 var a = b;
 var b= c;
 console.log("after swap a =", a , "b = ", b)

 var x = 5;
 var y = 10;

 x = x+y;
 y = x-y;
 x = x -y;

 console.log(" x =", x , " y " , y)

 var p = 5;
 var q = 10;
[p, q] = [q, p]
console.log("after swap p = ", p , "q =", q)