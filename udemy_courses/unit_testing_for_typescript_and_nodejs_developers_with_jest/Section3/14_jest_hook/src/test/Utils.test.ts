import { StringUtils } from "../app/Utils";

describe("Utils test suite", () => {

    let sut: StringUtils;

    beforeEach(() => {
        sut = new StringUtils();
    });

    afterEach(() => {
        // clear mocks
        console.log("Teardown");
    });

    // -----------------------------------------------------------------

    describe("StringUtils test", () => {

        it("Should return correct upper case", () => {
            const actual = sut.toUpperCase('abc');
            expect(actual).toBe("ABC");
            console.log("Actual test!");
        });

    });

    // -----------------------------------------------------------------

    describe("Should throw error on invalid argument", () => {

        it("function style", () => {
            function expectError() {
                sut.toUpperCase("");
            }

            expect(expectError).toThrow();
            expect(expectError).toThrowError("Invalid argument!");
        });

        it("arrow function style", () => {
            expect(() => {
                sut.toUpperCase("");
            }).toThrow();
        });


        it("try/catch + done() style", (done)=>{

            try {
                sut.toUpperCase("");
                done("GetStringInfo should throw error for invalid arg!")
            } catch (err) {
                expect(err).toBeInstanceOf(Error);
                expect(err).toHaveProperty("message", "Invalid argument!");
                done();
            }
        });

    });

});
