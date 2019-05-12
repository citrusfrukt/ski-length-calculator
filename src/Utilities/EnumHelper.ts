export class EnumHelper {
    public static toNumbers(obj: any) {
        return Object.keys(obj).map(x => obj[x]).filter(x => typeof x === "number");
    }
}