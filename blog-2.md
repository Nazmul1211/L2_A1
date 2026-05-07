# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

## Introduction

Generics is most powerfull features of TypeScript builds on top of JavaScript. It allows us to write the fuctions, classes, and interfaces taht can work with any data type while still remain fully type-checked. Without generics, we have to duplicate our code for every type we use or use `any` type and lose all type safety. Generics easily solve both problems at once.


## The Problem Generics Solve 

Imagine you need a function that returns the first element of an array. Without generics, you might write this:

```typescript
function firstElement(arr: number[]): number {
  return arr[0];
}
```

But what if you need the same function for strings? Or booleans? You may be do copy-pasting, right?

```typescript
function firstElementString(arr: string[]): string {
  return arr[0];
}

function firstElementBoolean(arr: boolean[]): boolean {
  return arr[0];
}
```

This violates the *DRY principle* (Don't Repeat Yourself) and is difficult to maintain. The alternative way is to use the `any` type, but it drastically reduces type safety.

```typescript
function firstElement(arr: any[]): any {
  return arr[0]; 
}
```


## Generics: One Function for All Types

By using generics, we can write a single code of function that works for any type, while still maintaining all the benefits of type checking. The convention is to use the generics with `T` that acts as placeholder. TypeScript fills it automatically based on what we pass. Basically we can think it as a parameter of a function but for types instead of values.

```typescript
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

const num = firstElement([1, 2, 3]);       
const str = firstElement(["a", "b", "c"]); 
const bool = firstElement([true, false]);  
```

One function, perfectly typed for every use case, with no duplication.



We can use generics with constraints, Interfaces and classes to create reusable, mantainable and type safe powerfull code. It's work like a backbone of TypeScript's type system, all the big projects and libraries heavily use generics to achive maximum flexibility without sacrificing type safetye. SO, as a TypeScript developer, we must use and be comfortable with it to write clean and type safe code.


