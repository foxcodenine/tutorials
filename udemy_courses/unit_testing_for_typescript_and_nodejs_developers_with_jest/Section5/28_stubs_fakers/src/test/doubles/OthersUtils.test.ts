import { calculateComplexity, toUpperCaseWithCb } from "../../app/doubles/OthersUtils"

describe('OtherUtils test suits', () => {

    // --- Stub testing .---
    it('Calculates complexity', () => {

        // Creating a stubs
        const someInfo = {
            length: 5,
            extraInfo: {
                field1: 'something',
                field2: 'other thing',
            }
        }

        const acutal = calculateComplexity(someInfo as any);

        expect(acutal).toBe(10)
    })

    // --- Faker testing .---

    it('ToUpperCase - call callback for invalid argument', () => {
        // Creating a faker
        const fackFn = () => { };
        const actual = toUpperCaseWithCb('', fackFn);

        expect(actual).toBeUndefined()
    })

    it('ToUpperCase - call callback for valid argument', () => {
        // Creating a faker
        const fackFn = () => { };
        const actual = toUpperCaseWithCb('aBc', fackFn);

        expect(actual).toBe('ABC');
    })

    // --- Mocks testing .---

    describe('Tracking callbacks', () => {

        let cbArgs: string[] = [];
        let timesCalled = 0;

        function callBackMock(arg: string) {
            cbArgs.push(arg);
            timesCalled++
        }

        afterEach(() => {
            cbArgs = [];
            timesCalled = 0;
        });

        it('call callback for invalid argument - track calls', () => {
            const actual = toUpperCaseWithCb('', callBackMock);
            expect(actual).toBeUndefined()
            expect(cbArgs).toContain('Invalid argument')
            expect(timesCalled).toBe(1)
        });

        it('call callback for valid argument - track calls', () => {            

            const actual = toUpperCaseWithCb('aBc', callBackMock);
            expect(actual).toBe('ABC');
            expect(cbArgs).toContain('called function with aBc')
            expect(timesCalled).toBe(1)
        });
    });

    describe('Tracking callbacks - with Jest mocks', () => {

        const callBackMock = jest.fn()

        afterEach(()=>{
            jest.clearAllMocks();
        })


        it('call callback for invalid argument - track calls', () => {
            const actual = toUpperCaseWithCb('', callBackMock);
            expect(actual).toBeUndefined()
            expect(callBackMock).toHaveBeenCalledWith("Invalid argument")
            expect(callBackMock).toHaveBeenCalledTimes(1)
        });

        it('call callback for valid argument - track calls', () => {            

            const actual = toUpperCaseWithCb('aBc', callBackMock);
            expect(actual).toBe('ABC');
            expect(callBackMock).toHaveBeenCalledWith('called function with aBc')
            expect(callBackMock).toHaveBeenCalledTimes(1)
        });
    });
})