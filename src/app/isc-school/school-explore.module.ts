import { SchoolExploreRoutingModule } from './routing/school-explore-routing.module';
import { UniversityFiltersComponent } from './components/university-filters/university-filters.component';
import { UniversityDataComponent } from './components/university-data/university-data.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { SchoolExploreComponent } from './screens/school-explore/school-explore.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SchoolExploreComponent,
    SearchComponentComponent,
    UniversityDataComponent,
    UniversityFiltersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    SchoolExploreRoutingModule,
  ],
  exports: [SchoolExploreComponent, FormsModule],
})
export class SchoolExploreModule {}
