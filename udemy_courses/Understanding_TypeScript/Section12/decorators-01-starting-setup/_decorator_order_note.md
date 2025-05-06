
### 🧠 NOTE: Decorator Execution vs Constructor Timing

Although decorators are **applied in bottom → top order**, if any decorator **calls `new constructor()` manually**, it causes the class constructor to run **early**, before the others finish.

Here’s a real execution breakdown for the following decorators:

```ts
@SimpleLogger
@LoggerWithPrefix('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
@WithPerson('Rei', 'app')
class Person {
    constructor(name: string) {
        console.log('🛠️ Constructor: Creating person instance...');
    }
}
```

✅ Summary of Events

| Step | What Happens                                        | Where it comes from                      |
|------|-----------------------------------------------------|-------------------------------------------|
| 1    | 👤 WithPerson applied                               | Manual decorator execution                |
| 2    | 🛠️ Constructor runs (from inside WithPerson)        | Because it calls `new constructor(name)`  |
| 3    | 🖼️ WithTemplate applied                             | Decorator execution continues             |
| 4    | 📄 LoggerWithPrefix + constructor name              | Decorator logic                           |
| 5    | 📦 SimpleLogger + constructor name                  | Final decorator applied                   |
| 6    | 🛠️ Constructor runs (again)                         | Your `new Person('James')` call           |
| 7    | Logged object                                       | From your final `console.log(pers)`       |

🧩 This means: if a decorator instantiates the class (like `@WithPerson`), the constructor will run **before** the rest of the decorators.
