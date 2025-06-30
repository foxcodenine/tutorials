
export type stringInfo = {
    lowerCase: string,
    upperCase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined
}

// ---------------------------------------------------------------------

export function calculateComplexity(stringInfo: stringInfo) {

    if(stringInfo.extraInfo) {
        return Object.keys(stringInfo.extraInfo).length * stringInfo.length
    }
}

// ---------------------------------------------------------------------

type LoggerServiceCallBack = (arg: string) => void;

export function toUpperCaseWithCb(arg: string, callBack: LoggerServiceCallBack) {
    if (!arg) {
        callBack("Invalid argument")
        return
    }

    callBack(`called function with ${arg}`)
    return arg.toUpperCase();
}

// ---------------------------------------------------------------------

export  class OtherStringUtils {

    public toUpperCase(arg: string) {
        return arg.toUpperCase();
    }

    public logString(arg: String) {
        console.log(arg);
    }

    private callExternalService() {
        console.log('Calling external service!!')
    }
}