import {Component, OnInit} from '@angular/core';
import {LanguageDetectionService} from "../../services/language-detection.service";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  inputText: string;
  clean: boolean;
  confidenceLevel: number | undefined;
  lang: string;

  constructor(private languageDetectionService: LanguageDetectionService) {
    this.inputText = '';
    this.clean = false;
    this.lang = ''
  }

  ngOnInit(): void {
  }

  getLanguageDetection() {
    this.languageDetectionService.getLanguageDetection(this.inputText, this.clean).subscribe((response) => {
      response.detectedLangs.map(value => {
        this.lang = value.lang
        this.confidenceLevel = value.confidence
      })
    })
  }

}
