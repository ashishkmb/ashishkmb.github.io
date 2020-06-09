import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandaloneLaunchComponent } from './standalone-launch/standalone-launch.component';
import { PatientdataComponent } from './patientdata/patientdata.component';

@NgModule({
  declarations: [
    AppComponent,
    StandaloneLaunchComponent,
    PatientdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
