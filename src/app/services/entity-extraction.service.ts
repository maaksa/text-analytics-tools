import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {EntityExtractionResponse} from "../models/entity-extraction/EntityExtractionResponse";
import {HistoryStore} from "../models/history/HistoryStore";

@Injectable({
  providedIn: 'root'
})
export class EntityExtractionService {

  private readonly apiUrl = environment.postApi

  inputText: string;

  constructor(private httpClient: HttpClient) {
    this.inputText = ""
  }

  getEntityExtraction(inputText: string, min_confidence: number, isAbstract: boolean, isImage: boolean, isCategories: boolean): Observable<EntityExtractionResponse> {
    let params = new HttpParams();
    if (isAbstract) {
      params = params.append('include', 'abstract')
    }
    if (isImage) {
      params = params.append('include', 'image')
    }
    if (isCategories) {
      params = params.append('include', 'categories')
    }
    params = params.append('text', inputText);
    params = params.append('min_confidence', min_confidence);
    // @ts-ignore
    params = params.append('token', localStorage.getItem("token"));

    let request = {
      timestamp: new Date().toISOString().split('T')[0],
      method: "GET",
      url: this.apiUrl + "nex/v1/?" + params
    }

    HistoryStore.addRequestToStore(request)

    return this.httpClient.get<EntityExtractionResponse>(`${this.apiUrl}nex/v1/?`, {params: params});
  }

  getInputText(): string {
    return this.inputText
  }

  setInputText(inputText: string): void {
    this.inputText = inputText;
  }

}
