import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  inputText: string;
  clean: boolean;
  confidenceLevel: number;

  constructor() {
    this.inputText = '';
    this.clean = false;
    this.confidenceLevel = 0
  }

  ngOnInit(): void {
  }

}
