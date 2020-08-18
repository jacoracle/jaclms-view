import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NimbusSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { NimbusEntityModule } from './../entities/entity.module';

@NgModule({
  imports: [NimbusSharedModule, RouterModule.forChild([HOME_ROUTE]), NimbusEntityModule],
  declarations: [HomeComponent],
})
export class NimbusHomeModule {}
