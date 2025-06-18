// Itration1
// A password is invalid if:
//  -   length is less the 8 chr and has no uppercase or lowercase letters

// Itration 2:
//  -   return the reason that make a password invalid

// ---------------------------------------------------------------------

export enum PasswordErrors {
    SHORT = 'Password is too short!',
    NO_UPPER_CASE = 'Upper case letter required!',
    NO_LOWER_CASE = 'Lower case letter required!',
    No_NUMBER = 'At least one number required!'
}

export interface CheckResult {
    valid: boolean,
    reasons: PasswordErrors[]
}

export class PasswordChecker {
    public checkPassword(password: string): CheckResult {

        let reasons: PasswordErrors[] = [];

        this.checkForLength(password, reasons);

        this.checkForUppercase(password, reasons);

        this.checkForLowercase(password, reasons);

        return {
            valid: reasons.length == 0,
            reasons: reasons
        }
    }

    public checkAdminPassword(password: string): CheckResult {

        const basicCheck = this.checkPassword(password);
        this.checkForNumber(password, basicCheck.reasons)

        return {
            valid: basicCheck.reasons.length == 0,
            reasons: basicCheck.reasons
        }
    }

    private checkForNumber(password: string, reasons: PasswordErrors[]) {
        const regxHasNumber = /\d/;
        if (!regxHasNumber.test(password)) {
            reasons.push(PasswordErrors.No_NUMBER)
        }
    }

    private checkForLength(password: string, reasons: PasswordErrors[]) {
        if (password.length < 8) {
            reasons.push(PasswordErrors.SHORT);
        };
    }
    private checkForUppercase(password: string, reasons: PasswordErrors[]) {
        if (password.toLowerCase() == password) {
            reasons.push(PasswordErrors.NO_UPPER_CASE);
        }
    }
    private checkForLowercase(password: string, reasons: PasswordErrors[]) {
        if (password.toUpperCase() == password) {
            reasons.push(PasswordErrors.NO_LOWER_CASE);
        }
    }
}