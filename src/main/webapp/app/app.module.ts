import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { VisorComponent } from './visor/visor.component';
import { ContentBlock1Component } from './content-blocks/content-block1/content-block1.component';

@NgModule({
  imports: [
    BrowserModule,
    NimbusSharedModule,
    NimbusCoreModule,
    NimbusHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    NimbusAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent, VisorComponent, ContentBlock1Component],
  bootstrap: [MainComponent],
})
export class NimbusAppModule {}
