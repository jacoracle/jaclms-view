import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { VideoResourceComponent } from './multimedia-components/video-resource/video-resource.component';
import { AudioResourceComponent } from './multimedia-components/audio-resource/audio-resource.component';
import { ImageResourceComponent } from './multimedia-components/image-resource/image-resource.component';
import { ClickStopPropagationModule } from './../directives/click-stop-propagation/click-stop-propagation.module';

@NgModule({
  declarations: [QuestionComponent, VideoResourceComponent, AudioResourceComponent, ImageResourceComponent],
  imports: [CommonModule, ClickStopPropagationModule],
  exports: [QuestionComponent]
})
export class InteractiveActivitiesModule { }
