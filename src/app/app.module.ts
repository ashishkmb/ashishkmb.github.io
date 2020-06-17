import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandaloneLaunchComponent } from './standalone-launch/standalone-launch.component';
import { PatientdataComponent } from './patientdata/patientdata.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './shared/loader.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplaunchComponent } from './applaunch/applaunch.component';
@NgModule({
  declarations: [AppComponent, StandaloneLaunchComponent, PatientdataComponent, ApplaunchComponent],
  imports: [BrowserModule, AppRoutingModule, NgxSpinnerModule, BrowserAnimationsModule],
  providers: [
    { multi: true, provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
