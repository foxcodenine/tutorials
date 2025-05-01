
# Section 2: TypeScript Lessons

This document covers the key concepts and examples from each lesson in Section 2. Each lesson introduces important TypeScript features that help make your code safer and more predictable.

---

## Lesson 1: Basics (`basics.ts`)

- **Variable Declarations:**
  - **Explicit Types:**  
    `let userName: string;` declares a variable that must hold a string.
  - **Implicit Types:**  
    `let userAge = 40;` infers the type as `number` from its initialization.

- **The `any` Type:**
  - Variables declared with `any` can hold any type of value.
  - Example:  
    ```typescript
    let something: any = 'Hello World';
    something = 5; // No type error
    ```

- **Functions with Default Parameters:**
  - You can set default values for function parameters.
  - Example:  
    ```typescript
    function add(a: number, b = 5): number {
        return a + b;
    }
    add(5); // Uses default value 5, returns 10
    ```

---

## Lesson 2: Arrays, Tuples, and Objects (`arrays-tuples-objects.ts`)

- **Arrays:**
  - **Typed Arrays:**  
    `let hobbies: string[];` declares an array that only accepts strings.
  - **Union Types in Arrays:**  
    `let users: (string | number)[] = ['foxocode', 'chrismariojimmy', 66];`
  - **Alternate Array Syntax:**  
    `let animals: Array<string | number>;` is equivalent to using the union array type.

- **Tuples:**
  - Fixed-length arrays with specified types per element.
  - Example:  
    ```typescript
    let possibleResults: [number, number];
    possibleResults = [5, 5];
    ```

- **Objects:**
  - **Inferred Types:**  
    ```typescript
    let aaa = {
        name: 'Max',
        age: 38,
    };
    ```
  - **Explicit Object Types:**  
    ```typescript
    let bbb: { name: string, age: number } = { name: 'Max', age: 38 };
    ```
  - **Nested Object Types:**  
    ```typescript
    let cc: {
        name: string,
        age: number,
        hobbies: string[],
        role: { description: string, id: number }
    } = {
        name: 'Max',
        age: 38,
        hobbies: ['Cooking'],
        role: { description: 'admin', id: 5 }
    };
    ```
  - **Record Type:**  
    `Record<string, string | number>` defines an object with keys of type string and values of a union type.

---

## Lesson 3: Flexible Types (`flexible-types.ts`)

- **The `any` Type:**
  - Allows reassignment to any type.
  - Example:
    ```typescript
    let age: any = 36;
    age = '37';
    age = false;
    age = {};
    age = [];
    ```

- **Union Types:**
  - Declare variables that can accept a set of specified types.
  - Example:
    ```typescript
    let myAge: string | number | boolean = 36;
    myAge = '40';
    myAge = 40;
    myAge = true;
    ```

---

## Lesson 4: Choices (`choices.ts`)

- **Enums:**
  - Enums help create a set of named constants.
  - Example:
    ```typescript
    enum Role {
        Admin = 1, 
        Editor,
        Guest
    }
    let userRole: Role = 3;
    userRole = Role.Editor;
    userRole = Role.Guest; 
    userRole = 1;
    ```

- **Literal Unions:**
  - Restrict a variable to a fixed set of string literal values.
  - Example:  
    ```typescript
    let bread: 'breadsrick' | 'pretzel' | 'baguette' = 'baguette';
    bread = 'pretzel';
    ```

- **Tuples with Union Types:**
  - Define tuples with elements constrained to specific literals.
  - Example:
    ```typescript
    let possibleResults2: [1 | -1, number];
    possibleResults2 = [-1, 2];
    ```

- **Custom Types:**
  - Use type aliases to create custom types.
  - Example:
    ```typescript
    type Pizza = 'neapolitana' | 'sicilian' | 'romana' | 'greek';
    
    function favoritePizza(p: Pizza): string {
        return `My favorite pizza is ${p}`;
    }
    
    type PizzaRecipe = {
        name: Pizza,
        ingredients: string[],
        size: number,
    }
    ```

