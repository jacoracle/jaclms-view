import { Component, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { IComponente } from 'app/shared/model/componente.model';
import { MultimediaService } from 'app/services/multimedia.service';
import { MultimediaPlayingService } from 'app/services/multimedia-playing.service';

@Component({
  selector: 'jhi-visor-video',
  templateUrl: './visor-video.component.html',
  styleUrls: ['./visor-video.component.scss']
})
export class VisorVideoComponent implements OnDestroy {

  defaultSrc: SafeUrl = './../../../../content/images/logo-jhipster.png';
  thumbSrc: SafeUrl = '';
  videoSrc: SafeUrl = '';
  _component?: IComponente;
  @Input()
  set component(componente: IComponente | undefined) {
    this._component = componente;
    if(this._component && this._component.contenido && this._component.contenido.contenido && this._component.contenido.contenido !== "") {
      this.getThumbnail(this._component.contenido.contenido);
    }
  }
  get component(): IComponente | undefined {
    return this._component;
  }
  showLoader = false;
  subscription?: Subscription;
  @ViewChild('video') video?: ElementRef;
  active = false;
  playing = false;

  constructor(private multimediaService: MultimediaService, private multimediaPlayingService: MultimediaPlayingService) {
    this.subscription = this.multimediaPlayingService.getActive().subscribe(active => {
      this.active = active;
    });
    this.subscription = this.multimediaPlayingService.getPlaying().subscribe(playing => {
      if(!this.active) {
        this.playing = playing;
        this.pauseVideo();
      }
    });
  }

  private getThumbnail(path: string): void {
    this.showLoader = true;
    this.multimediaService.getVideoThumbnailFile(path).subscribe(data => {
      if(data.body) {
        this.thumbSrc = this.multimediaService.getSafeUrl(data.body);
        this.showLoader = false;
      }
    });
  }

  public loadVideo(): void {
    this.showLoader = true;
    if(this.component && this.component.contenido && this.component.contenido.contenido && this.component.contenido.contenido !== "") {
      this.multimediaService.getVideoFile(this.component.contenido.contenido).subscribe(data=> {
        if(data.body) {
          this.videoSrc = this.multimediaService.getSafeUrl(data.body);
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

  public toggleVideo(): void {
    this.multimediaPlayingService.setActive(false);
    this.active= true;
    this.multimediaPlayingService.setPlaying(false);
  }

  private pauseVideo(): void {
    if(this.video) {
      this.video.nativeElement.pause();
    }
  }
}
