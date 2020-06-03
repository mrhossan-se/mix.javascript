 function reverseString(str){
var reverse = "";
for(i = 0; i<str.length; i++){
   var char = str[i];
   reverse = char + reverse;
  }
  return reverse;
 }

 var statement = "Hello Alien brother, how are you?";
 var forAlien = reverseString(statement);
 console.log(forAlien);