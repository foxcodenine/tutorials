
# TypeScript Advanced Lessons

This document covers the important concepts demonstrated in the next section of lessons.

---

## 1. Intersection Types (`intersection.ts`)

- **Intersection types** (`&`) combine multiple types into one.
- Example:
  ```typescript
  type AccessedFileData = FileData & Status;
  ```
- Equivalent with **interfaces** using `extends`:
  ```typescript
  interface AccessedFileData1 extends FileData1, Status1 {}
  ```

**Summary:**  
Both `&` and `extends` merge types together. Useful when objects must satisfy multiple contracts (e.g., data + status).

---

## 2. Type Guards (`guards.ts`)

- **Union type with property checks:**
  ```typescript
  if ('path' in source) { ... }
  ```

- **Discriminated union with a `type` field:**
  ```typescript
  if (source.type === 'file') { ... }
  ```

- **Class-based type guard using `instanceof`:**
  ```typescript
  if (entity instanceof User) { ... }
  ```

- **Custom type guard with a predicate function:**
  ```typescript
  function isCat(animal: Animal): animal is Cat { ... }
  ```

**Summary:**  
Type guards allow TypeScript to narrow down the type at runtime, providing better safety.

---

## 3. Function Overloading (`functions.ts`)

- **Function overloading** lets you define multiple signatures for a function:
  ```typescript
  function getLength(val: string): string;
  function getLength(val: any[]): number;
  ```

- The implementation handles both types safely:
  ```typescript
  function getLength(val: string | any[]) { ... }
  ```

**Summary:**  
Useful when a function needs to behave differently based on input type.

---

## 4. Advanced Types (`advances.ts`)

- **Index Types:** Allow flexible object keys with a specific value type.
  ```typescript
  type DataStore = { [props: string]: number | boolean };
  ```

- **Record Type:** Cleaner alternative to index signatures.
  ```typescript
  let someObj: Record<string, number | boolean>;
  ```

- **Constant Types with `as const`:**
  ```typescript
  let roles = ['admin', 'guest', 'editor'] as const;
  ```

- **Restricting Inputs Based on Array Values:**
  ```typescript
  type Role = typeof roles[number];
  ```

**Summary:**  
Techniques to control and restrict object shapes and values, improving code robustness.

---

## 5. Satisfies Operator (`satisfies.ts`)

- **Using `satisfies` ensures an object matches a required shape** without losing the exact key names/types:
  ```typescript
  const dataEntries = {
      entry1: 0.51,
      entry2: -1.23
  } satisfies Record<string, number>;
  ```

- Without `satisfies`, TypeScript would widen the type too much, allowing extra properties unintentionally.

**Summary:**  
`satisfies` combines strict shape checking with precise typing.

---

## Final Thoughts

These lessons introduced:
- Combining types with `&` and `extends`
- Safely working with unions using type guards
- Function overloading for flexible behavior
- Advanced object control with index types, `as const`, and `satisfies`

Understanding these features will help you write even more powerful and type-safe TypeScript code!
