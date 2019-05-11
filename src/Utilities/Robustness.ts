export class Robustness {
    public static isDefined<T>(val: T | undefined, valName: string): T {
        if(val === undefined){
            throw new Error(`${valName} is  undefined`);
        }

        return val;
    }

    public static isNotNull<T>(val: T | null, valName: string): T {
        if(val == null){
            throw new Error(`${valName} is  null`);
        }

        return val;
    }
}