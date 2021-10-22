import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SentimentAnalysisResponse} from "../models/sentiment-analysis/SentimentAnalysisResponse";

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {

  private readonly apiUrl = environment.postApi

  constructor(private httpClient: HttpClient) {
  }

  getSentimentAnalysis(lang: string, inputText: string): Observable<SentimentAnalysisResponse> {
    return this.httpClient.get<SentimentAnalysisResponse>(`${this.apiUrl}sent/v1/?lang=${lang}&text=${inputText}&token=${localStorage.getItem("token")}`);
  }

}
