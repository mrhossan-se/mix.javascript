class Person {
    constructor(fName, lName, salary){
        this.fName = fName;
        this.lName = lName;
        this.salary = salary;
    }
}

const heroPerson = new Person("Hero", "Balam", 50000);
console.log(heroPerson);

class Woman {
    constructor(firstName, lastName, salary){
      this.firstName = firstName;
      this.lastName = lastName;
      this.salary = salary;
    }
}

const leady = new Woman("Miss", "Beauty", 50000);
console.log(leady);