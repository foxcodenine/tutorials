export function myToUpperCase(arg: string) {
    return arg.toUpperCase();
}


export type stringInfo = {
    lowerCase: string,
    upperCase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined
}

export function getStringInfo(arg: string): stringInfo {
    return {
        lowerCase: arg.toLocaleLowerCase(),
        upperCase: arg.toLocaleUpperCase(),
        characters: Array.from(arg),
        length: arg.length,
        extraInfo: {},
    }
}