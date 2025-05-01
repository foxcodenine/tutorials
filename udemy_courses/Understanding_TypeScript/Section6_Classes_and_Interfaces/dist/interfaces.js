"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ---------------------------------------------------------------------
// use interface as object types:
let user;
user = {
    email: 'hello@world.com',
    password: 'abc123!',
    role: 'admin',
    login() {
        // reach out db, check credentials, create a session...
    },
    logout() {
        // clear session
    },
};
// ---------------------------------------------------------------------
// implimenting interfaces
class AuthenticatableUser {
    email;
    password;
    role;
    constructor(email, password, role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }
    login() {
    }
    logout() {
    }
}
//# sourceMappingURL=interfaces.js.map