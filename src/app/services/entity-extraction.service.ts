import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EntityExtractionService {

  private readonly apiUrl = environment.postApi

  inputText: string;

  constructor() {
    this.inputText = ""
  }

  getInputText(): string {
    return this.inputText
  }

  setInputText(inputText: string): void {
    this.inputText = inputText;
  }


}