---

## Lesson 5: Functions (`functions.ts`)

- **Basic Function Definition:**
  - Functions can have explicit parameter and return types.
  - Example:
    ```typescript
    function addTen(a: number): number {
        return a + 10;
    }
    ```

- **Void Functions:**
  - Functions that do not return a value use `void` as the return type.
  - Example:
    ```typescript
    function log(message: string): void {
        console.log(message);
    }
    ```

- **Never Type:**
  - Used for functions that never return normally, e.g., functions that throw errors.
  - Example:
    ```typescript
    function logAndThrow(errorMesage: string): never {
        console.log(errorMesage);
        throw new Error(errorMesage);
    }
    ```

- **Function Types and Higher-Order Functions:**
  - Functions can be passed as parameters.
  - Example with arrow function:
    ```typescript
    const logMsg = (msg: string) => {
        console.log(msg);
    };

    function performJob(cb: (m: string) => void) {
        cb('Hello world!');
    }
    performJob(logMsg);
    ```

- **Methods in Object Types:**
  - Define object types with function properties.
  - Example:
    ```typescript
    type dog = {
        name: string,
        breed: string,
        age: number,
        bark: (m: string) => void,
    };

    const lila: dog = {
        name: 'Lila',
        breed: 'Golden Retriever',
        age: 2,
        bark(m) {
            console.log(m);
        },
    }
    ```

---

## Lesson 6: Special Types (`special-types.ts`)

- **Null and Undefined:**
  - Variables can be explicitly typed to accept `null` or `undefined` along with other types.
  - Examples:
    ```typescript
    let a: null | string;
    a = null;
    a = 'A';
    
    let b: undefined | string;
    b = undefined;
    b = 'B';
    ```

- **Non-null Assertion Operator (`!`):**
  - Assures TypeScript that a value is not `null` or `undefined`.
  - Example:
    ```typescript
    let inputEl = document.getElementById('user-name')!;
    ```

- **Optional Chaining (`?.`):**
  - Safely access properties, returning `undefined` if the reference is null or undefined.
  - Example:
    ```typescript
    // console.log(inputEl?.value);
    ```

- **Type Casting:**
  - Use the `as` keyword to cast DOM elements or other values to a more specific type.
  - Example:
    ```typescript
    let inputEl2 = document.getElementById('user-surname') as HTMLInputElement | null;
    console.log(inputEl2?.value);
    ```

---

## Lesson 7: Unknown Type (`unknown.ts`)

- **The `unknown` Type:**
  - Use `unknown` when you want to allow any value but force type checking before using it.
  - Example:
    ```typescript
    function process(val: unknown) {
        if (
            typeof val === 'object' &&
            !!val &&
            'log' in val &&
            typeof (val as any).log === 'function'
        ) {
            (val as { log: () => void }).log();
        }
    }
    ```

---

## Lesson 8: Optional and Nullish Coalescing (`optional.ts`)

- **Optional Parameters in Functions:**
  - Functions can declare parameters as optional using `?`.
  - Example:
    ```typescript
    function generateError(msg?: string) {
        throw new Error(msg);
    }
    generateError();
    ```

- **Optional Properties in Custom Types:**
  - In custom types, some properties can be marked as optional.
  - Example:
    ```typescript
    type User = {
      name: string;
      age: number;
      role?: 'admin' | 'guest'; // Optional
    };
    ```

- **Nullish Coalescing Operator (`??`):**
  - Provides a default value if the left-hand side is `null` or `undefined`.
  - Example:
    ```typescript
    let input = '';
    const didProvideInput = input ?? false;
    ```

---

## Summary

Section 2 covers a wide range of TypeScript features from the fundamentals (variable declarations and basic functions) to more advanced types (unions, enums, special types, and unknown). Understanding these concepts will help you write robust, error-resistant TypeScript code. Use these examples and explanations as a reference for your ongoing learning journey.
