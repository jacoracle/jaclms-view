import { Component, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { IComponente } from 'app/shared/model/componente.model';
import { MultimediaService } from 'app/services/multimedia.service';
import { PDFModalService } from 'app/services/pdf-modal.service';

@Component({
  selector: 'jhi-visor-pdf',
  templateUrl: './visor-pdf.component.html',
  styleUrls: ['./visor-pdf.component.scss']
})
export class VisorPdfComponent implements OnDestroy {
  defaultSrc: SafeUrl = './../../../../content/images/logo-jhipster.png';
  pdfSrc: SafeUrl = './../../../../content/images/logo-jhipster.png';
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

  constructor(private multimediaService: MultimediaService, private pdfModalService: PDFModalService) { }

  public loadPdf(): void {
    if(this.component && this.component.contenido && this.component.contenido.contenido && this.component.contenido.contenido !== "") {
      this.multimediaService.getPdfFile(this.component.contenido.contenido).subscribe(data => {
        if(data.body) {
          const safeUrl = this.multimediaService.getSafeResourceUrl(data.body);
          this.pdfModalService.open(safeUrl);
        }
      });
    }
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
