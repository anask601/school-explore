import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolExploreModule } from './isc-school/school-explore.module';
import { SchoolProfileModule } from './isc-school/school-profile.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SchoolExploreModule,
    SchoolProfileModule,
  ],
  exports: [SharedModule, SchoolExploreModule, SchoolProfileModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
