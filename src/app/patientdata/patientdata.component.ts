import { Component, OnInit } from '@angular/core';
import * as FHIR from 'fhirclient';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../Model/patientdata';

@Component({
  selector: 'app-patientdata',
  templateUrl: './patientdata.component.html',
  styleUrls: ['./patientdata.component.scss'],
})
export class PatientdataComponent implements OnInit {
 
  FHIRClients: RootObject;
  constructor() {}

  ngOnInit(): void {
    (window as any).FHIR = FHIR;
    FHIR.oauth2
      .ready()
      .then((client) => client.request('Patient'))
      .then((result) => this.mapData(result))
      .catch(console.error);
  }

  mapData(result) {
    this.FHIRClients = result;
    console.log(this.FHIRClients);
  }
}
