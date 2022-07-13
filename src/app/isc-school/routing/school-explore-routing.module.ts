import { SchoolProfileComponent } from './../screens/school-profile/school-profile.component';
import { SchoolExploreComponent } from './../screens/school-explore/school-explore.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SchoolExploreComponent,
  },
  {
    path: ':id',
    component: SchoolProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolExploreRoutingModule {}
