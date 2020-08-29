import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { IComponente } from 'app/shared/model/componente.model';
import { IContenido, Contenido } from 'app/shared/model/contenido.model';
import { MultimediaService } from 'app/services/multimedia.service';

@Component({
  selector: 'jhi-visor-pdf',
  templateUrl: './visor-pdf.component.html',
  styleUrls: ['./visor-pdf.component.scss']
})
export class VisorPdfComponent implements OnDestroy {
  defaultPdfUrl: SafeUrl = './../../../../content/images/pdf_layout.png';
  loadedPdfUrl: SafeUrl = './../../../../content/images/pdf_up_layout.png';
  pdfSrc: SafeUrl = '';
  pathUrl = '';
  _component?: IComponente;
  @Input()
  set component(componente: IComponente | undefined) {
    this._component = componente;
    if(this._component) {
      this.getPdf(this._component);
    }

  }
  get component(): IComponente | undefined {
    return this._component;
  }   
  showLoader = true;
  subscription?: Subscription

  constructor(private multimediaService: MultimediaService, private domSanitizer: DomSanitizer) { }

  public getPdf(component: IComponente): void {
    if (component && component.contenido && component.contenido.contenido !== '') {
      this.multimediaService.getPdfPreviewFile(component.contenido.contenido!).subscribe(data => {
        this.showLoader = false;
        const pdfPath = URL.createObjectURL(data.body);
        this.pdfSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(pdfPath);
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
