import {Component, OnInit} from '@angular/core';
import {SentimentAnalysisService} from "../../services/sentiment-analysis.service";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  inputText: string
  lang: string

  type: string
  score: number

  constructor(private sentimentAnalysisService: SentimentAnalysisService) {
    this.inputText = ''
    this.lang = ''
    this.type = ''
    this.score = 0
  }

  ngOnInit(): void {
  }

  getSentimentAnalysis() {
    this.sentimentAnalysisService.getSentimentAnalysis(this.lang, this.inputText).subscribe((response) => {
      this.type = response.sentiment.type
      this.score = response.sentiment.score
    })
  }


}
