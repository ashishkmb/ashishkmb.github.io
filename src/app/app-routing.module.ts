import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandaloneLaunchComponent } from './standalone-launch/standalone-launch.component';
import { PatientdataComponent } from './patientdata/patientdata.component';
import { ApplaunchComponent } from './applaunch/applaunch.component';

const routes: Routes = [
  { path: '', redirectTo: '/launch', pathMatch: 'full' },
  { path: 'launch', component: ApplaunchComponent },
  { path: 'standaloneapp', component: StandaloneLaunchComponent },
  { path: 'index/:id', component: PatientdataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
