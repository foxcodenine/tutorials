// Import the class to be mocked (will be replaced by Jest during test)
import { DataBase } from "../../../app/server_app/data/DataBase";
// Import the class you're testing, which internally uses DataBase
import { UserCredentialsDataAccess } from "../../../app/server_app/data/UserCredentialsDataAccess";
import { Account } from "../../../app/server_app/model/AuthModel";

// Create mock functions to replace actual methods in the DataBase class
const insertMock = jest.fn(); // Mock function for DataBase.prototype.insert
const getByMock = jest.fn();  // Mock function for DataBase.prototype.getBy

// Tell Jest to mock the DataBase module with a custom fake version
jest.mock("../../../app/server_app/data/DataBase", () => {
    return {
        // Replace the real DataBase class with a mock constructor
        DataBase: jest.fn().mockImplementation(() => {
            // .mockImplementation() defines what happens when 'new DataBase()' is called
            // Here, it returns a plain object with 'insert' and 'getBy' methods
            // These methods are the mock functions we defined above
            return {
                insert: insertMock,
                getBy: getByMock,
            }
        })
    }
});


describe('ReservationsDataAccess test suite', () => {

    let sut: UserCredentialsDataAccess;

    // Dummy account data for tests
    const someAccount: Account = {
        id: "",
        password: "somePassword",
        userName: "someUserName"
    };

    // Dummy id data for tests
    const someId = "123456";

    beforeEach(() => {
        sut = new UserCredentialsDataAccess();
        // Check that the DataBase constructor was called once
        expect(DataBase).toHaveBeenCalledTimes(1);
    });

    afterEach(() => {
        // Reset all mocks after each test for isolation
        jest.clearAllMocks();
    });

    it("should create a user and return an id", async () => {

        // Set up the insert mock to resolve (return with async) with our fake id
        insertMock.mockResolvedValueOnce(someId);

        // Call the method under test
        const accountId = await sut.addUser(someAccount);

        // Check: returned id matches our expectation
        expect(accountId).toBe(someId);
        // Check: insertMock was called with the account data
        expect(insertMock).toHaveBeenCalledWith(someAccount);
    });

    it('should get user by id', async () => {
        // Set up the getBy mock to resolve with our fake account
        getByMock.mockResolvedValueOnce(someAccount);

        // Call the method under test
        const actualUser = await sut.getUserById(someId);

        // Check: result matches our expected account
        expect(actualUser).toEqual(someAccount);
        // Check: getBy was called with 'id' and the id
        expect(getByMock).toHaveBeenCalledWith('id', someId)
    });

    it('should get user by name', async () => {
        // Set up the getBy mock to resolve with our fake account
        getByMock.mockResolvedValueOnce(someAccount);

        // Call the method under test
        const actualUser = await sut.getUserByUserName(someAccount.userName);

        // Check: result matches our expected account
        expect(actualUser).toEqual(someAccount);
        // Check: getBy was called with 'userName' and the username
        expect(getByMock).toHaveBeenCalledWith('userName', someAccount.userName)
    });

});
