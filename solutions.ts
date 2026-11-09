function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier || multiplier === 0) {
    return value * multiplier;
  }
  return value * 2;
}

function processInput(
  value: string | number | boolean,
): string | number | undefined {
  if (typeof value === "string") {
    let result = "";
    for (let char of value) {
      if (char !== " ") {
        result += char;
      }
    }

    return result.toLocaleLowerCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    if (value) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
}

function formatCoordinate(
  value: readonly [latitude: number, longitude: number, locationName: string],
): string {
  return `Location: ${value[2]} (${value[0]}, ${value[1]})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const res: T[] = [];

  for (let arr of arrays) {
    for (let a of arr) {
      res.push(a);
    }
  }

  return res;
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const res: Course[] = [];

  courses.map(
    (course) =>
      course.isPublished && course.students >= minStudents && res.push(course),
  );

  return res;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const res: T[K][] = [];

  for (let item of items) {
    res.push(item[key]);
  }

  return res;
}

class Employee {
  protected name: string;
  private baseSalary: number;
  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;
  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

async function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => resolve("Access Granted"), 1000);
    }
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}
