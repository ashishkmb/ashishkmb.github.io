import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StandaloneLaunchComponent } from './standalone-launch/standalone-launch.component';

const routes: Routes = [
  { path: '', redirectTo: '/launch', pathMatch: 'full' },
  { path: 'launch', component: StandaloneLaunchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
