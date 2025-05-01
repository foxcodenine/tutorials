
# TypeScript Generics, Classes, and Interfaces

This document covers the concepts demonstrated in the "Generics" and "Classes & Interfaces" lessons.

---

## 1. Introduction to Generics (`generics.ts`)

- **Generics** act as placeholders for types, making code reusable and type-safe.

### Built-in Generic Type Example

```typescript
let name1: string[] = ['Max', 'Anna'];
let name2: Array<string> = ['Max', 'Anna'];
```

- `Array<T>` is a generic type where `T` is the type of array items.

---

### Custom Generic Types

```typescript
type DataStore<T> = {
    [key: string]: T;
};
```

- You can define a `DataStore` that accepts any type `T`.
- Example usage:
  ```typescript
  let store: DataStore<string | boolean> = {};
  store.name = 'Max';          // ✅
  store.isInstructor = true;   // ✅
  ```

---

### Generic Functions

- Generic function accepting two values of the same type:
  ```typescript
  function merge<T>(a: T, b: T): T[] {
      return [a, b];
  }
  ```

- Function with two different generic types:
  ```typescript
  function merge2<T, U>(a: T, b: U) {
      return [a, b];
  }
  ```

---

### Generic Constraints

- Restricting generics to objects:
  ```typescript
  function mergeObj<T extends object>(a: T, b: T) {
      return { ...a, ...b };
  }
  ```

- Merging two different object types:
  ```typescript
  function mergeObj2<T extends object, U extends object>(a: T, b: U) {
      return { ...a, ...b };
  }
  ```

---

## 2. Generic Classes and Interfaces (`class and interfaces.ts`)

### Generic Class

```typescript
class Box<T> {
    private content: T;

    constructor(value: T) {
        this.content = value;
    }

    getContent(): T {
        return this.content;
    }
}
```

- `Box<string>` holds a string.
- `Box<number>` holds a number.

**Example Usage:**
```typescript
const stringBox = new Box<string>('Hello');
console.log(stringBox.getContent()); // 'Hello'

const numberBox = new Box<number>(42);
console.log(numberBox.getContent()); // 42
```

---

### Generic Interfaces

```typescript
interface ApiResponse<T> {
    success: boolean;
    data: T;
}
```

- `ApiResponse<{ id: number; name: string }>` holds a user object.
- `ApiResponse<number[]>` holds an array of numbers.

**Example Usage:**
```typescript
const userResponse: ApiResponse<{ id: number; name: string }> = {
    success: true,
    data: { id: 1, name: 'Chris' }
};

const idsResponse: ApiResponse<number[]> = {
    success: true,
    data: [1, 2, 3]
};

console.log(userResponse.data.name); // 'Chris'
console.log(idsResponse.data[0]);    // 1
```

---

## Summary

- **Generics** allow writing flexible and reusable components.
- **Generic Constraints** ensure generics still follow specific rules.
- **Generic Classes and Interfaces** allow building scalable, type-safe structures.

Understanding generics is key to mastering TypeScript for building real-world applications!
