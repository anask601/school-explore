import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SchoolProfileComponent } from './screens/school-profile/school-profile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SchoolProfileComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SchoolProfileComponent }]),
  ],
  exports: [FormsModule],
})
export class SchoolProfileModule {}
