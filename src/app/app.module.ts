import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { BioComponent } from './bio/bio.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { SkillsComponent } from './skills/skills.component';
import { FormationComponent } from './formation/formation.component';
import { CareerComponent } from './career/career.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // If You need animations
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatSliderModule} from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    BioComponent,
    SkillsComponent,
    FormationComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollCoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCarouselModule.forRoot(),
    MatSliderModule
    
 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
