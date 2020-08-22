import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentBlocksModule } from 'app/content-blocks/content-blocks.module';
import { ModuloComponent } from './modulo.component';

@NgModule({
  declarations: [ModuloComponent],
  imports: [
    CommonModule,
    ContentBlocksModule
  ],
  exports: [ModuloComponent]
})
export class ModuloModule { }
