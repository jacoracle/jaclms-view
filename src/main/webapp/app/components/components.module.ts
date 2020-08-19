import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructorImageComponent } from './constructor-image/constructor-image.component';
import { ConstructorPdfComponent } from './constructor-pdf/constructor-pdf.component';
import { ConstructorSoundComponent } from './constructor-sound/constructor-sound.component';
import { ConstructorTextComponent } from './constructor-text/constructor-text.component';
import { ConstructorVideoComponent } from './constructor-video/constructor-video.component';

@NgModule({
  declarations: [
    ConstructorImageComponent,
    ConstructorPdfComponent,
    ConstructorSoundComponent,
    ConstructorTextComponent,
    ConstructorVideoComponent
  ],
  exports: [
    ConstructorImageComponent,
    ConstructorPdfComponent,
    ConstructorSoundComponent,
    ConstructorTextComponent,
    ConstructorVideoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
