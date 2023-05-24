/**
 *          CLASSES
 * Declare class
 * Access Modifiers
 *      Public
 *      Private
 *      Protected
 * Readonly
 * Getter and Setter
 * Inheritance
 * Static properties and methods
 * Abstract Classes
 */

export {}; // solution for "Cannot redeclare block scoped variable"

//======== DECLARE CLASS ========//
class Person {
  cccd: string;
  firstName: string;
  lastName: string;

  constructor(cccd: string, firstName: string, lastName: string) {
    this.cccd = cccd;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let admin = new Person("0001", "Khang", "Nguyen");
console.log(admin); // Person { cccd: '0001', firstName: 'Khang', lastName: 'Nguyen' }
console.log(admin.getFullName()); // Khang Nguyen

//======== ACCESS MODIFIERS ========//
class Employee {
  private id: string;
  name: string; // public name:string
  protected salary: number;

  constructor(id: string, name: string, salary: number) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }
}

let emp_1 = new Employee("0001", "KhangN", 1000);

// Modifile public property
console.log(emp_1.name); // KhangN
emp_1.name = "KhangNguyen";
console.log(emp_1.name); // KhangNguyen

// Modifile private property
// emp_1.id = "9999"
// Property 'id' is private and only accessible within class 'Employee'

class DevEmployee extends Employee {
  private department: string;

  constructor(id: string, name: string, salary: number, department: string) {
    super(id, name, salary);
    // Constructors for derived classes must contain a 'super' call
    this.department = department;
  }
}

let dev_1 = new DevEmployee("0001", "John Witch", 2000, "IT");

// Modifile protected property
// console.log(dev_1.salary);
//Property 'salary' is protected and only accessible within class 'Employee' and its subclasses.

// console.log(dev_1.id);
// Property 'id' is private and only accessible within class 'Employee'.

//======== READONLY ========//
class Person2 {
  readonly email: string;
  name: string;
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

let user1 = new Person2("abc@gmail.com", "Dev_1");
console.log(user1); // Person2 { email: 'abc@gmail.com', name: 'Dev_1' }

// user1.email = 'xyz@gmail.com';
// Cannot assign to 'email' because it is a read-only property.

//======== GETTER and SETTER ========//
class Persỏn {
  name: string;
  private _age: number;
  // To distinguish name between property private "_age" and getter/setter: "age"

  constructor(name: string, _age: number) {
    this.name = name;
    this._age = _age;
  }

  // Getter in TypeScript using keyword: get
  get age() {
    return this._age;
  }

  // Setter in TypeScript using keyword: set
  set age(newage: number) {
    if (newage < 0 || newage > 120) throw Error("Invalid Age");
    this._age = newage;
  }
}

let user2 = new Persỏn("Dev_1", 20);

// Standard access
// user2._age = 23 // Property '_age' is private and only accessible within class 'Persỏn'.

// console.log(user2._age); // Property '_age' is private and only accessible within class 'Persỏn'

console.log(`Age: ${user2.age}`); // Age: 20
user2.age = 23; // Setter: update property '_age'
console.log(`Age: ${user2.age}`); // Age: 23

//======== INHERITANCE  ========//
class Person4 {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  greeting(): string {
    return `Welcome ${this.firstName}`;
  }
}

class Employee4 extends Person4 {
  private jobTitle: string;

  constructor(firstName: string, lastName: string, jobTitle: string) {
    //Constructors for derived classes must contain a 'super' call.
    super(firstName, lastName);
    this.jobTitle = jobTitle;
  }

  // Method overriding
  // Using: super.METHOD_PARENT_NAME() to get method from parent class
  greeting(): string {
    return `${super.greeting()} (from parent class)`;
  }
}

let employee = new Employee4("Khang", "Nguyen", "Web Dev");

// Child class inheritance from parent class
console.log(employee.getFullName()); // Khang Nguyen

// Method overriding: Get method from parent class inside child class
console.log(employee.greeting()); // Welcome Khang from parent class

//======== STATIC PROPERTIES/METHODS ========//
class Circle {
  public test: number = 69;

  // static STATIC_PROPERTY_NAME:DATA_TYPE
  static pi: number = 3.14;

  // static STATIC_METHOD_NAME(PARAM:DATA_TYPE){}
  static calculateArea(radius: number): number {
    return this.pi * radius * radius;
  }
}
console.log(`Static property: Pi= ${Circle.pi}`);
// Static property: Pi= 3.14
console.log(`Static method: Area = ${Circle.calculateArea(12)}`);
// Static method: Area = 452.15999999999997

// Access public properties/menthods must create new object
// console.log(Circle.test);
// Property 'test' does not exist on type 'typeof Circle'
let newCircle = new Circle();
console.log(newCircle.test);

// Access static properties/methods using object
// console.log(newCircle.pi);
// Property 'pi' does not exist on type 'Circle'. Must using: Circle.pi

//======== ABSTRACT CLASS ========//
abstract class Abstract_Employee {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // abstract method
  abstract getSalary(): number;

  // normal method
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class FullTimeEmp extends Abstract_Employee {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }

  // Implement inherited abstract member 'getSalary' from class 'Abstract_Employee'.
  // Must declare abstract methods have into from abstract class.
  getSalary(): number {
    return this.salary;
  }
}

class Contractor extends Abstract_Employee {
  constructor(
    firstName: string,
    lastName: string,
    private rate: number,
    private hours: number
  ) {
    super(firstName, lastName);
  }

  // Must declare abstract methods have into from abstract class.
  getSalary(): number {
    return this.rate * this.hours;
  }
}

// Cannot create an instance of an abstract class.
// let e1 = new abstract_Employee("Khang", "Nguyen");

const dev1 = new FullTimeEmp("Khang", "Nguyen", 1000);
console.log(`Salary - from FullTimeEmp: ${dev1.getSalary()}`);
// Salary - from FullTimeEmp: 1000

const company1 = new Contractor("Web", "Dev", 100, 1);
console.log(`Salary - from Contractor: ${company1.getSalary()}`);
// Salary - from Contractor: 100
