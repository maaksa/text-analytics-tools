import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {TextSimilarityResponse} from "../models/text-similarity/TextSimilarityResponse";
import {HistoryStore} from "../models/history/HistoryStore";

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {

  private readonly apiUrl = environment.postApi

  constructor(private httpClient: HttpClient) {
  }

  getSentimentAnalysis(inputText1: string, inputText2: string): Observable<TextSimilarityResponse> {
    let params = new HttpParams();
    params = params.append('text1', inputText1);
    params = params.append('text2', inputText2);
    // @ts-ignore
    params = params.append('token', localStorage.getItem("token"));

    let request = {
      timestamp: new Date().toISOString().split('T')[0],
      method: "GET",
      url: this.apiUrl + "sim/v1/?" + params
    }

    HistoryStore.addRequestToStore(request)

    return this.httpClient.get<TextSimilarityResponse>(`${this.apiUrl}sim/v1/?`, {params: params});
  }

}
