import { Component, OnInit } from '@angular/core';
import * as FHIR from 'fhirclient';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CernerData } from '../Model/cernerresponse';

@Component({
  selector: 'app-patientdata',
  templateUrl: './patientdata.component.html',
  styleUrls: ['./patientdata.component.scss'],
})
export class PatientdataComponent implements OnInit {
  public FHIRpatient: CernerData;
  public patientid: string;
  public cernerResponse;
  constructor(
    private route: ActivatedRoute,
    public SpinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.SpinnerService.show();
    this.route.params.subscribe((params: Params) => {
      this.patientid = params.id;
    });
    this.GetPatientData();
  }

  async GetPatientData() {
    try {
      (window as any).FHIR = FHIR;
      this.cernerResponse = await (await FHIR.oauth2.ready()).request(
        `Patient?_id=${this.patientid}`
      );
      // this.cernerResponse = await (await FHIR.oauth2.ready()).request(
      //   `Patient?given=Jason&family=Argonaut`
      // );
      if (this.cernerResponse) {
        this.FHIRpatient = this.cernerResponse;
        this.SpinnerService.hide();
      }
      else{
        this.SpinnerService.hide();
      }
    } catch (Error) {
      console.log(Error);
      this.SpinnerService.hide();
    }
  }
}
