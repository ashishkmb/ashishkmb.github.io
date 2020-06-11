import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandaloneLaunchComponent } from './standalone-launch/standalone-launch.component';
import { PatientdataComponent } from './patientdata/patientdata.component';

const routes: Routes = [
  { path: '', redirectTo: '/launch', pathMatch: 'full' },
  { path: 'launch', component: StandaloneLaunchComponent },
  { path: 'index', component: PatientdataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
