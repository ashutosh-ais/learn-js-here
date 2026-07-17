/*
class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be in negative");
    }
    this.name = name;
    this.#salary = salary;
  }

  // Getter method
  get salary() {
    return this.#salary;
  }

  // Setter method
  set salary(value) {
    if (value < 0) {
      console.error("Invalid salary");
    } else {
      this.#salary = value;
    }
  }
}

let emp = new Employee("Alice", -500000);
emp.salary = -20; // Setting value using salary
console.log(emp.salary); // Getting value using salary [Same name is used for accessing and setting salary]
*/

/*
// [Better way]
Usually private field name remain different as getter and setter 

*/
class Employee {
  // Private variable
  #empSalary;

  constructor(name, salary) {
    this.name = name;
    if (salary < 0) {
      throw new Error("Salary cannot be negative");
    } else {
      this.#empSalary = salary;
    }
  }

  set salary(value) {
    if (value < 0) {
      console.log("Invalid salary");
    } else {
      this.#empSalary = value;
    }
  }

  get salary() {
    return this.#empSalary;
  }
}

let emp1 = new Employee("Ashutosh", 90);
let emp2 = new Employee("Jhon", 20);

emp1.salary = 800000;
console.log(emp1.salary);
console.log(emp2.salary);
// The user of the class has no idea that internally the value is stored in #employeeSalary.
