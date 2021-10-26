import {Component, OnInit} from '@angular/core';
import {TextSimilarityService} from "../../services/text-similarity.service";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  inputText1: string;
  inputText2: string;
  similarity: number | undefined

  constructor(private textSimilarityService: TextSimilarityService) {
    this.inputText1 = "";
    this.inputText2 = "";
  }

  ngOnInit(): void {
  }

  getTextSimilarity() {
    this.textSimilarityService.getSentimentAnalysis(this.inputText1, this.inputText2).subscribe((response) => {
      this.similarity = response.similarity
    })
  }

}
