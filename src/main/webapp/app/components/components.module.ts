import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisorTextComponent } from './visor-text/visor-text.component';
import { VisorImageComponent } from './visor-image/visor-image.component';
import { VisorVideoComponent } from './visor-video/visor-video.component';
import { VisorPdfComponent } from './visor-pdf/visor-pdf.component';
import { ConstructorSoundComponent } from './constructor-sound/constructor-sound.component';

@NgModule({
  declarations: [
    VisorImageComponent,
    VisorPdfComponent,
    ConstructorSoundComponent,
    VisorTextComponent,
    VisorVideoComponent
  ],
  exports: [
    VisorImageComponent,
    VisorPdfComponent,
    ConstructorSoundComponent,
    VisorTextComponent,
    VisorVideoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
