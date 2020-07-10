 const person = {
     fName: "hero",
     lName: "man",
     salary: 15000,
      getFullName: function(){
          console.log(this.fName, this.lName);
      },
      chargeBill: function(amount){
          console.log(this)
       this.salary = this.salary - amount;
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
person.chargeBill();
const heroChargeBil = person.chargeBill.bind(heroPerson);
heroChargeBil(2000);

console.log(heroPerson.salary)

const friendlyChargeBill = person.chargeBill.bind(friendlyPerson);
friendlyChargeBill(2000);
console.log(friendlyPerson.salary)