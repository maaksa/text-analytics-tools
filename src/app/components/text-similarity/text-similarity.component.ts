import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  inputText1: string;
  inputText2: string;

  constructor() {
    this.inputText1 = "";
    this.inputText2 = "";
  }

  ngOnInit(): void {
  }

}
