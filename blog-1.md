# Why is `any` labeled a "type safety hole," and why is `unknown` the safer choice for handling unpredictable data? Explain the concept of type narrowing

## Introduction

The Purpose of TypeScript is to create type safe code at higher level. But the `any` type can break all those type safety guarantees what TypeScripts promised to the developers. At first, developers feets like it was an easy escape by declaring `any` type or just used it with implicit declaration like the JavaScript. But it is actually a trap or hole in the data typing. `any` type can break the whole data system at any time. That's the reason the `unknown` type was introduces for better type safety in place of `any` type. This blog will compare both the type and their use cases for better understanding.



## The Problem with `any` type

When we assaign `any` type to a variable, we basically implicitly tells the TypeScript, "The `any` type we declare is safe and sound, you don't need to check the errors". TypeScript just stop checking that type and we unintentionally fall into the trap. As a result, we can call method that do not exist, pass wrong argument types and can access missing proties as well. TypeScript remains silent or invincible in this case.


```typescript
function showStudentResult(student: any) {
  console.log(`${student.name} got ${student.mark.toFixed(0)} marks`);
}

showStudentResult({ name: "Nazmul" }); 
```

The above code compiles cleanly at environment, but crashes at runtime. TypeScript offered zero protection because `any` disabled all checks. We can see the errors in the runtime, it keeps blind about the error untill runtime log.



## The Safer Alternative: `unknown` type

`unknown` type is the type-safe alternative to `any` type. Like `any` type, a variable of type `unknown` can hold any value. We need to prove the type first before using the unknown type otherwise TypeScript will refuse to let you use that value. We can't call method on it , pass it to the typed funcitons or can't perform operrations untill we narrow it's type.


```typescript
function showStudentName(student: unknown) {
  console.log(student.name); 
}
```

TypeScript catches the mistake immediately — before you ever run the code.

---

## Type Narrowing: How We can Work with `unknown` Type Safely

Type narrowing is a technique that let's us to refine a large type like `unknown` into a more specific one like the `string` or `number` inside a conditional bloack. TypeScript tracks these checks and adjusts the inferred type accordingly.

```typescript
function showStudentName(student: unknown) {
  if (typeof student === "object" && student !== null && "name" in student) {
    console.log(student.name);      
    } else {
    console.log("Invalid student data");
    }
}
```
In this example, we check if `student` is an object, is not null, and has a `name` property. Inside the `if` block, TypeScript now knows that `student` is an object with a `name` property, so we can safely access it without any errors. This is the power of type narrowing — it allows us to work safely with `unknown` types   

