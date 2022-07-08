import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolExploreRoutingModule } from './school-explore-routing.module';
import { HeaderComponent } from './screens/header/header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SchoolExploreRoutingModule
  ]
})
export class SchoolExploreModule { }
