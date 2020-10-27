import { Component, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { MultimediaService } from './../../../services/multimedia.service';
import { Subscription } from 'rxjs';
import { SafeUrl } from '@angular/platform-browser';
import { MultimediaPlayingService } from 'app/services/multimedia-playing.service';

@Component({
  selector: 'jhi-audio-resource',
  templateUrl: './audio-resource.component.html',
  styleUrls: ['./audio-resource.component.scss']
})
export class AudioResourceComponent implements OnDestroy {

  _path?: string;
  @Input()
  set path(path: string | undefined) {
    this._path = path;
  }
  get path(): string | undefined {
    return this._path;
  }
  defaultUrl = "./../../../content/images/logo_login.svg";
  audioSrc?: SafeUrl;
  subscription?: Subscription;
  showLoader = false;
  loadedAudio = false;
  @ViewChild('audio') audio?: ElementRef;
  active = false;
  playing = false;

  constructor(private multimediaService: MultimediaService, private multimediaPlayingService: MultimediaPlayingService) { 
    this.subscription = this.multimediaPlayingService.getActive().subscribe(active => {
      this.active = active;
    });
    this.subscription = this.multimediaPlayingService.getPlaying().subscribe(playing => {
      if(!this.active) {
        this.playing = playing;
        this.pauseAudio();
      }
    });
  }

  loadAudio(): void {
    if(this.path) {
      this.showLoader = true;
      this.subscription = this.multimediaService.getAudioFile(this.path).subscribe(data => {
        if(data.body) {
          this.audioSrc = this.multimediaService.getSafeUrl(data.body);
          this.loadedAudio = true;
          this.showLoader = false;
        }
      })
    }
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public toggleAudio(): void {
    this.multimediaPlayingService.setActive(false);
    this.active= true;
    this.multimediaPlayingService.setPlaying(false);
  }

  private pauseAudio(): void {
    if(this.audio) {
      this.audio.nativeElement.pause();
    }
  }

}
