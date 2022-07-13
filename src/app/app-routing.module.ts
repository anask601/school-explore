import { SchoolProfileComponent } from './isc-school/screens/school-profile/school-profile.component';
import { SchoolExploreComponent } from './isc-school/screens/school-explore/school-explore.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'school-explore',
  },
  {
    path: 'school-explore',
    loadChildren: () =>
      import('./isc-school/school-explore.module').then(
        (m) => m.SchoolExploreModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
