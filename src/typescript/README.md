# TypeScript Notebooks

- [TypeScript Notebooks](#typescript-notebooks)
  - [01. DATA TYPES](#01-data-types)
    - [1. Primitives](#1-primitives)
    - [2. References](#2-references)
    - [3. Tuple](#3-tuple)
    - [4. Enum](#4-enum)
    - [5. Any](#5-any)
    - [6. Void](#6-void)
    - [7. Never](#7-never)
    - [8. Union type](#8-union-type)
    - [9. Aliases type](#9-aliases-type)
  - [02. STATEMENT](#02-statement)
    - [1. Condition](#1-condition)
      - [If..else](#ifelse)
      - [Switch](#switch)
    - [2. Loop](#2-loop)
      - [For](#for)
      - [While](#while)
      - [Do... While](#do-while)
  - [03. FUNCTION TYPE](#03-function-type)
    - [1. Function types](#1-function-types)
    - [2. Parameters](#2-parameters)
      - [Optional parameter](#optional-parameter)
      - [Default paramter](#default-paramter)
      - [Rest parameter](#rest-parameter)
    - [3. Functional Overloading](#3-functional-overloading)
  - [04. CLASS](#04-class)
    - [1. Class](#1-class)
    - [2. Access Modifiers](#2-access-modifiers)
    - [3. Readonly](#3-readonly)
    - [4. Getters and Setter](#4-getters-and-setter)
    - [5. Inheritance](#5-inheritance)
    - [6. Static methods and Properties](#6-static-methods-and-properties)
    - [7. Abstract Classes](#7-abstract-classes)
  - [05. INTERFACE](#05-interface)
  - [QUESTIONS](#questions)
    - [Character special](#character-special)
    - [So sánh `public`, `private` và `protected`](#so-sánh-public-private-và-protected)
    - [The type names `String`, `Number`, `Boolean` are legal, but refer to some special built-in types](#the-type-names-string-number-boolean-are-legal-but-refer-to-some-special-built-in-types)
    - [Interfaces and Types](#interfaces-and-types)

<details>
<summary><strong>Reference</strong></summary>

- Docs:
  - [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- More:
  - [Ts-node](https://typestrong.org/ts-node/)

</details>

- **Install and run coode**:
  - Install: "Open Integrated Terminal" from `package.json` and run `npm i`.
  - Run code: `npm run ts <FILE_NAME>.ts`

---

## 01. DATA TYPES

- Syntax: `VAR_NAME : DATA_TYPE`

### 1. Primitives

| Type        | Ex                   | `DATA_TYPE` |
| ----------- | -------------------- | ----------- |
| **Number**  | `10, 9.6, 999999999` | `number`    |
| **String**  | `"abc", "iđ21331"`   | `string`    |
| **Boolean** | `true, false`        | `boolean`   |

- Example:

    ``` ts
    let devName: string;
    let isLogin: boolean;
    let age: number;

    devName = "khangnguyen"; //ok
    isLogin= true; //ok
    age=22; //ok

    // age="22" // Type 'string' is not assignable to type 'number'.ts(2322)
    ```

### 2. References

| Type       | `DATA_TYPE`                         |
| ---------- | ----------------------------------- |
| **Object** | `object` or `{}` or `Object`        |
| **Array**  | `Array<DATA_TYPE>` or `DATA_TYPE[]` |

- Example:
  - Object:

    ``` ts
    // Object: style 1
    let user: {
        name: string;
        salary: number;
    };

    user = {
        name: "Khang",
        salary: 1000,
    };

    // Object: style 2
    let personal: {
        id: string;
        password: string;
    } = {
        id: "KhangN1",
        password: "12345",
    };
    ```

  - Array:

    ``` ts
    // Solution 1: Array<DATA_TYPE>
    let lstId: Array<string>;
    lstId = ["ID001", "ID003"];

    // Solution 2: DATA_TYPE[]
    let lstName: string[];
    lstName = ["Khang", "Hieu"];
    ```

<!-- TODO: khác nhau Object, object, {} -->
<!-- https://stackoverflow.com/questions/49464634/difference-between-object-and-object-in-typescript -->

### 3. Tuple

- Quan tâm đến `DATA_TYPE`/`Size`/`Order` (Kiểu dữ liệu/ Số lượng element/ Thứ tự)
- Example:

    ``` ts
    let topEmployee: [string, number];
    topEmployee = ["Khang", 1000]; // ok
    // topEmployee = [123, 1000]; // Type 'number' is not assignable to type 'string'.

    // Optional tuple element: DATA_TYPE?
    let address:[string, number, boolean?]
    address = ['Saigon', 70000, true]   //ok
    address = ['Saigon', 70000]         //ok
    // address = ['Saigon', 70000, "true"] // Type 'string' is not assignable to type 'boolean | undefined'.

    // let user: [string, string?, boolean] // A required element cannot follow an optional element.
    ```

### 4. Enum

- Enum ():
  - Tập hợp các giá trị cùng nhóm
  - Dễ: sử dụng, truy xuất (gợi ý code)
  - Mặc định giá trị của từng phần tử trong enum là `number` (index)
- Syntax: `enum VAR_NAME {}`

### 5. Any

- Bỏ qua việc kiểm tra type (`any`: bất kỳ thứ gì)
- Syntax: `VAR_NAME: any`
- Example:

    ``` ts
    let anyType: any;

    anyType = "any type"
    anyType = 1221
    anyType = true
    anyType = [1,2, "abc"]
    ```

### 6. Void

- Void (`DATA_TYPE` là `void`) dùng đối với hàm không muốn trả về giá trị; không cần keyword: `return`.
- **Note**: Nếu hàm có type là `void` và được gán cho biến thì giá trị của biến là `undefined`.
- Example:

    ``` ts
    // sum() return number
    const sum = (fNum: number, sNum: number): number => {
      return fNum + sNum;
    };

    // printLog() unrequired return
    const printLog = (mess: string): void => {
      console.log(mess);
    };
    ```

### 7. Never

- Never (`DATA_TYPE` là `never`): không bao giờ trả về giá trị; thường sử dùng cho hàm (tương tự như `void` nhưng biến được gán cho hàm sẽ không có giá trị)

### 8. Union type

- Dùng ký tự `|` (union: "hợp nhất" ~ join) để định nghĩa `VAR_NAME` có nhiều `DATA_TYPE`
- **Syntax**: `VAR_NAME: DATA_TYPE_1 | DATA_TYPE_2`
- Example:
  
  ``` ts
  const addTwoObj = (objA: number | string, objB: number | string) => {
    if (typeof objA === "number" && typeof objB === "number")
      return objA + objB;
    if (typeof objA === "string" && typeof objB === "string")
      return objA.concat(" ", objB);

    throw new Error("Parameter must be numbers or strings");
  };

  console.log(addTwoObj(10, 12));
  console.log(addTwoObj("Hello", "World"));
  ```

### 9. Aliases type

- Syntax: `type TYPE_NAME_CUSTOM = DATA_TYPE`
- Dùng keyword `type` và định danh bằng `TYPE_NAME_CUSTOM` cho các `DATA_TYPE`
- Example:
  
  ``` ts
  type customType = number | string;
  let input: customType;

  input=1202;           // correct
  input="TypeScript";   // correct

  input=true // Type 'boolean' is not assignable to type 'customType'
  ```

---

## 02. STATEMENT

Cấu trúc tương tự trong JavaScript nên chỉ đưa ra ví dụ.

### 1. Condition

#### If..else

- Example:

  ``` ts
  // if...else
  let num= 10;
  if(num%2==0) console.log("even");
  else console.log("odd");

  // if...else if...else
  let num = 10;
  if (num === 0) console.log("Number 0");
  else if (num % 2) console.log("even");
  else console.log("odd");
  ```

#### Switch

- **Note**:
  - `switch` và `case` đều có thể chứa biểu thức- không chỉ là biến hay hằng.
- Example:
  - Example 1

    ``` ts
    // Ex: 1
    let browerName: string = "Chrome";
    switch (browerName) {
      case "Chrome":
      case "Safari":
      case "Firefox":
        console.log("Supported");
        break;
      case "IE":
        console.log("Not support!");
        break;
      default:
        console.log("Unknown browser!");
        break;
    }
    ```

  - Example 2

    ``` ts
    // Ex: 2
      let salary = 1000;
      let expense = 200;
      let target = 1500;
      switch (salary - expense) {
        case target - 100:
          console.log("Comming soon");
          break;
        case target - 500:
          console.log("Not far");
          break;
        default:
          console.log("A long time");
          break;
      }
    ```

### 2. Loop

- `break`: thoát/ kết thúc vòng lặp (code sau `break` không thực thi)
- `continute`: dùng trong loop, 'bỏ qua' lần chạy đó, không thoát loop như `break`

#### For

- Example:
  - Example 1

    ``` ts
    let lstUser = ["User A", "User B", "User C", "User D", "User E"];
      let countUser = 0;

      for (let idxItem = 0; idxItem < lstUser.length; idxItem++) {
        console.log(lstUser[idxItem]);
        countUser++;
      }
      console.log(`Count: ${countUser}`);
    ```

  - Example 2

    ``` ts
    let i = 0;
    for (;;) {
      console.log(`Item: ${i + 1}`);
      i++;
      if (i > 9) break;
    }
    ```

#### While

#### Do... While

---

## 03. FUNCTION TYPE

### 1. Function types

- Function types gồm 2 phần:
  - `PARAM_DATA_TYPE`: data type của tham số (parameter) truyền vào.
  - `FUNC_DATA_TYPE`: data type/kiểu giá trị trả về của hàm. Đôi khi không cần định nghĩa `FUNC_DATA_TYPE` vì TypeScript có thể đoán type của hàm qua `return`.
- **Syntax**:

  ``` ts
  // Normal function
  function FUNC_NAME(PARAM: PARAM_DATA_TYPE): FUNC_DATA_TYPE{
    // block-code
    // return...
  }

  // Arrow function
  const FUNC_NAME = (PARAM:PARAM_DATA_TYPE): FUNC_DATA_TYPE =>{
    // block-code
    // return...
  }
  ```

- Example:
  
  ``` ts
  // Normal function
  function sum(fNum: number, sNum: number): number {
    return fNum + sNum;
  }

  // Arrow function
  const sum_v2 = (fNum: number, sNum: number):number=>{
    return fNum + sNum;
  }
  ```

### 2. Parameters

#### Optional parameter

- **Syntax**: `PARAM ?: PARAM_DATA_TYPE`
  - Optional Parameter (`?`) dùng khi truyền parameter có thể có vào trong hàm. Khi đó, type của parameter là `PARAM_DATA_TYPE` hoặc mang giá trị `undefined` (không truyền vào).
- Example:

  ``` ts
  const getWelcome = (fName: string, lName?: string): string => {
    return lName ? `Welcome ${fName} ${lName}` : `Welcome ${fName}`;
  };

  console.log(getWelcome("Khang")); // Welcome Khang
  console.log(getWelcome("Khang", "Nguyen")); // Welcome Khang Nguyen
  ```

#### Default paramter

- **Syntax**: `PARAM = DEFAULT_VALUE`
  - Default parameter tương tự như Optional parameter nhưng parameter đó sẽ có giá trị mặc định.
- Example:

  ``` ts
  const AddorMulti = (fNum: number, sNum: number, calculus = "+") => {
    return calculus === "+" ? fNum + sNum : fNum * sNum;
  };

  console.log(AddorMulti(2, 10));       // 12
  console.log(AddorMulti(2, 10, "*"));  // 20
  ```

#### Rest parameter

- Toán tử rest (`...`) sao chép toàn bộ phần tử với kiểu dữ liệu array.
- **Syntax**: `...REST_PARAM: PARAM_DATA_TYPE`
- **Note**: Đối với Rest paramete:
  - Phải có `PARAM_DATA_TYPE` là `array`
  - Phải nằm ờ cuối cùng khi có nhiều parameter.
  - Chỉ dùng 1 toán tử rest trong 1 function.
- Example:
  
  ``` ts
  // Ex: 1
  const getTotal = (...numbers: number[]) => {
    let total = 0;
    numbers.forEach((num) => {
      total += num;
    });
    return total;
  };
  console.log(getTotal(1, 2, 3, 4));  // 10

  // Ex: 2
  const multi = (multiNum: number, ...numbers: number[]) => {
    return numbers.map((num) => multiNum * num);
  };
  console.log(multi(10, 1, 2, 3, 4)); // [ 10, 20, 30, 40 ]

  // Ex: 3
  // A rest parameter must be of an array type.
  // const Greeting = (...listUser:string{})=>{}

  // A function definition can only have one rest parameter
  // function sum(...rest1:number[], ...rest2:number[]){}
  ```

### 3. Functional Overloading

- Overloading: định nghĩa các hàm có tên giống nhau. Những tham số khác nhau nhưng hành động thực thi giống nhau và cần 1 hàm duy nhất để gộp kết quả (`return`)
- Example:

  ``` ts
  function addNumOrString(param_1: number, param_2: number): number;
  function addNumOrString(param_1: string, param_2: string): string;
  function addNumOrString(param_1: any, param_2: any): any {
    return param_1 + param_2;
  }

  console.log(addNumOrString(12, 21));    // 33
  console.log(addNumOrString("Khang ", "Nguyen"));  // Khang Nguyen
  ```

---

## 04. CLASS

### 1. Class

- Có thể truy cập property/method bên trong class.
- **Syntax**:
  - Khởi tạo class theo ES6 dùng keyword `class`
  - Tạo object mới từ class: `new CLASS_NAME(ARG)`

  ``` ts
  class CLASS_NAME {
    PROP_NAME: PROP_DATA_TYPE;

    constructor(PROP_NAME: PROP_DATA_TYPE){
      this.PROP_NAME = PROP_NAME;
    }

    METHOD_NAME(PARAM: PARAM_DATA_TYPE): METHOD_DATA_TYPE{
      // block-code
      // return...
    }
  }
  ```

- Example:
  
  ``` ts
  // Declare a class
  class Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  // Create a new object from class
  let admin = new Person("Khang", "Nguyen");

  console.log(admin);
  // Person { firstName: 'Khang', lastName: 'Nguyen' }
  console.log(admin.getFullName()); // Khang Nguyen
  ```

### 2. Access Modifiers

- Cung cấp quyền truy cập và sử dụng biến/hàm trong class:
  - `public` (default)
    - Tất cả variables/functions bên trong class đều có thể truy - cập từ bên ngoài.
    - Không cần dùng keyword `public` trong TypeScript.
    - Có thể sửa đổi giá trị.
  - `private`
    - Chỉ truy cập khi ở bên trong class đó.
    - Phải dùng getter và setter để truy cập/sửa đổi.
  - `protected`
    - Giống `private` nhưng class con (kế thừa) sẽ không thể truy cập

- Example:

  ``` ts
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
  ```

### 3. Readonly

- TypeScript cung cấp keyword `readonly` để chỉ ra 1 immutable (không thể update/delete)
- **Note**:
  | `readonly`                        | `const`               |
  | --------------------------------- | --------------------- |
  | Chỉ dùng cho thuộc tính của class | Sử dụng cho variables |

- Example:
  
  ``` ts
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
  ```

### 4. Getters and Setter

- Trong TypeScript cung cấp keyword: `get` (getter) và `set` (setter) dùng trong class để truy cập/sử dụng property `private` hoặc `protected`.
- **Syntax**:
  
  ``` ts
  class CLASS_NAME(){
    // private GET_SET_VAR: VAR_DATA_TYPE;
    // OR protected GET_SET_VAR: VAR_DATA_TYPE;

    constructor(GET_SET_VAR: VAR_DATA_TYPE){
      this.GET_SET_VAR = GET_SET_VAR;
    }
    
    // Declare a Getter
    get GET_SET_PROP(): METHOD_DATA_TYPE{
      return this.GET_SET_VAR;
    }

    // Declare a Setter
    set GET_SET_PROP(PARAM: PARAM_DATA_TYPE): METHOD_DATA_TYPE{
      this.GET_SET_VAR = PARAM;
    }
  }

  // Ex: let VAR_NAME = new CLASS_NAME(ARG);
  // Get value using Getter
  VAR_NAME.GET_SET_PROP

  // Update value using Setter
  VAR_NAME.GET_SET_PROP = NEW_VALUE
  ```

- Example:
  
  ``` ts
  class Person2 {
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

  let user1 = new Person2("Dev_1", 20);

  // Standard access
  // user1._age = 23
  // Property '_age' is private and only accessible within class 'Person2'.
  // console.log(user1._age);
  // Property '_age' is private and only accessible within class 'Person2'

  console.log(`Age: ${user1.age}`); // Age: 20
  user1.age = 23; // Setter: update property '_age'
  console.log(`Age: ${user1.age}`); // Age: 23
  ```

### 5. Inheritance

- **Inheritance** (kế thừa): Một class kế thừa (CHILD_CLASS) properties/methods từ một class (PARENT_CLASS).
- Để kế thừa sử dụng keyword `extends` và `super`:
  - `extends`: cho phép CHILD_CLASS kế thừa PARENT_CLASS
  - `super`:
    - `super()`: Dùng để gọi constructor của PARENT_CLASS trong CHILD_CLASS.
    - `super.METHOD_PARENT()`: Gọi method của PARENT_CLASS trong method của CHILD_CLASS.
- Syntax:
  
  ``` ts
  // PARENT_CLASS
  class PARENT_CLASS(){
    PROP_PARENT: PROP_PARENT_DATA_TYPE;

    constructor(PROP_PARENT: PROP_PARENT_DATA_TYPE){
      this.PROP_PARENT = PROP_PARENT;
    }
    
    METHOD_PARENT(): METHOD_DATA_TYPE{
      // block-code
      // return...
    }
  }

  class CHILD_CLASS extends PARENT_CLASS{
    // PROP_CHILD: PROP_CHILD_DATA_TYPE

    constructor(
      PROP_PARENT: PROP_PARENT_DATA_TYPE,
      // PROP_CHILD: PROP_CHILD_DATA_TYPE
    )
    {
      // Call the constructor of the PARENT_CLASS:
      super(PROP_PARENT);

      // this.PROP_CHILD = PROP_CHILD;
    }

    METHOD_CHILD(): METHOD_DATA_TYPE{
      // block-code

      // To get method from PARENT_CLASS
      super.METHOD_PARENT();
    }
  }
  ```
  
- Example:
  
  ``` ts
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
  ```

### 6. Static methods and Properties

- Để tạo staic property/method dùng keyword `static`.
  - **Note**: Static methods/properties
    - Không cần tạo mới object (sử dụng keyword: `new CLASS_NAME()`)
    - Chỉ truy cập được thông qua `CLASS_NAME.STATIC_PROP` hoặc `CLASS_NAME.STATIC_METHOD(ARG)`
- **Syntax**:
  
  ``` ts
  class CLASS_NAME {
    // static property
    static STATIC_PROP: STATIC_PROP_DATA_TYPE;

    // static method
    static STATIC_METHOD(PARAM: PARAM_DATA_TYPE): METHOD_DATA_TYPE{}
  }
  ```
  
- Example:
  
  ``` ts
  class Circle {
    public test: number = 69;

    // static STATIC_PROP:STATIC_PROP_DATA_TYPE
    static pi: number = 3.14;

    // static STATIC_METHOD(PARAM:PARAM_DATA_TYPE){}
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
  console.log(newCircle.test); // 69

  // Access static properties/methods using object
  // console.log(newCircle.pi);
  // Property 'pi' does not exist on type 'Circle'. Must using: Circle.pi
  ```

### 7. Abstract Classes

- **Abstract class** xem như 1 model để các class khác kế thừa. Dùng keyword `abstract`
- **Abstract class** có thể chứa:
  - Một/Nhiều normal method (như class thông thường)
  - Một/Nhiều abstract method (chỉ chứa định nghĩa tên method, không chứa body)
  - Không thể tạo mới 1 object với nó (`new ABSTRACT_CLASS()`) mà phải dùng tính kế thừa và phải định nghĩa các abstract method bên trong class kế thừa.

- **Syntax**:
  
  ``` ts
  abstract class ABSTRACT_CLASS{
     constructor(ABSTRACT_PROP: ABS_PROP_DATA_TYPE){
      this.ABSTRACT_PROP = ABSTRACT_PROP;
     }

    // ABSTRACT_METHOD only define name.
    abstract ABSTRACT_METHOD(): DATA_TYPE;

    ABSTRACT_METHOD(PARAM: PARAM_DATA_TYPE): METHOD_DATA_TYPE{
      // block-code
      // return...
    }
  }

  class CHILD_CLASS extends ABSTRACT_CLASS{
     constructor(ABSTRACT_PROP: ABS_PROP_DATA_TYPE){
       super(ABSTRACT_PROP);
     }
    
    // declare abstract methods have into from abstract class.
    ABSTRACT_METHOD(PARAM: PARAM_DATA_TYPE): METHOD_DATA_TYPE{
      // block-code
      // return...
    }
  }
  ```

- Example:
  
  ``` ts
  abstract class Abstract_Employee {
    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    // Abstract method
    abstract getSalary(): number;

    // Normal method
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  // Normal class extends from Abstract class
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

  // Normal class extends from Abstract class
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
  ```

## 05. INTERFACE

- Interface (`interface`) trong TypeScript giúp định nghĩa cách viết code để kiểm soát việc khai báo DATA_TYPE.
- Ngoài ra còn dùng được optional parameter (`?`) và readonly

- **Syntax**:
  
  ``` ts
  // Declare a interface
  interface INTERFACE_NAME{

    // Declare property of interface
    PROP_INTERFACE: PROP_DATA_TYPE;

    // Declare method of interface
    // With name
    METHOD_INTERFACE(PARAM: PARAM_DATA_TYPE): METHOD_DATA_TYPE;
    // or METHOD_INTERFACE: (PARAM: PARAM_DATA_TYPE)=> METHOD_DATA_TYPE;

    // Without name
    (PARAM: PARAM_DATA_TYPE): METHOD_DATA_TYPE;
  }

  // Using interface
  VAR_NAME: INTERFACE_NAME = {
    PROP_INTERFACE: VALUE;
  };

  // Using method interdace without name
  VAR_NAME: INTERFACE_NAME = (PARAM)=>{
    // block-code
    // return...
  }
  VAR_NAME(ARG);

  // Using method interdace with name
  VAR_NAME: INTERFACE_NAME = {
    METHOD_INTERFACE: (PARAM)=> {
      // block-code
      // return...
    }
  }
  VAR_NAME.METHOD_INTERFACE(ARG);

  ```
  
- Example:
  
  ``` ts
  // Example 1
  interface Person {
    // Declare property interface
    readonly id: string; // Using keyword: readonly
    firstName: string;
    lastName: string;
    age?: number; // Using optional parameter
  }

  const getInfor = (info: Person): string => {
    return `${info.firstName} ${info.lastName}`;
  };

  let admin22 = {
    id: "Avc123",
    firstName: "Khang",
    lastName: "Nguyen",
    // age: 12,
  };
  console.log(getInfor(admin22)); // Khang Nguyen

  // Example 2: Declare method A without a name
  interface SumFunc {
    (a: number, b: number): number;
  }
  const add: SumFunc = (a, b) => a + b;
  console.log(`Sum: ${add(12, 12)}`); // Sum: 24

  // Example 3: Declare method A with a name
  interface Param {
    fNum: number;
    sNum: number;
  }

  interface Func {
    // Defined method interface with name
    sum: (input: Param) => number;
    subs(input: Param): number;
  }

  let calc: Func = {
    sum: (input) => input.fNum + input.sNum,
    subs: (input) => input.fNum - input.sNum,
  };

  console.log(calc); // { sum: [Function: sum], subs: [Function: subs] }
  console.log(`Sum: ${calc.sum({ fNum: 12, sNum: 10 })}`); // Sum: 22
  console.log(`Subs: ${calc.subs({ fNum: 12, sNum: 10 })}`); // Subs: 2
  ```
  
---

## QUESTIONS

<details>
<summary><strong>List questions</strong></summary>

- [Character special](#character-special)
- [So sánh `public`, `private` và `protected`](#so-sánh-public-private-và-protected)
- [Interfaces and Types](#interfaces-and-types)

</details>

### Character special

| Name          | Character | Example                    |
| ------------- | :-------: | -------------------------- |
| Mixed type    |  **\|**   | `DATA_TYPE` \| `DATA_TYPE` |
| Optional type |   **?**   | `DATA_TYPE ?`              |

### So sánh `public`, `private` và `protected`

### The type names `String`, `Number`, `Boolean` are legal, but refer to some special built-in types

### Interfaces and Types

- Diffent:
  - **Interfaces** can be defined multiple times and will be treated as a single interface (with members of all declarations being merged).
  - **Types** will be errors because of duplicate identifiers.
