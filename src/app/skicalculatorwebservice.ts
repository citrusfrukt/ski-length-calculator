import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export enum Discipline {
  Classic,
  FreeStyle,
}

export interface CalculateLengthRequest {
  age: number;
  lenght: number;
  discipline: Discipline;
}

export interface CalculateLengthResponse {
  minRecommendedLength: number;
  maxRecommendedLength: number;
  discipline: Discipline;
}

@Injectable()
export class SkiCalculatorWebService {

  constructor(private readonly httpClient: HttpClient) {
  }

  public async calculate(data: CalculateLengthRequest): Promise<[number | [number, number], Discipline]> {
    const result = await this.httpClient.post<CalculateLengthResponse>("api/values/calculate", data).toPromise();

    const recommendedLength: number | [number, number] = result.minRecommendedLength === result.maxRecommendedLength
      ? result.minRecommendedLength
      : [result.minRecommendedLength, result.maxRecommendedLength];

    return [recommendedLength, result.discipline];
  }
}
