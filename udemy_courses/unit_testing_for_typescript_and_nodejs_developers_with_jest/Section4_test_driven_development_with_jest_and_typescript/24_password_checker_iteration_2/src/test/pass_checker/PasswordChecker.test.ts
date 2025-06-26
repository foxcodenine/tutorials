import { PasswordChecker, PasswordErrors } from "../../app/pass_checker/PasswordChecker";

describe("PasswordChecker test suite", () => {

    let sut: PasswordChecker;

    beforeEach(() => {
        sut = new PasswordChecker();
    })

    it("Password with less then 8 chrs is invalid", () => {
        const actual = sut.checkPassword('1234567');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.SHORT);
    });

    it("Password has more the 8 chr is OK", () => {
        const actual = sut.checkPassword('12345678');
        expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
    });

    it("Password with no uppercase chr is invalid", () => {
        const actual = sut.checkPassword('abcd');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
    })

    it("Password with uppercase chr is valid", () => {
        const actual = sut.checkPassword('aBcD');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
    })

    it("Password with no lowercase chr is invalid", () => {
        const actual = sut.checkPassword('ABCD');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
    })

    it("Password with lowercase chr is valid", () => {
        const actual = sut.checkPassword('aBcD');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
    })

    it("Complex password is valid", ()=> {
        const actual = sut.checkPassword('1234aBcD');
        expect(actual.reasons).toHaveLength(0);
        expect(actual.valid).toBe(true);
    })
});