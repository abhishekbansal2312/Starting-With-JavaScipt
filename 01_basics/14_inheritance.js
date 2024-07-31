class PersonClass {
  constructor(first, last, dob) { //
    this.first = first; 
    this.last = last; 
    this.dob = new Date(dob); 
  }
  age() {
    let age = this.dob.getFullYear();
    return age;
  }
}

const person1 = new PersonClass("John", "Doe", "1980-04-03");
console.log(person1); 
console.log(`Age: ${person1.age()}`); 

//inheritance
class Teacher extends PersonClass {  // 
  constructor(first,last, dob, job) {
    super(first,last, dob);
    this.job = job;
  }
  getjob() {
    return this.job;
  }
}
const teacher1 = new Teacher("abhishek", "bansal","2023-12-23", "explorin");
console.log(teacher1);
