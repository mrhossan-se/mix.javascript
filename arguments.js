const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const takeOfSide = num.slice(2, 5);
const removeAndPut = num.splice(2, 2, 50, 60, 70)
const together = num.join(" hello ")

console.log(takeOfSide)
console.log(num)
console.log(removeAndPut)
console.log(together)