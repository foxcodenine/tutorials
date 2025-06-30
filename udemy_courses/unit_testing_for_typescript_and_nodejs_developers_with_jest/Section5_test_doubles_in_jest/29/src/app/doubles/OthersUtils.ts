import { v4 } from "uuid";

export function toUpperCase(arg: string) {
    return arg.toUpperCase();
}

export function toLowerCaseWithId(arg: string) {
    return arg.toLowerCase() + v4();
}

// ---------------------------------------------------------------------

export type stringInfo = {
    lowerCase: string,
    upperCase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined
}

export function calculateComplexity(stringInfo: stringInfo) {

    if(stringInfo.extraInfo) {
        return Object.keys(stringInfo.extraInfo).length * stringInfo.length
    }
}

// ---------------------------------------------------------------------