import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructorImageComponent } from './constructor-image/constructor-image.component';
import { ConstructorPdfComponent } from './constructor-pdf/constructor-pdf.component';
import { ConstructorSoundComponent } from './constructor-sound/constructor-sound.component';
import { VisorTextComponent } from './visor-text/visor-text.component';
import { ConstructorVideoComponent } from './constructor-video/constructor-video.component';

@NgModule({
  declarations: [
    ConstructorImageComponent,
    ConstructorPdfComponent,
    ConstructorSoundComponent,
    VisorTextComponent,
    ConstructorVideoComponent
  ],
  exports: [
    ConstructorImageComponent,
    ConstructorPdfComponent,
    ConstructorSoundComponent,
    VisorTextComponent,
    ConstructorVideoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
