// ---------------------------------------------------------------------
// 🧠 Extracting Return Types with `infer`
//
// `infer` lets you pull out a part of a type inside a conditional type.
// It's especially useful to extract function return types.
//
// Syntax:
// type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
//
// ---------------------------------------------------------------------

// Example function
function add(a: number, b: number) {
    return a + b;
}

// Get the function type from the add function
type AddFn = typeof add; // (a: number, b: number) => number

// Create a utility type to extract the return value type from any function
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never;

// Use it to extract the return type of AddFn
type AddFnReturnValueType = ReturnValueType<AddFn>; // number
