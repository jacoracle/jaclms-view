import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import './vendor';
import { NimbusSharedModule } from 'app/shared/shared.module';
import { NimbusCoreModule } from 'app/core/core.module';
import { NimbusAppRoutingModule } from './app-routing.module';
import { NimbusHomeModule } from './home/home.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { VisorModule } from './visor/visor.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NimbusSharedModule,
    NimbusCoreModule,
    NimbusHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    NimbusAppRoutingModule,
    VisorModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class NimbusAppModule {}
