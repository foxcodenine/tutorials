import { AwesomeDatabase, User } from "../app/app";

describe("AwesomeDb test suite", () => {

    let sut: AwesomeDatabase;

    beforeEach(() => {
        sut = new AwesomeDatabase();
    });

    it('should insert a user', () => {
        const someUser: User = { name: 'Chris', age: 40 };

        sut.add(someUser);
        const actual = sut.getUserByName('Chris');

        expect(actual).toEqual(someUser);
    });

    it('should insert a user and call the right methods', () => {

        // Spy on Array.push for all arrays (including element in this class)
        const pushSpy = jest.spyOn(Array.prototype, 'push');

        const someUser: User = { name: 'Chris', age: 40 };

        sut.add(someUser);

        const actual = sut.getUserByName('Chris');

        expect(actual).toEqual(someUser);
        expect(pushSpy).toHaveBeenCalledTimes(1);

        pushSpy.mockRestore(); // Always restore the spy!
    });




});
