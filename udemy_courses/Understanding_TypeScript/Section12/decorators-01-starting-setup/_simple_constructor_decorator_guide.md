
# 🧠 Simple Guide: `constructor: any` and `new constructor()` in Decorators

## ✅ What's Going On?

In TypeScript class decorators:

```ts
function MyDecorator() {
  return function (constructor: any) {
    const instance = new constructor('something');
    console.log(instance);
  };
}
```

- `constructor` refers to the class itself.
- `new constructor()` creates a new instance of the class manually.

---

## ❓ Why Use `constructor: any`?

- You’re telling TypeScript: “This is a class, and I’ll deal with the details.”
- `any` lets you call `new constructor()` without strict typing.

---

## 💡 When Does It Work?

It works **if**:
- The class constructor doesn’t need arguments **OR**
- You pass the required arguments manually: `new constructor('Chris')`

---

## ⚠️ When It Might Fail

If your class *needs arguments* but you call:

```ts
new constructor();
```

Then:
- The arguments become `undefined`
- Your code might not crash, but could misbehave (like `this.name = undefined`)

---

## ✅ Better & Safer Way

Use this pattern to pass arguments dynamically:

```ts
function SafeDecorator() {
  return function <T extends { new (...args: any[]): any }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args); // Pass all args from the outside
        // Your decorator logic here
      }
    };
  };
}
```

This way:
- No hardcoding
- Works with all constructors

---

## 🧪 Summary

| What you do               | Safe? | Why                              |
|---------------------------|-------|-----------------------------------|
| `new constructor()`       | ⚠️    | Might miss required arguments     |
| `new constructor('Chris')`| ✅    | You passed the argument manually  |
| `extends constructor`     | ✅✅   | Safest and most flexible pattern  |

