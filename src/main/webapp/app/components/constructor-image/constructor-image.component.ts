import { Component, OnDestroy, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Componente } from 'app/shared/model/componente.model';
import { FileUploadService } from 'app/services/file-upload.service';
import { IContenido, Contenido } from 'app/shared/model/contenido.model';
import { JhiEventManager, JhiEventWithContent } from 'ng-jhipster';

@Component({
  selector: 'jhi-constructor-image',
  templateUrl: './constructor-image.component.html',
  styleUrls: ['./constructor-image.component.scss']
})
export class ConstructorImageComponent implements OnInit, OnDestroy {
  defaultImageUrl: SafeUrl = './../../../../content/images/img_layout3.png';
  imgSrc: SafeUrl = '';
  editing = false;
  @Input() component?: Componente;
  @Output() updateComponent = new EventEmitter();
  @Output() updateMultimediaProperties = new EventEmitter<IContenido>();
  showLoader = false;

  constructor(public fileUploadService: FileUploadService, private domSanitizer: DomSanitizer) {}

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

  public getImage(path: string): void {
    this.showLoader = true;
    this.fileUploadService.getImageFile(path).subscribe(data => {
      this.showLoader = false;
      const imagePath = URL.createObjectURL(data.body);
      const objectUrl = this.domSanitizer.bypassSecurityTrustUrl(imagePath);
      this.imgSrc = objectUrl;
    });
  }

  ngOnInit(): void {
    if (this.component && this.component.contenido && this.component.contenido.contenido !== '') {
      this.getImage(this.component.contenido.contenido!);
    }
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
