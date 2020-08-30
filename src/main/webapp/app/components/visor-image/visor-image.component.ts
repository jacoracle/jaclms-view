import { Component, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { IComponente } from 'app/shared/model/componente.model';
import { MultimediaService } from 'app/services/multimedia.service';

@Component({
  selector: 'jhi-visor-image',
  templateUrl: './visor-image.component.html',
  styleUrls: ['./visor-image.component.scss']
})
export class VisorImageComponent implements OnDestroy {
  // defaultImageUrl: SafeUrl = './../../../../content/images/img_layout3.png';
  defaultImageUrl: SafeUrl = '';
  imgSrc: SafeUrl = '';
  _component?: IComponente;
  @Input()
  set component(componente: IComponente | undefined) {
    this._component = componente;
    if(this._component) {
      this.getImage(this._component);
    }
    
  }
  get component(): IComponente | undefined {
    return this._component;
  }   
  showLoader = true;
  subscription?: Subscription;

  constructor(public multimediaService: MultimediaService, private domSanitizer: DomSanitizer) { }


  public getImage(component: IComponente): void {
    if (component && component.contenido && component.contenido.contenido !== '') {
      this.subscription = this.multimediaService.getImageFile(component.contenido.contenido!).subscribe(data => {
        this.showLoader = false;
        const imagePath = URL.createObjectURL(data.body);
        const objectUrl = this.domSanitizer.bypassSecurityTrustUrl(imagePath);
        this.imgSrc = objectUrl;
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
