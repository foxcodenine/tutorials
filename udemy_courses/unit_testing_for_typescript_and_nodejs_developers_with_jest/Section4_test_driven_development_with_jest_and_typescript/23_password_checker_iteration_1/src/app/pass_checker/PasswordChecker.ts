// Itration1
// A password is invalid if:
//  -   length is less the 8 chr and has no uppercase or lowercase letters


export class PasswordChecker {
    public checkPassword(password: string): boolean {

        if (password.length < 8) {
            return false;
        };

        if (password.toLowerCase() == password) {
            return false;
        }

        if (password.toUpperCase() == password) {
            return false;
        }

        return true;
    }
}