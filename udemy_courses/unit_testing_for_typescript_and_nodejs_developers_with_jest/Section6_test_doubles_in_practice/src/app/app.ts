export type User = {
    name: string
    age: number
}

export class AwesomeDatabase {
    private element: Array<User> = new Array<User>();
    // Same as: private element: User[] = [];

    public add(user: User) {
        this.element.push(user);
    }

    public getUserByName(name: string): User | null {
        // Use .find() to locate the user, return null if not found
        const user = this.element.find((u) => u.name === name);
        return user ?? null;
    }
}
