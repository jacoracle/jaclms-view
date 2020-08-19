import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Componente } from 'app/shared/model/componente.model';
import { FileUploadService } from 'app/services/file-upload.service';
import { IContenido, Contenido } from 'app/shared/model/contenido.model';
import { JhiEventManager, JhiEventWithContent } from 'ng-jhipster';

@Component({
  selector: 'jhi-constructor-pdf',
  templateUrl: './constructor-pdf.component.html',
  styleUrls: ['./constructor-pdf.component.scss']
})
export class ConstructorPdfComponent implements OnInit, OnDestroy {
  defaultPdfUrl: SafeUrl = './../../../../content/images/pdf_layout.png';
  loadedPdfUrl: SafeUrl = './../../../../content/images/pdf_up_layout.png';
  pdfSrc: SafeUrl = '';
  pathUrl = '';
  editing = false;
  @Input() component?: Componente;
  @Output() updateComponent = new EventEmitter();
  @Output() updateMultimediaProperties = new EventEmitter<IContenido>();
  showLoader = false;

  constructor(public fileUploadService: FileUploadService, private domSanitizer: DomSanitizer) { }

  createUpdatedContent(content: IContenido, newContent: IContenido): IContenido {
    return {
      ...new Contenido(),
      id: content.id,
      contenido: newContent.contenido,
      nombre: newContent.nombre,
      extension: newContent.extension,
      peso: newContent.peso
    };
  }

  public getPdf(path: string): void {
    this.showLoader = true;
    this.fileUploadService.getPdfPreviewFile(path).subscribe(data => {
      this.showLoader = false;
      const pdfPath = URL.createObjectURL(data.body);
      this.pdfSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(pdfPath);
    });
  }

  ngOnInit(): void {
    if (this.component && this.component.contenido && this.component.contenido.contenido !== '') {
      this.pathUrl = this.component.contenido.contenido!;
      this.getPdf(this.component.contenido.contenido!);
    }
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
