import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisorTextComponent } from './visor-text/visor-text.component';
import { VisorImageComponent } from './visor-image/visor-image.component';
import { VisorVideoComponent } from './visor-video/visor-video.component';
import { ConstructorPdfComponent } from './constructor-pdf/constructor-pdf.component';
import { ConstructorSoundComponent } from './constructor-sound/constructor-sound.component';

@NgModule({
  declarations: [
    VisorImageComponent,
    ConstructorPdfComponent,
    ConstructorSoundComponent,
    VisorTextComponent,
    VisorVideoComponent
  ],
  exports: [
    VisorImageComponent,
    ConstructorPdfComponent,
    ConstructorSoundComponent,
    VisorTextComponent,
    VisorVideoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
