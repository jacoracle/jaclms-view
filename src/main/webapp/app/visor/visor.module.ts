import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisorComponent } from './visor.component';
import { ContentBlocksModule } from './../content-blocks/content-blocks.module';
import { ComponentsModule } from './../components/components.module';
import { NimbusEntityModule } from 'app/entities/entity.module';

@NgModule({
  declarations: [VisorComponent],
  imports: [
    CommonModule, ContentBlocksModule, ComponentsModule, NimbusEntityModule
  ]
})
export class VisorModule { }
