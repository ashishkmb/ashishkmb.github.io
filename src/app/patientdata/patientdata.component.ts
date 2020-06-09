import { Component, OnInit } from '@angular/core';
import * as FHIR from 'fhirclient';

@Component({
  selector: 'app-patientdata',
  templateUrl: './patientdata.component.html',
  styleUrls: ['./patientdata.component.scss'],
})
export class PatientdataComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    (window as any).FHIR = FHIR;
    FHIR.oauth2
      .ready()
      .then((client) => client.request('Patient'))
      .then(console.log)
      .catch(console.error);
  }
}
