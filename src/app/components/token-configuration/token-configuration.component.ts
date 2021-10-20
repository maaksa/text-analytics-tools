import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from "../../services/configuration.service";

@Component({
  selector: 'app-token-configuration',
  templateUrl: './token-configuration.component.html',
  styleUrls: ['./token-configuration.component.css']
})
export class TokenConfigurationComponent implements OnInit {

  token: string;

  constructor(private configurationService: ConfigurationService) {
    this.token = this.configurationService.getToken()
  }

  ngOnInit(): void {
  }

  getToken() {
    this.token = this.configurationService.getToken()
  }

  setNewToken() {
    if (this.token == "") {
      return
    }
    this.configurationService.setNewToken(this.token)
  }

}
