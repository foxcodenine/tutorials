import { myToUpperCase } from "../app/Utils";

describe("Utils test suite", () => {

    it("should return uppercase of valid string", ()=>{

        // arrange:
        const sut = myToUpperCase;
        const expected = "ABC"

        // act:
        const actual = myToUpperCase('abc');
        
        // assert:
        expect (actual).toBe('ABC');
    })
});