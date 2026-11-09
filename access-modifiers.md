# Title: Access Modifiers

# Introduction:

Access Modifiers are feature of TypeScript that helps us to control accessibility and visibility of ,members of classes of TypeScript.

# Detailed Body Paragraphs with Code Examples:
There are 4 access modifiers in TypeScript. Among those 3 access modifiers controls accessibility of ,members and 1 for visibility.
Access modifiers for accessibility are: public, private and protected.
Access modifiers for visibility is: readonly

### public Access Modifiers:
This id the default access modifier of TypeScript. If we don't use any kind of modifier, typescript will enforce this modifier by default.  
**Example:**
```typescript
class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const dog = new Animal("bilai");
```

### private Access Modifier:
Members using this modifier are only accessible with in the class meaning we can not access a property using "this" keyword from a child class or a object create from the class.  
**Example:**
```typescript
class Account {
  private _baseSalary: number;
  constructor(amount: number) {
    this._baseSalary = amount;
  }
  showBaseSalary() {
    console.log(this._baseSalary);
}
const myAccount = new Account(5000);
// consol.log(myAccount. _baseSalary); it will throw an error
```
### protected Access Modifiers:
Member of using this modifier are only accessible with in the class and child classes.  
**Example:**
```typescript
class Employee {
  protected salary: number;
  constructor(salary: number) {
    this.salary = salary;
  }
}
class Manager extends Employee {
  getBonus() {
    return this.salary;
  }
}

const employee1 = new Employee(10000);
// employee1.salary; This will cause an error
```
### readonly access modifiers:
This modifier make a property immutable.  
**Example:**
```typescript
class User {
    readonly id: string; 
    public name: string;
    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}
const user = new User("USR-1002", "Alice");
user.id = "1234"; // This will cause an error
```

# Conclusion: 
Access modifiers are powerful tools that help us to implement a core pillar of type script which is called Encapsulation.