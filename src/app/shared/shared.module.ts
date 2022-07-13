import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SortDataComponent } from './sort-data/sort-data.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    SortDataComponent,
    SidebarComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    NavbarComponent,
    SortDataComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
