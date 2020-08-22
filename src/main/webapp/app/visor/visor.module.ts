import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisorComponent } from './visor.component';
import { ComponentsModule } from './../components/components.module';
import { NimbusEntityModule } from 'app/entities/entity.module';
import { ModuloModule } from 'app/entities/modulo/modulo.module';

@NgModule({
  declarations: [VisorComponent],
  imports: [
    CommonModule, ComponentsModule, NimbusEntityModule, ModuloModule
  ]
})
export class VisorModule { }
