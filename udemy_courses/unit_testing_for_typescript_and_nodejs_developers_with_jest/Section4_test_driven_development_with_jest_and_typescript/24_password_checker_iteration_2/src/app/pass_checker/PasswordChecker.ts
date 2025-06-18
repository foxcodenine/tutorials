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
}

export interface CheckResult {
    valid: boolean,
    reasons: PasswordErrors[]
}

export class PasswordChecker {
    public checkPassword(password: string): CheckResult {

        let valid = true;
        let reasons:PasswordErrors[] = [];
        

        if (password.length < 8) {
            valid = false;
            reasons.push(PasswordErrors.SHORT);
        };

        if (password.toLowerCase() == password) {
            valid = false;
            reasons.push(PasswordErrors.NO_UPPER_CASE);
        }

        if (password.toUpperCase() == password) {
            valid = false;
            reasons.push(PasswordErrors.NO_LOWER_CASE);
        }

        return {
            valid: valid,
            reasons: reasons
        }
    }
}