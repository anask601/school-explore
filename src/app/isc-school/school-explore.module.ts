import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolExploreComponent } from './screens/school-explore/school-explore.component';

@NgModule({
  declarations: [SchoolExploreComponent],
  imports: [CommonModule, SharedModule],
  exports: [SchoolExploreComponent],
})
export class SchoolExploreModule {}
