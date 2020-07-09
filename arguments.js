 function add(num1, num2) {
    return num1 + num2 ;
 }
const result = add(2, 5, 10)
console.log(result)

 function add(num1, num2) {
    return num1 + num2, arguments[2];
 }
const result = add(2, 5, 10)
console.log(result);


 function add(num1, num2){
    console.log([...arguments])
    return num1 + num2 + arguments[2];
    
    }
    const result = add(2, 3, 5, 7);
console.log(result); function add(num1, num2){
   function multiply(multiplier, ...theArgs) {
      return theArgs.map(element => {
        return multiplier + element
      })
    }
    
    let arr = multiply(2, 1, 2, 3)
    console.log(arr)   