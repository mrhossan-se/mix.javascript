
function reversString(str) {
  var reverse = "";
for (let i = 0; i < str.length; i++) {
  const char = str[i];
  reverse = char + reverse;
}
 return reverse;
}

var statement = "Hello Alien brother how are you";
var  Alien = reversString(statement)
console.log(Alien)