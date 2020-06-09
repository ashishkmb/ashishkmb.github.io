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
        scope: 'patient/*.read',
        iss:
          'https://fhir-ehr.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca',
      })
      .then(
        (data) => {
          console.log('oauth');
        },
        (error) => {
          console.log(error);
        }
      )
      .catch(console.error);
  }
}
