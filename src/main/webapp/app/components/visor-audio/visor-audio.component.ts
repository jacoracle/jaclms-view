import { Component, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { IComponente } from 'app/shared/model/componente.model';
import { MultimediaService } from 'app/services/multimedia.service';
import { AudioPlayingService } from 'app/services/audio-playing.service';

@Component({
  selector: 'jhi-visor-audio',
  templateUrl: './visor-audio.component.html',
  styleUrls: ['./visor-audio.component.scss']
})
export class VisorAudioComponent implements OnDestroy {
  defaultSrc: SafeUrl = './../../../../content/images/logo-jhipster.png';
  audioSrc: SafeUrl = '';
  _component?: IComponente;
  @Input()
  set component(componente: IComponente | undefined) {
    this._component = componente;
  }
  get component(): IComponente | undefined {
    return this._component;
  }  
  showLoader = false;
  subscription?: Subscription;
  @ViewChild('audio') audio?: ElementRef;
  active = false;
  playing = false;

  constructor(private multimediaService: MultimediaService, private audioPlayingService: AudioPlayingService) {
    this.subscription = this.audioPlayingService.getActive().subscribe(active => {
      this.active = active;
    });
    this.subscription = this.audioPlayingService.getPlaying().subscribe(playing => {
      if(!this.active) {
        this.playing = playing;
        this.pauseAudio();
      }
    });
  }

  public loadAudio(): void {
    this.showLoader = true;
    if(this.component && this.component.contenido && this.component.contenido.contenido && this.component.contenido.contenido !== "") {
      this.multimediaService.getAudioFile(this.component.contenido.contenido).subscribe(data=> {
        if(data.body) {
          this.audioSrc = this.multimediaService.getSafeUrl(data.body);
          this.showLoader = false;
        }
      });
    }
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public toggleAudio(): void {
    this.audioPlayingService.setActive(false);
    this.active= true;
    this.audioPlayingService.setPlaying(false);
  }

  private pauseAudio(): void {
    if(this.audio) {
      this.audio.nativeElement.pause();
    }
  }
}
