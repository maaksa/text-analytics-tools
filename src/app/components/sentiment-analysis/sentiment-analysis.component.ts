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

  primaryColor = {
    r: 0,
    g: 0,
    b: 0
  }

  type: string
  score: number | undefined

  constructor(private sentimentAnalysisService: SentimentAnalysisService) {
    this.inputText = ''
    this.lang = ''
    this.type = ''
  }

  ngOnInit(): void {
  }

  getSentimentAnalysis() {
    this.sentimentAnalysisService.getSentimentAnalysis(this.lang, this.inputText).subscribe((response) => {
      this.type = response.sentiment.type
      this.score = this.setNewScore(response.sentiment.score)
      this.primaryColor.r = 255 + (0 - 255) * this.score
      this.primaryColor.g = 255 * this.score
      this.primaryColor.b = 0
    })
  }

  setNewScore(score: number): number {
    return (score - (-1)) / (1 - (-1));
  }

}
