# Section 3: Jest + TypeScript Setup & Test Basics

## Install Dependencies

```bash
npm i -D typescript jest ts-jest @types/jest ts-node
```


## Initialize Jest Config for TypeScript

```bash
npx ts-jest config:init
```



Clean up and create a fresh config (optional):

```bash
rm jest.config.ts touch jest.config.ts
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

- Ignore lines/branches from coverage:  
    `/* istanbul ignore next */`
    

---

### Optional: More Advanced Jest Features

-  Mocking and spies
    
-  Snapshot tests
    
-  Setup/teardown hooks (`beforeAll`, `afterAll`, etc.)