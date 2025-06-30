import { getStringInfo, myToUpperCase } from "../app/Utils";

describe("Utils test suite", () => {

    it("should return uppercase of valid string", () => {

        // arrange:
        const sut = myToUpperCase;
        const expected = "ABC"

        // act:
        const actual = sut('abc');

        // assert:
        expect(actual).toBe(expected);
    })


    it.only("should return info for valid string", () => {
        const actual = getStringInfo("my-Test-STRING");

        expect(actual.lowerCase).toBe("my-test-string");
        expect(actual.extraInfo).toEqual({});

        expect(actual.characters.length).toBe(14);
        expect(actual.characters).toHaveLength(14);

        expect(actual.characters).toEqual(['m', 'y', '-', 'T', 'e', 's', 't', '-', 'S', 'T', 'R', 'I', 'N', 'G']);
        expect(actual.characters).toContain<string>('m')

        expect(actual.characters).toEqual(
            expect.arrayContaining(['S', 'T', 'R', 'I', 'N', 'G', 'm', 'y'])
        );

        expect(actual.extraInfo).not.toBe(undefined);
        expect(actual.extraInfo).not.toBeUndefined();
        expect(actual.extraInfo).toBeDefined();
        expect(actual.extraInfo).toBeTruthy();
    });
});