import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {LanguageDetectionResponse} from "../models/language-detection/LanguageResponse";

@Injectable({
  providedIn: 'root'
})
export class LanguageDetectionService {

  private readonly apiUrl = environment.postApi

  constructor(private httpClient: HttpClient) {
  }

  getLanguageDetection(inputText: string, clean: boolean): Observable<LanguageDetectionResponse> {
    let params = new HttpParams();
    if (clean) {
      params = params.append('clean', clean)
    }
    params = params.append('text', inputText);
    params = params.append('min_confidence', clean);
    // @ts-ignore
    params = params.append('token', localStorage.getItem("token"));

    return this.httpClient.get<LanguageDetectionResponse>(`${this.apiUrl}li/v1/?`, {params: params});
  }

}
