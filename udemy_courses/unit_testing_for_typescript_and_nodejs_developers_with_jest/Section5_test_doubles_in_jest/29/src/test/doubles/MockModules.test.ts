// --- FULL MODULE MOCKING --------------------------------------------

// If you uncomment the next line, ALL exports from this module are replaced
// by automatically generated Jest mock functions (jest.fn()).

// jest.mock("../../app/doubles/OthersUtils");

// This means:
// - All the real logic is replaced by mocks.
// - All functions will return undefined unless you specify their behavior.
// - Use this to isolate the test from all real code in the module.


// --- PARTIAL MODULE MOCKING -----------------------------------------

// To mock individual exports, always put jest.mock() **before** your imports!

// 1. Mock only calculateComplexity, but keep other functions real.
jest.mock("../../app/doubles/OthersUtils", () => ({

    // Retain all original exports:
    ...jest.requireActual("../../app/doubles/OthersUtils"),

    // But replace calculateComplexity with a mock implementation:
    calculateComplexity: () => 10
    
}));

// 2. Mock 'uuid' module so v4() always returns the same value (for predictable test results)
jest.mock('uuid', () => ({
    v4: () => '123456789'
}));

// Now import AFTER mocks so the mocked versions are used!
import * as OtherUtils from "../../app/doubles/OthersUtils";

describe('modules test', () => {

    // calculateComplexity will always return 10, regardless of input
    test('calculating complexity (mocked)', () => {
        const result = OtherUtils.calculateComplexity({} as any);
        expect(result).toBe(10); // passes because of our mock
    });

    // Other exports (toUpperCase) remain unaffected
    test('keep other functions unchanged', () => {
        const result = OtherUtils.toUpperCase("hello world")
        expect(result).toBe('HELLO WORLD');
    });

    // Any use of uuid.v4() is now predictable and easy to assert
    test('string with id (mocked uuid)', () => {
        const result = OtherUtils.toLowerCaseWithId("ABC ")
        expect(result).toBe('abc 123456789'); // passes because of mocked uuid.v4
    });
});
