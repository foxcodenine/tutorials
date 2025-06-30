## Install Dependencies

```bash
npm i -D typescript jest ts-jest @types/jest ts-node
```

or

```bash
npm i -D typescript 
npm i -D jest 
npm i -D ts-jest 
npm i -D @types/jest 
npm i -D ts-node
```


## Initialize Jest Config for TypeScript

```bash
npx ts-jest config:init
```

Clean up and create a fresh config with ts(optional):

```bash
rm jest.config.js; touch jest.config.ts
```

Example:

```js
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {

    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,
}

export default config;
```

## Generate a tsconfig.json

```bash
$ tsc --init
```

Example:

```json
{
    "compilerOptions": {
        // Set the JavaScript language version for output code
        "target": "es2022",

        // Enable compatibility for importing CommonJS modules with `import`
        "esModuleInterop": true,

        // Skip type checking of all declaration files (*.d.ts) for faster builds
        "skipLibCheck": true,

        // Specify module code generation for Node.js projects (supports ES Modules + CommonJS interop)
        "module": "NodeNext",

        // Enable isolatedModules for ts-jest compatibility with NodeNext modules
        "isolatedModules": true,

        // Where to output compiled JavaScript files
        "outDir": "dist",

        // Where to find your TypeScript source files (the 'src' directory)
        "rootDir": "src",

        // Specify library files to include (ES2022 features + DOM types)
        "lib": [
            "es2022",
            "DOM"
        ],

        // Enable all strict type-checking options (highly recommended)
        "strict": true
    },
    // Optionally, include only the 'src' directory for compilation
    "include": [
        "src"
    ]
}

```

---

## Structure of a Good Unit Test

- **AAA Principle**:
    
    - **Arrange:** Set up everything needed for the test
        
    - **Act:** Run the function or code under test
        
    - **Assert:** Check results/output
        
- **Test Lifecycle:**
    
    - **Setup:** (e.g., beforeEach) Prepare resources before tests
        
    - **Teardown:** (e.g., afterEach) Clean up after tests
        

---

## Test Function Properties & Aliases

- **Properties:**
    
    - `.only`   → Run only this test  
        `test.only("desc", fn)`
        
    - `.skip`   → Skip this test  
        `test.skip("desc", fn)`
        
    - `.todo`   → Mark test as a TODO
        
    - `.concurrent`   → Run tests in parallel
        
- **Aliases:**
    
    - `it` — same as `test`  
        `it("desc", fn)`
        
    - `test`
        
    - `xit` — same as `it.skip`
        
    - `fit` — same as `it.only`
        

---

## Watch Mode (Jest Scripts)


```js
"scripts": {   "test": "jest",   "test-watch": "jest --watch" }
```

- Run tests with auto-reload on changes:  
    `npm run test-watch`
    

---

## VSCode: Jest Debugging

- **Official Recipe:**  
    [VSCode Debugging Jest Tests](https://github.com/microsoft/vscode-recipes/tree/main/debugging-jest-tests)
    

---

## Code Coverage

Update jest.config, adding collectCoverage and collectCoverageFrom.

```js
import type { Config } from "@jest/types";

const baseDir = '<rootDir>/src/app/pass_checker';           // <-
const baseTestDir = '<rootDir>/src/test/pass_checker';      // <-

const config: Config.InitialOptions = {

    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,
    collectCoverage: true,                                  // <-
    collectCoverageFrom: [                                  // <-
       `${baseDir}/**/*.ts`    
    ],
    testMatch: [                                            // <-
        `${baseTestDir}/**/*.ts` 
    ]
}

export default config;
```

- Ignore lines/branches from coverage:  
    `/* istanbul ignore next */`
    

---


-  Mocking and spies
    
-  Snapshot tests
    
-  Setup/teardown hooks (`beforeAll`, `afterAll`, etc.)

---

### Coding Katas

Coding katas are programming exercises or small problems that you solve repeatedly to improve your
coding skills, much like how martial artists practice "katas" (formal routines) to perfect their
moves.

---

### Test doubles in Jest
    -   Dummy object: passed around but not used.
    -   Fakes: simplified working implimentations, it takes a shortcut.
    -   Stubs: imcomplete object used as arguments.
    -   Spies: track information about how a unit is called.
    -   Mocks: preprogrammed with expectations.


---