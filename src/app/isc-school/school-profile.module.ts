import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SchoolProfileComponent } from './screens/school-profile/school-profile.component';

@NgModule({
  declarations: [SchoolProfileComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [FormsModule],
})
export class SchoolProfileModule {}
