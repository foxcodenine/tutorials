import { getStringInfo, myToUpperCase } from "../app/Utils";

// The main test group for Utils functions
describe("Utils test suite", () => {

    // Test for myToUpperCase function
    it("should return uppercase of valid string", () => {
        // Arrange: prepare the function and expected result
        const sut = myToUpperCase;
        const expected = "ABC";

        // Act: call the function with the input
        const actual = sut('abc');

        // Assert: check if the result matches expectation
        expect(actual).toBe(expected);
    });

    // -----------------------------------------------------------------
    // Sub-group of tests for getStringInfo with specific input
    describe("getStringInfo for arg 'my-Test-STRING' should", () => {

        // Lowercase output test
        test("return correct lower case", () => {
            // Act
            const actual = getStringInfo("my-Test-STRING");
            // Assert
            expect(actual.lowerCase).toBe("my-test-string");
        });

        // Parameterized tests for myToUpperCase
        // .only will run only this block, useful for debugging
        // Remove .only to run all tests!
        describe("ToUpperCase examples", () => {
            it.each([
                { input: "abc", expected: "ABC" },
                { input: "My-String", expected: "MY-STRING" },
                { input: "def", expected: "DEF" },
            ])(
                "$input toUpperCase should be $expected",
                ({ input, expected }) => {
                    const actual = myToUpperCase(input);
                    expect(actual).toBe(expected);
                }
            );
        });

        // Length test (showing both ways to check length)
        test("return correct length", () => {
            const actual = getStringInfo("my-Test-STRING");
            expect(actual.characters.length).toBe(14);
            expect(actual.characters).toHaveLength(14); // Alternative way
        });

        // Array contents test
        test("return correct characters array", () => {
            const actual = getStringInfo("my-Test-STRING");
            expect(actual.characters).toEqual(['m', 'y', '-', 'T', 'e', 's', 't', '-', 'S', 'T', 'R', 'I', 'N', 'G']);

            // Check for at least one value
            expect(actual.characters).toContain<string>('m');

            // Check that certain items are present, regardless of order
            expect(actual.characters).toEqual(
                expect.arrayContaining(['S', 'T', 'R', 'I', 'N', 'G', 'm', 'y'])
            );
        });

        // Check extraInfo is defined and truthy
        test("return defined extra info", () => {
            const actual = getStringInfo("my-Test-STRING");
            expect(actual.extraInfo).not.toBe(undefined);
            expect(actual.extraInfo).not.toBeUndefined();
            expect(actual.extraInfo).toBeDefined();
            expect(actual.extraInfo).toBeTruthy(); // Truthy = not null, undefined, 0, '', etc.
        });

        // Check extraInfo contents
        test("return right extra info", () => {
            const actual = getStringInfo("my-Test-STRING");
            expect(actual.extraInfo).toEqual({});
        });
    });
});
