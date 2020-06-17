import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import * as FHIR from 'fhirclient';

@Component({
  selector: 'app-standalone-launch',
  templateUrl: './standalone-launch.component.html',
  styleUrls: ['./standalone-launch.component.scss'],
})
export class StandaloneLaunchComponent implements OnInit {
  //id = 'T81lum-5p6QvDR7l6hv7lfE52bAbA2ylWBnv9CZEzNb0B';
  id = 4342009;
  constructor(
    private readonly router: Router,
    public SpinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.SpinnerService.show();
    (window as any).FHIR = FHIR;
    FHIR.oauth2
      .authorize({
        client_id: '3e24eea1-8af9-4304-ad71-be790b06ad4f',
        //client_id: `dad`,
        // scope: 'patient/Patient.read patient/Observation.read launch online_access openid profile',
        scope: 'launch/patient',
       // iss: `https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/`,
        // iss:`https://uscdi.epic.com/Interconnect-uscdi-oauth/api/FHIR/DSTU2/Practitioner/Thh97FZ9lU9.p-Rgpozo6vwB`,
        iss: `https://fhir-open.sandboxcerner.com/r4/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca`,
        //iss:`https://fhir-myrecord.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca`,
        redirectUri: `http://localhost:4200/index/${this.id}`,
      })
      .then(
        (data) => {
          console.log('test');
        },
        (error) => {
          console.log(error);
        }
      )
      .catch(console.error);
  }
}
