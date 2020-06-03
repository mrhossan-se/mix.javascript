  //remove extra number
var name = [2, 3, 4, 2, 55, 66, 4, 4, 5, 7, 7,];
var uniqName = [];

for(i = 0; i<name.length; i++){
   var element = name[i];
   var index = uniqName.indexOf(element);
   if(index == -1){
      uniqName.push(element)
   }
}
console.log(uniqName)