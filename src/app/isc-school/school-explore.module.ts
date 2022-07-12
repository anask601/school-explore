import { SearchComponentComponent } from './components/search-component/search-component.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { SchoolExploreComponent } from './screens/school-explore/school-explore.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SchoolExploreComponent, SearchComponentComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [SchoolExploreComponent, FormsModule],
})
export class SchoolExploreModule {}
