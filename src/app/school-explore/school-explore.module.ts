import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolExploreRoutingModule } from './school-explore-routing.module';
import { HeaderComponent } from './screens/header/header.component';
import { MainComponent } from './screens/main/main.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    SchoolExploreRoutingModule
  ]
})
export class SchoolExploreModule { }
