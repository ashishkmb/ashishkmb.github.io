import { Component, OnInit } from '@angular/core';
import * as FHIR from 'fhirclient';

@Component({
  selector: 'app-standalone-launch',
  templateUrl: './standalone-launch.component.html',
  styleUrls: ['./standalone-launch.component.scss'],
})
export class StandaloneLaunchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    (window as any).FHIR = FHIR;
    FHIR.oauth2
      .authorize({
        client_id: '3e24eea1-8af9-4304-ad71-be790b06ad4f',
        scope: 'patient/*.read, ',
        iss: 'https://launch.smarthealthit.org/v/r3/sim/eyJoIjoiMSJ9/fhir',
        redirectUri: 'http://localhost:4200/index'
      })
      .then(
        (data) => {
          console.log('oauth');
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch(console.error);
  }
}
