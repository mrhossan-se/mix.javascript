//class 

class Student{
   constructor(sId, sName, sAge){
                 this.id = sId;
                 this.name= sName;
                 this.age = sAge;
                 this.school = 'global school and collage'
            }
}

const student1 = new Student(1, 'shimul', 25);
const student2 = new Student(2, 'hassan', 26)
const student3 = new Student(3, 'dhani', 35);

console.log(student1, student2, student3)
class Parent {
   constructor(){
      this.fatherName = "Shousenaggers";
   }
}
class Child extends Parent{
   constructor(name){
      super()
      this.name=name;
   }

getFullName(){
   return this.name + " " + this.fatherName;
}
}
const baby = new Child("Arnold");
const baby2 = new Child('tom');
console.log(baby2.getFullName());
console.log(baby.getFullName())


//truthy value
//' ', '0', [], {}, "false" 1,

//falsy value
// false, 0, "", undefined, null, NaN, 

  var name = 1;
if (name) {
   console.log("condition is true")
}
else{
  console.log("condition is false")
}












