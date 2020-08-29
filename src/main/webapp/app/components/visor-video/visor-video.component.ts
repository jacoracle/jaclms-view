import { Component, Input, OnDestroy } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { IComponente } from 'app/shared/model/componente.model';
import { MultimediaService } from 'app/services/multimedia.service';

@Component({
  selector: 'jhi-visor-video',
  templateUrl: './visor-video.component.html',
  styleUrls: ['./visor-video.component.scss']
})
export class VisorVideoComponent implements OnDestroy {
  // defaultVideoUrl: SafeUrl = './../../../../content/images/video.png';
  defaultVideoUrl: SafeUrl = '';
  videoSrc: SafeUrl = '';
  thumbSrc: SafeUrl = '';
  _component?: IComponente;
  @Input()
  set component(componente: IComponente | undefined) {
    this._component = componente;
    if(this._component) {
      this.getVideo(this._component);
    }
    
  }
  get component(): IComponente | undefined {
    return this._component;
  }  
  showLoader = true;
  subscription?: Subscription;

  constructor(private multimediaService: MultimediaService, private domSanitizer: DomSanitizer) {}

  public getVideo(component: IComponente): void {
    if (component && component.contenido && component.contenido.contenido !== '') {
      this.multimediaService.getVideoThumbnailFile(component.contenido.contenido!).subscribe(data => {
        this.showLoader = false;
        const videoPath = URL.createObjectURL(data.body);
        const objectUrl = this.domSanitizer.bypassSecurityTrustUrl(videoPath);
        this.thumbSrc = objectUrl;
      });
    }
    else {
      this.showLoader = false;
    }
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
