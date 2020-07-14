var marks = [19, 29, 39, 49, 59, 69, 79, 89, 99, 00];
var max = marks[0];
for (let i = 0; i < marks.length; i++) {
  var element = marks[i];
  if (element > max) {
    max = element;
  }
}
console.log("hightest value is ", max)