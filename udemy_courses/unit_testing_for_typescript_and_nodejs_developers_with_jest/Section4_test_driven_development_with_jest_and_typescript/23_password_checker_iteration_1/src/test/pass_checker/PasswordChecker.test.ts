import { PasswordChecker } from "../../app/pass_checker/PasswordChecker";

describe("PasswordChecker test suite", () => {

    let sut: PasswordChecker;

    beforeEach(() => {
        sut = new PasswordChecker();
    })

    it("Password with less then 8 chrs is invalid", () => {
        const actual = sut.checkPassword('1234567');
        expect(actual).toBe(false);
    });

    it("Password has more the 8 chr is OK", () => {
        const actual = sut.checkPassword('123456aA');
        expect(actual).toBe(true);
    });

    it("Password with no uppercase chr is invalid", () => {
        const actual = sut.checkPassword('1234abcd');
        expect(actual).toBe(false);
    })

    it("Password with uppercase chr is valid", () => {
        const actual = sut.checkPassword('1234aBcD');
        expect(actual).toBe(true);
    })
});