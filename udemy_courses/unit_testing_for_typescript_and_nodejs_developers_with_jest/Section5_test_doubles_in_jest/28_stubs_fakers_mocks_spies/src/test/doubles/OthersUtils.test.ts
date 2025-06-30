import { calculateComplexity, OtherStringUtils, toUpperCaseWithCb } from "../../app/doubles/OthersUtils"

describe('OtherUtils test suite', () => {

    // --- Stub Example --------------------------------------------------------

    // A "stub" is a minimal, static implementation, often a hardcoded object.
    // Here, we simulate the required shape for the function being tested.
    it('calculates complexity', () => {
        const someInfo = {
            length: 5,
            extraInfo: {
                field1: 'something',
                field2: 'other thing',
            }
        }

        // We use "as any" because someInfo does not exactly match stringInfo.
        const actual = calculateComplexity(someInfo as any);
        expect(actual).toBe(10)
    })

    // --- Fake Example --------------------------------------------------------

    // A "fake" is a simple implementation for testing (not a real callback).
    it('toUpperCaseWithCb - callback for invalid argument', () => {
        const fakeFn = () => { };  // "Fake" callback does nothing.
        const actual = toUpperCaseWithCb('', fakeFn);
        expect(actual).toBeUndefined();
    })

    it('toUpperCaseWithCb - callback for valid argument', () => {
        const fakeFn = () => { };  // "Fake" callback again.
        const actual = toUpperCaseWithCb('aBc', fakeFn);
        expect(actual).toBe('ABC');
    })

    // --- Manual Mock Example -------------------------------------------------

    // Here, we build our own "mock" to record how/when it's called.
    describe('Tracking callbacks - manual mock', () => {
        let cbArgs: string[] = [];
        let timesCalled = 0;

        // This manual "mock" will record the arguments and call count.
        function callBackMock(arg: string) {
            cbArgs.push(arg);
            timesCalled++
        }

        // Reset after each test to avoid leakage.
        afterEach(() => {
            cbArgs = [];
            timesCalled = 0;
        });

        it('tracks callback for invalid argument', () => {
            const actual = toUpperCaseWithCb('', callBackMock);
            expect(actual).toBeUndefined();
            expect(cbArgs).toContain('Invalid argument');
            expect(timesCalled).toBe(1);
        });

        it('tracks callback for valid argument', () => {
            const actual = toUpperCaseWithCb('aBc', callBackMock);
            expect(actual).toBe('ABC');
            expect(cbArgs).toContain('called function with aBc');
            expect(timesCalled).toBe(1);
        });
    });

    // --- Jest Mock Functions -------------------------------------------------

    // Using jest.fn() gives us auto-mocking and built-in call tracking.
    describe('Tracking callbacks - with Jest mocks', () => {
        const callBackMock = jest.fn();

        afterEach(() => {
            jest.clearAllMocks();
        });

        it('tracks callback for invalid argument', () => {
            const actual = toUpperCaseWithCb('', callBackMock);
            expect(actual).toBeUndefined();
            expect(callBackMock).toHaveBeenCalledWith("Invalid argument");
            expect(callBackMock).toHaveBeenCalledTimes(1);
        });

        it('tracks callback for valid argument', () => {
            const actual = toUpperCaseWithCb('aBc', callBackMock);
            expect(actual).toBe('ABC');
            expect(callBackMock).toHaveBeenCalledWith('called function with aBc');
            expect(callBackMock).toHaveBeenCalledTimes(1);
        });
    });

    // --- Spies Example -------------------------------------------------------

    // Spies allow us to observe or replace real implementations.
    describe('OtherStringUtils tests with spies', () => {
        // "SUT" = System Under Test
        let sut: OtherStringUtils;

        beforeEach(() => {
            sut = new OtherStringUtils();
        });

        test('spy on method call', () => {
            // This spy only observes the method, doesn't replace it.
            const toUpperCaseSpy = jest.spyOn(sut, 'toUpperCase');
            sut.toUpperCase('asa');
            expect(toUpperCaseSpy).toHaveBeenCalledWith('asa');
        });

        test('spy on console.log in other modules', () => {
            const consoleLogSpy = jest.spyOn(console, 'log');
            sut.logString('abc');
            expect(consoleLogSpy).toHaveBeenCalledWith('abc');
        });

        test('spy replaces the implementation (mockImplementation)', () => {

            // It's bad practice to test private methods like this in production code,
            // but useful for learning how spies can replace implementations.
            
            jest.spyOn(sut as any, 'callExternalService').mockImplementation(() => {
                console.log('calling mocked implementation!!!');
            });
            (sut as any).callExternalService();
        });
    });
});
