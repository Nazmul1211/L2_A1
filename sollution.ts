// Problem 1:


const filterEvenNumbers = (array: number[]): number[] => {
  const evenNumbers: number[] = [];
  array.forEach((num) => {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  });
  return evenNumbers;
};

filterEvenNumbers([1, 2, 3, 4, 5, 6]);




// Problem 2:


const reverseString = (str: string) => {
  let reverseStr: string = "";
  const length = str.length;
  for (let i = length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return `"${reverseStr}";`;
};

reverseString("typescript");



// Problem 3:


type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): unknown => {
  if (typeof input === "string") {
    return `"String"`;
  } else if (typeof input === "number") {
    return `"Number"`;
  }
};

console.log(checkType("Hello"));




// Problem 4:


type typeProperty = { id: number; name: string; age: number };

const getProperty: <T extends object, K extends keyof T>(
  obj: T,
  key: K,
) => T[K] = (obj, key) => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };




// Problem 5:


interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

interface newReadableBook extends Book {
  isRead: boolean;
}

const toggleReadStatus = (book: Book): newReadableBook => {
  const newObject = { ...book, isRead: true };
  return newObject;
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

toggleReadStatus(myBook);




// Problem 6:


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails = (): string => {
    return `
      Name: ${this.name}, 
      Age: ${this.age}, 
      Grade: ${this.grade}`;
  };
}

const student = new Student("Alice", 20, "A");
student.getDetails();




// Problem 7:


const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const intersection: number[] = [];

  for (let i = 0; i <= arr1.length - 1; i++) {
    for (let j = 0; j <= arr2.length - 1; j++) {
      if (arr1[i] == arr2[j]) {
        intersection.push(arr1[i]);
      }
    }
  }

  return intersection;
};

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
