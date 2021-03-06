import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CursoComponent } from './curso/curso.component';
import { NimbusSharedModule } from './../shared/shared.module';
import { AgrupadorComponent } from './agrupador/agrupador.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
    NimbusSharedModule
  ],
  declarations: [CursoComponent, AgrupadorComponent],
  exports: [CursoComponent]
})
export class NimbusEntityModule {}
