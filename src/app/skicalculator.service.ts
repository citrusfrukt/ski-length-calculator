import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Discipline } from "./ski-calculator/ski-calculator.component";

@Injectable({
  providedIn: "root"
})
export class SkicalculatorService {

  constructor(private readonly httpClient: HttpClient) {

  }

  recommendedLength(age: number, length: number, discipline: Discipline): [number, number] | number {
    if (age <= 4) {
      return length;
    }

    if (age <= 8) {
      return [length + 10, length + 20];
    }

    switch (discipline) {
      case Discipline.Classic:
        return length + 20;
      case Discipline.FreeStyle:
        return [length + 10, length + 15];
      default:
        throw new Error(`Discipline: ${discipline} not covered in switch`);
    }
  }
  //   getValue(): Promise<Array<string>> {
  //     return this.httpClient.get<Array<string>>("api/values").toPromise();
  //     // return this.httpClient.get<Array<string>>(WEB_API_URL_BASE + "values").toPromise();
  // }
}
