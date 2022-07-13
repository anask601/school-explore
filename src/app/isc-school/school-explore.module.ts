import { SchoolExploreRoutingModule } from './routing/school-explore-routing.module';
import { UniversityFiltersComponent } from './components/university-filters/university-filters.component';
import { UniversityDataComponent } from './components/university-data/university-data.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { SchoolExploreComponent } from './screens/school-explore/school-explore.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components.module';

@NgModule({
  declarations: [SchoolExploreComponent],
  imports: [
    RouterModule.forChild([{ path: '', component: SchoolExploreComponent }]),
    CommonModule,
    SharedModule,
    FormsModule,
    ComponentsModule,
    SchoolExploreRoutingModule,
  ],
  exports: [SchoolExploreComponent, FormsModule],
})
export class SchoolExploreModule {}
