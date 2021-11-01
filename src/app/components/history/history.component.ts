import {Component, OnInit} from '@angular/core';
import {RequestHistory} from "../../models/history/RequestHistory";
import {HistoryStore} from "../../models/history/HistoryStore";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  requestHistories: RequestHistory[] = []

  constructor() {
  }

  ngOnInit(): void {
    this.requestHistories = HistoryStore.getRequestHistoryStore()
  }

}
