import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisorTextComponent } from './visor-text/visor-text.component';
import { VisorImageComponent } from './visor-image/visor-image.component';
import { ConstructorPdfComponent } from './constructor-pdf/constructor-pdf.component';
import { ConstructorSoundComponent } from './constructor-sound/constructor-sound.component';
import { ConstructorVideoComponent } from './constructor-video/constructor-video.component';

@NgModule({
  declarations: [
    VisorImageComponent,
    ConstructorPdfComponent,
    ConstructorSoundComponent,
    VisorTextComponent,
    ConstructorVideoComponent
  ],
  exports: [
    VisorImageComponent,
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
