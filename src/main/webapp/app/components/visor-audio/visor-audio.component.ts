import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Componente, IComponente } from 'app/shared/model/componente.model';
import { IContenido, Contenido } from 'app/shared/model/contenido.model';
import { MultimediaService } from 'app/services/multimedia.service';

@Component({
  selector: 'jhi-visor-audio',
  templateUrl: './visor-audio.component.html',
  styleUrls: ['./visor-audio.component.scss']
})
export class VisorAudioComponent implements OnDestroy {
  defaultSoundUrl: SafeUrl = './../../../../content/images/audio_layout.png';
  loadedSoundUrl: SafeUrl = './../../../../content/images/audio_layout_up.png';
  soundSrc: SafeUrl = '';
  pathUrl = '';
  _component?: IComponente;
  @Input()
  set component(componente: IComponente | undefined) {
    this._component = componente;
    if(this._component) {
      this.getAudio(this._component);
    }
    
  }
  get component(): IComponente | undefined {
    return this._component;
  }
  showLoader = false;
  subscription?: Subscription;

  constructor(public multimediaService: MultimediaService, private domSanitizer: DomSanitizer) {}

  public getAudio(component: IComponente): void {
    if (component && component.contenido && component.contenido.contenido !== '') {
      this.multimediaService.getPdfPreviewFile(component.contenido.contenido!).subscribe(data => {
        this.showLoader = false;
        const pdfPath = URL.createObjectURL(data.body);
        this.soundSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(pdfPath);
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
