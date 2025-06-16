import { StringUtils } from "../app/Utils";

describe("Utils test suite", () => {

    describe("StringUtils test", () => {

        let sut: StringUtils;

        beforeEach(() => {
            sut = new StringUtils();
        });

        afterEach(() => {
            // clear mocks
            console.log("Teardown")
        })

        it("Should return correct upper case", () => {


            const actual = sut.toUpperCase('abc');

            expect(actual).toBe("ABC");
            console.log("Actual test!")
        })
    });

});