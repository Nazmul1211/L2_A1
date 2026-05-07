# L2_A1

Assignment 1 for Level 2 of the TypeScript course.

## Problem 1
Create a TypeScript function `filterEvenNumbers` that accepts an array of numbers and returns a new array containing only the even numbers.

### Sample Input
```ts
filterEvenNumbers([1, 2, 3, 4, 5, 6]);
```

### Sample Output
```ts
[2, 4, 6]
```

## Problem 2
Write a function `reverseString` that takes a string as input and returns the reversed version of that string..

### Sample Input
```ts
reverseString("typescript");
```

### Sample Output
```ts
"tpircsepyt"
```

## Problem 3
Define a union type `StringOrNumber` and create a function `checkType` that uses type guards to return `"String"` if the input is a string or `"Number"` if the input is a number.

### Sample Input 1
```ts
checkType("Hello");
```

### Sample Output 1
```ts
"String"
```

### Sample Input 2
```ts
checkType(42);
```

### Sample Output 2
```ts
"Number"
```

## Problem 4
Write a generic function `getProperty` that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object.

### Sample Input
```ts
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");
```

### Sample Output
```ts
"John Doe"
```

## Problem 5
Define an interface `Book` with properties `title`, `author`, and `publishedYear`. Create a function `toggleReadStatus` that accepts a `Book` object and returns a new object with an added `isRead` property (boolean), defaulting to `true`.

### Sample Input
```ts
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024
};
toggleReadStatus(myBook);
```

### Sample Output
```ts
{
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
  isRead: true
}
```

## Problem 6
Create a class `Person` with a `name` and `age`. Then, create a subclass `Student` that adds a `grade` property. Include a method `getDetails` in the `Student` class that returns a string with the student's name, age, and grade.

### Sample Input
```ts
const student = new Student("Alice", 20, "A");
student.getDetails();
```

### Sample Output
```ts
"Name: Alice, Age: 20, Grade: A"
```

## Problem 7
Create a function `getIntersection` that takes two arrays of numbers and returns a new array containing only the elements that are present in both arrays.

### Sample Input
```ts
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
```

### Sample Output
```ts
[3, 4, 5]
```

## Blog Writing (Choose any two: 10 Marks)
Write an impactful and technically sound blog post covering two of the following topics. Your blog should be clear, concise, and include code examples where necessary to illustrate your points.

### Blog Topics
1. Why is `any` labeled a "type safety hole," and why is `unknown` the safer choice for handling unpredictable data? Explain the concept of type narrowing.
2. How do `Pick` and `Omit` utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).
