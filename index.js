 const person = {
     fName: "hero",
     lName: "man",
     salary: 15000,
      getFullName: function(){
          console.log(this.fName, this.lName);
      },
      chargeBill: function(amount, tex, tips){
         //console.log(this)
       this.salary = this.salary - amount - tex - tips;
       return this.salary;
      }
 }
const heroPerson = {
    firstName: "hero",
    lastName: "fighter",
    salary: 50000
}
const friendlyPerson = {
    firstName: "hero",
    lastName: "king",
    salary: 70000
}
// person.chargeBill();
// const heroChargeBil = person.chargeBill.bind(heroPerson);
// heroChargeBil(2000);

// console.log(heroPerson.salary)

 const friendlyChargeBill = person.chargeBill.bind(friendlyPerson);
friendlyChargeBill(2000);
 console.log(friendlyPerson.salary)
 person.chargeBill.call(heroPerson, 900, 100, 10)
 person.chargeBill.call(heroPerson, 3000)
person.chargeBill.call(friendlyPerson, 1000, 200, 50)
person.chargeBill.apply(friendlyPerson, [1000, 200, 50])
person.chargeBill.apply(heroPerson, [100, 200, 300])
console.log(heroPerson.salary)
console.log(friendlyPerson.salary)
console.log(heroPerson.salary)