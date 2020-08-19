import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Componente } from 'app/shared/model/componente.model';
import { FileUploadService } from 'app/services/file-upload.service';
import { IContenido, Contenido } from 'app/shared/model/contenido.model';
import { JhiEventWithContent, JhiEventManager } from 'ng-jhipster';

@Component({
  selector: 'jhi-constructor-video',
  templateUrl: './constructor-video.component.html',
  styleUrls: ['./constructor-video.component.scss']
})
export class ConstructorVideoComponent implements OnInit, OnDestroy {
  defaultVideoUrl: SafeUrl = './../../../../content/images/video.png';
  videoSrc: SafeUrl = '';
  thumbSrc: SafeUrl = '';
  pathUrl = '';
  editing = false;
  @Input() component?: Componente;
  @Output() updateComponent = new EventEmitter();
  @Output() updateMultimediaProperties = new EventEmitter<IContenido>();
  showLoader = false;

  constructor(public fileUploadService: FileUploadService, private domSanitizer: DomSanitizer
  ) {}

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

  public getVideo(path: string): void {
    this.showLoader = true;
    this.fileUploadService.getVideoThumbnailFile(path).subscribe(data => {
      this.showLoader = false;
      const videoPath = URL.createObjectURL(data.body);
      const objectUrl = this.domSanitizer.bypassSecurityTrustUrl(videoPath);
      this.thumbSrc = objectUrl;
    });
  }

  ngOnInit(): void {
    if (this.component && this.component.contenido && this.component.contenido.contenido !== '') {
      this.pathUrl = this.component.contenido.contenido!;
      this.getVideo(this.component.contenido.contenido!);
    }
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
