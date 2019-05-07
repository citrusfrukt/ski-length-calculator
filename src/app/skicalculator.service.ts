import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WEB_API_URL_BASE } from 'src/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkicalculatorService {

  constructor(private readonly httpClient: HttpClient) { 

  }

  getValue(): Promise<Array<string>> {
    return this.httpClient.get<Array<string>>("api/values").toPromise();
    // return this.httpClient.get<Array<string>>(WEB_API_URL_BASE + "values").toPromise();
  }
}
