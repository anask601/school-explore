import { UniversityFiltersComponent } from './components/university-filters/university-filters.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversityDataComponent } from './components/university-data/university-data.component';

@NgModule({
  declarations: [
    SearchComponentComponent,
    UniversityDataComponent,
    UniversityFiltersComponent,
  ],
  imports: [CommonModule],
  exports: [
    SearchComponentComponent,
    UniversityFiltersComponent,
    UniversityDataComponent,
  ],
})
export class ComponentsModule {}
