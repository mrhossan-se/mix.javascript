var numbers = [19, 19, 29, 39, 49, 59, 91, 96, 89, 99, 19, 39, 00];
var uniqueName = [];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  var index = uniqueName.indexOf(element);
  if (index == -1) {
    uniqueName.push(element)
  }
  
}
console.log(uniqueName) 