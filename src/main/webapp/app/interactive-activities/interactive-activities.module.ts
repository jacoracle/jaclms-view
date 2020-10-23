import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { VideoResourceComponent } from './multimedia-components/video-resource/video-resource.component';
import { AudioResourceComponent } from './multimedia-components/audio-resource/audio-resource.component';

@NgModule({
  declarations: [QuestionComponent, VideoResourceComponent, AudioResourceComponent],
  imports: [
    CommonModule
  ],
  exports: [QuestionComponent]
})
export class InteractiveActivitiesModule { }
