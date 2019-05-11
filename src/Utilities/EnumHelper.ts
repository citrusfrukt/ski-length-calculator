export class EnumHelper {
    public static toNumbers(obj: object){
        return Object.keys(obj).map(x => obj[x as any]).filter(x => typeof x === "number");
    }
}