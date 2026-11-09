# Title: Type Narrowing

# Introduction:
Type Narrowing is a technique by which a programmer helps TypeScript to determine a particular type from a more general types by Using type guards.

# Detailed Body Paragraphs with Code Examples:
### typeof: 
This is a built in type guard which helps us to guard type at run time.  
**Example:**
```typescript
const print = (value: string | number) => {
 if (typeof value === "string") {
   return value.length;
 } else if (typeof value === "number") {
   return value.toString();
 } else {
   return value;
 }
};
```
### instance of: 
This is another built in operator which checks if any object is an instance of a particular class.  
**Example:**
``` typescript
  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log(`The animal is making sound`);
    }
  }
  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    doBark() {
      console.log(`The dog is barking`);
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    doMeowing() {
      console.log(`The dog is Meowing`);
    }
  }
  const getAnimal = (animal: Animal) => {
    if (animal instanceof Dog) {
      animal.doBark();
    } else if (animal instanceof Cat) {
      animal.doMeowing();
    } else {
      animal.makeSound();
    }
  };
  const dog: Animal = new Dog("German Shepard", "shepard");
  const cat = new Cat("Persian Cat", "persian");
  getAnimal(dog);
  getAnimal(cat);
  ```

### in operator: 
This built in operator check whether a property exists on a particular object.   
**Example:**
```typescript
  type GeneralUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };
  const getUser = (user: GeneralUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is 
${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };
```
# Conclusion: 
Type guard is a powerful technique. We use type guard to code deterministically and catch error ahead of JavaScript run time.