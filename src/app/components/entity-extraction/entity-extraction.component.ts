import {Component, OnInit} from '@angular/core';
import {EntityExtractionService} from "../../services/entity-extraction.service";


@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  inputText: string;
  value: number;
  image: boolean;
  abstract: boolean;
  categories: boolean;

  constructor(private entityExtractionService: EntityExtractionService) {
    this.inputText = entityExtractionService.getInputText()
    this.value = 0.5;
    this.image = false;
    this.abstract = false;
    this.categories = false;
  }

  public ngOnInit() {
  }

  setInputText() {
    if (this.inputText == "") {
      return
    }
    this.entityExtractionService.setInputText(this.inputText)
  }

}
