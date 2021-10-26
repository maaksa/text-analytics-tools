import {Component, OnInit} from '@angular/core';
import {EntityExtractionService} from "../../services/entity-extraction.service";
import {SingleEntity} from "../../models/entity-extraction/EntityExtractionResponse";


@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  inputText: string;
  minConfidence: number;
  isImage: boolean;
  isAbstract: boolean;
  isCategories: boolean;

  titles: String[]
  image: string
  abstract: string
  annotations: Array<SingleEntity>
  categories: String[]

  constructor(private entityExtractionService: EntityExtractionService) {
    this.inputText = entityExtractionService.getInputText()
    this.isImage = false;
    this.isAbstract = false;
    this.isCategories = false;
    this.minConfidence = 0.5;
    this.abstract = ''
    this.titles = []
    this.image = ''
    this.categories = []
    this.annotations = []
  }

  public ngOnInit() {
  }

  setInputText() {
    if (this.inputText == "") {
      return
    }
    this.entityExtractionService.setInputText(this.inputText)
  }

  getLanguageDetection() {
    this.entityExtractionService.getEntityExtraction(this.inputText, this.minConfidence, this.isAbstract, this.isImage, this.isCategories).subscribe((response) => {
      this.annotations = response.annotations
      response.annotations.map(value => {
        this.abstract = value.abstract
        this.categories = value.categories
        this.image = value.image.thumbnail
      })
    })
  }

}
