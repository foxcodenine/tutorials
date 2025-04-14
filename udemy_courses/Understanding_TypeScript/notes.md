
# TypeScript Setup & Compilation Notes

## Global Installation

Install TypeScript globally via npm:

```bash
npm install -g typescript
```

## Compiling TypeScript

Compile a single file:

```bash
tsc calculator.ts
```

Compile all `.ts` files in the project (if `tsconfig.json` exists):

```bash
tsc
```

## Watch Mode

Automatically recompile TypeScript files on change:

```bash
tsc --watch
```

## Initialize TypeScript Configuration

Generate a `tsconfig.json` file:

```bash
tsc --init
```

Learn more:
- [tsconfig.json Handbook](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [tsconfig Reference](https://www.typescriptlang.org/tsconfig/)

## Node.js Type Definitions

If you’re working with Node.js, install the Node.js type definitions:

```bash
npm install --save-dev @types/node
```

Type definitions come from the community project:
- [DefinitelyTyped GitHub Repo](https://github.com/DefinitelyTyped/DefinitelyTyped)
