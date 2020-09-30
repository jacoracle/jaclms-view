import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisorTextComponent } from './visor-text/visor-text.component';
import { VisorImageComponent } from './visor-image/visor-image.component';
import { VisorVideoComponent } from './visor-video/visor-video.component';
import { VisorPdfComponent } from './visor-pdf/visor-pdf.component';
import { VisorAudioComponent } from './visor-audio/visor-audio.component';
import { VisorInteractiveActivityComponent } from './visor-interactive-activity/visor-interactive-activity.component';
import { InteractiveActivitiesModule } from 'app/interactive-activities/interactive-activities.module';

@NgModule({
  declarations: [
    VisorImageComponent,
    VisorPdfComponent,
    VisorAudioComponent,
    VisorTextComponent,
    VisorVideoComponent,
    VisorInteractiveActivityComponent
  ],
  exports: [
    VisorImageComponent,
    VisorPdfComponent,
    VisorAudioComponent,
    VisorTextComponent,
    VisorVideoComponent,
    VisorInteractiveActivityComponent
  ],
  imports: [
    CommonModule,
    InteractiveActivitiesModule
  ]
})
export class ComponentsModule { }
