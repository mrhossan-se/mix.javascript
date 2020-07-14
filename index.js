var numbers = [19, 29, 39, 49, 59, 91, 96, 89, 99, 00];

var sum = 0;
for(var i = 0; i < numbers.length; i++){
  var element = numbers[i];
  sum = sum + element;
}
 console.log("total of the number : ", sum)


 function getArrySum (numbers){
   var sum = 0;
   for(var i = 0; i <numbers.length; i++ ){
     var element = number[i];
     sum = sum+element;
   }
   return sum;
 }
 var number = [18, 29, 79, 49, 79, 91, 96, 79, 99, 10];
 var result = getArrySum(number)
 console.log(" total of the number is : ",result)
 
 var results = getArrySum([33, 44, 55, 66, 77]);
 console.log(results)